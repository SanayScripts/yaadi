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
  CONFIRMED: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  PENDING: "bg-amber-100 text-amber-700 hover:bg-amber-100",
  REJECTED: "bg-red-100 text-red-700 hover:bg-red-100",
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
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button
            className="text-sm px-2.5 py-1.5 border border-neutral-200 rounded-md hover:bg-neutral-50"
            onClick={() => setWeekStart((w) => { const d = new Date(w); d.setDate(d.getDate() - 7); return d; })}
          >
            ← Prev
          </button>
          <button
            className="text-sm px-2.5 py-1.5 border border-neutral-200 rounded-md hover:bg-neutral-50"
            onClick={() => setWeekStart(startOfWeek(new Date()))}
          >
            Today
          </button>
          <button
            className="text-sm px-2.5 py-1.5 border border-neutral-200 rounded-md hover:bg-neutral-50"
            onClick={() => setWeekStart((w) => { const d = new Date(w); d.setDate(d.getDate() + 7); return d; })}
          >
            Next →
          </button>
          <span className="text-sm text-neutral-500 ml-2">
            {days[0].toLocaleDateString([], { month: "short", day: "numeric" })} – {days[6].toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })}
          </span>
        </div>

        <Select value={venueFilter} onValueChange={setVenueFilter}>
          <SelectTrigger className="w-56">
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
              <div className={`text-xs font-medium mb-2 pb-2 border-b ${isToday ? "text-indigo-600 border-indigo-200" : "text-neutral-500 border-neutral-200"}`}>
                {day.toLocaleDateString([], { weekday: "short" })} {day.getDate()}
              </div>
              <div className="space-y-1.5">
                {dayEvents.map((ev) => (
                  <Link
                    key={ev.id}
                    href={`/requests/${ev.id}`}
                    className="block rounded-md border border-neutral-200 px-2 py-1.5 hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors"
                  >
                    <p className="text-xs font-medium text-neutral-900 truncate">{ev.eventName}</p>
                    <p className="text-[11px] text-neutral-500 truncate">{ev.venue}</p>
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
