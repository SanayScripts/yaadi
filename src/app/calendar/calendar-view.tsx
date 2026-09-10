"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

type Req = {
  id: string;
  eventName: string;
  club: string;
  venue: string;
  venueId: string;
  status: string;
  startTime: string;
  endTime: string;
};
type Venue = { id: string; name: string; type: string };

const statusColor: Record<string, string> = {
  CONFIRMED: "bg-[#E3F9ED] text-[#067647] hover:bg-[#E3F9ED]",
  PENDING: "bg-[#FFF6DC] text-[#8A6100] hover:bg-[#FFF6DC]",
  REJECTED: "bg-[#FDE2E5] text-[#A6161A] hover:bg-[#FDE2E5]",
};

function startOfWeek(d: Date) {
  const date = new Date(d);
  const day = date.getDay();
  date.setDate(date.getDate() - day);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function CalendarView({ requests, venues }: { requests: Req[]; venues: Venue[] }) {
  const [venueFilter, setVenueFilter] = useState("ALL");
  const [weekStart, setWeekStart] = useState(() => startOfWeek(new Date()));

  const days = useMemo(
    () => Array.from({ length: 7 }, (_, i) => {
      const d = new Date(weekStart);
      d.setDate(d.getDate() + i);
      return d;
    }),
    [weekStart]
  );

  const filtered = requests.filter((r) => venueFilter === "ALL" || r.venueId === venueFilter);

  function eventsForDay(day: Date) {
    return filtered.filter((r) => {
      const s = new Date(r.startTime);
      return s.toDateString() === day.toDateString();
    });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <button
            className="text-sm px-2.5 py-1.5 border border-[#E3E8EE] rounded-md hover:bg-white text-[#425466] bg-white/60 transition-colors"
            onClick={() => setWeekStart((w) => { const d = new Date(w); d.setDate(d.getDate() - 7); return d; })}
          >
            ← Prev
          </button>
          <button
            className="text-sm px-2.5 py-1.5 border border-[#E3E8EE] rounded-md hover:bg-white text-[#425466] bg-white/60 transition-colors"
            onClick={() => setWeekStart(startOfWeek(new Date()))}
          >
            Today
          </button>
          <button
            className="text-sm px-2.5 py-1.5 border border-[#E3E8EE] rounded-md hover:bg-white text-[#425466] bg-white/60 transition-colors"
            onClick={() => setWeekStart((w) => { const d = new Date(w); d.setDate(d.getDate() + 7); return d; })}
          >
            Next →
          </button>
          <span className="text-sm text-[#6B7C93] ml-2">
            {days[0].toLocaleDateString([], { month: "short", day: "numeric" })} – {days[6].toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })}
          </span>
        </div>

        <Select value={venueFilter} onValueChange={setVenueFilter}>
          <SelectTrigger className="w-56 bg-white">
            <SelectValue placeholder="All venues">
              {venueFilter === "ALL" ? "All venues" : venues.find((v) => v.id === venueFilter)?.name}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All venues</SelectItem>
            {venues.map((v) => (
              <SelectItem key={v.id} value={v.id}>{v.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-7 gap-3">
        {days.map((day) => {
          const dayEvents = eventsForDay(day);
          const isToday = day.toDateString() === new Date().toDateString();
          return (
            <div key={day.toISOString()} className="min-h-[220px]">
              <div className={`text-xs font-medium mb-2 pb-2 border-b ${isToday ? "text-[#635BFF] border-[#D9D6FF]" : "text-[#6B7C93] border-[#E3E8EE]"}`}>
                {day.toLocaleDateString([], { weekday: "short" })} {day.getDate()}
              </div>
              <div className="space-y-1.5">
                {dayEvents.map((ev) => (
                  <Link
                    key={ev.id}
                    href={`/requests/${ev.id}`}
                    className="block rounded-md border border-[#E3E8EE] bg-white px-2 py-1.5 shadow-sm hover:border-[#B3AEFF] hover:shadow-md transition-all"
                  >
                    <p className="text-xs font-medium text-[#0A2540] truncate">{ev.eventName}</p>
                    <p className="text-[11px] text-[#6B7C93] truncate">{ev.venue}</p>
                    <Badge className={`${statusColor[ev.status]} mt-1 text-[10px] px-1.5 py-0`}>{ev.status}</Badge>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
