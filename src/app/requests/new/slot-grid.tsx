"use client";

import { useState, useEffect, useTransition } from "react";
import { getClashesForSlot } from "@/app/requests/actions";
import { cn } from "@/lib/utils";

type Booking = { id: string; eventName: string; club: string; startTime: string; endTime: string };

const HOURS = Array.from({ length: 14 }, (_, i) => i + 8); // 8am - 9pm

export function SlotGrid({
  venueId,
  date,
  onSelect,
  selectedStart,
  selectedEnd,
}: {
  venueId: string;
  date: string;
  onSelect: (start: string, end: string) => void;
  selectedStart: string;
  selectedEnd: string;
}) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [, startTransition] = useTransition();

  useEffect(() => {
    if (!venueId || !date) return;
    const dayStart = new Date(`${date}T00:00:00`).toISOString();
    const dayEnd = new Date(`${date}T23:59:59`).toISOString();
    startTransition(async () => {
      const res = await fetch(`/api/venue-bookings?venueId=${venueId}&start=${dayStart}&end=${dayEnd}`);
      const data = await res.json();
      setBookings(data);
    });
  }, [venueId, date]);

  function isBooked(hour: number) {
    return bookings.some((b) => {
      const bs = new Date(b.startTime).getHours();
      const be = new Date(b.endTime).getHours();
      return hour >= bs && hour < be;
    });
  }

  function bookingAt(hour: number) {
    return bookings.find((b) => {
      const bs = new Date(b.startTime).getHours();
      const be = new Date(b.endTime).getHours();
      return hour >= bs && hour < be;
    });
  }

  function isSelected(hour: number) {
    if (!selectedStart || !selectedEnd) return false;
    const s = new Date(selectedStart).getHours();
    const e = new Date(selectedEnd).getHours();
    return hour >= s && hour < e;
  }

  function handleClick(hour: number) {
    if (isBooked(hour)) return;
    if (dragStart === null) {
      setDragStart(hour);
      onSelect(`${date}T${String(hour).padStart(2, "0")}:00`, `${date}T${String(hour + 1).padStart(2, "0")}:00`);
    } else {
      const s = Math.min(dragStart, hour);
      const e = Math.max(dragStart, hour) + 1;
      onSelect(`${date}T${String(s).padStart(2, "0")}:00`, `${date}T${String(e).padStart(2, "0")}:00`);
      setDragStart(null);
    }
  }

  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden">
      {HOURS.map((hour) => {
        const booked = isBooked(hour);
        const booking = bookingAt(hour);
        const selected = isSelected(hour);
        return (
          <button
            type="button"
            key={hour}
            disabled={booked}
            onClick={() => handleClick(hour)}
            className={cn(
              "w-full flex items-center justify-between px-4 py-2.5 text-sm border-b border-neutral-100 last:border-b-0 transition-colors",
              booked && "bg-neutral-50 text-neutral-400 cursor-not-allowed",
              !booked && !selected && "hover:bg-indigo-50 cursor-pointer text-neutral-700",
              selected && "bg-indigo-600 text-white hover:bg-indigo-600"
            )}
          >
            <span>{hour % 12 === 0 ? 12 : hour % 12}:00 {hour < 12 ? "AM" : "PM"}</span>
            {booked && <span className="text-xs truncate max-w-[50%]">{booking?.eventName} — {booking?.club}</span>}
            {!booked && dragStart === hour && <span className="text-xs opacity-80">click end hour</span>}
          </button>
        );
      })}
    </div>
  );
}
