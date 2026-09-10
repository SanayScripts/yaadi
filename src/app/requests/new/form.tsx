"use client";

import { useState, useEffect } from "react";
import { createEventRequest } from "@/app/requests/actions";
import { SlotGrid } from "./slot-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Club = { id: string; name: string };
type Venue = { id: string; name: string; type: "AUDI" | "OTHER"; capacity: number };

export function NewRequestForm({ clubs, venues }: { clubs: Club[]; venues: Venue[] }) {
  const [venueId, setVenueId] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const selectedVenue = venues.find((v) => v.id === venueId);
  const isAudi = selectedVenue?.type === "AUDI";

  useEffect(() => {
    setStartTime("");
    setEndTime("");
  }, [venueId, date]);

  async function handleSubmit(formData: FormData) {
    setError("");
    setPending(true);
    formData.set("startTime", startTime);
    formData.set("endTime", endTime);
    const res = await createEventRequest(formData);
    if (res?.error) {
      setError(res.error);
      setPending(false);
    }
  }

  return (
    <form action={handleSubmit} className="max-w-2xl space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label>Club</Label>
          <Select name="clubId" required onValueChange={() => {}}>
            <SelectTrigger><SelectValue placeholder="Select club" /></SelectTrigger>
            <SelectContent>
              {clubs.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
            </SelectContent>
          </Select>
          <input type="hidden" name="clubId" />
        </div>

        <div className="space-y-1.5">
          <Label>Event Name</Label>
          <Input name="eventName" required placeholder="Tech Talk: Systems Design" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Venue</Label>
        <Select value={venueId} onValueChange={setVenueId} required>
          <SelectTrigger><SelectValue placeholder="Select venue" /></SelectTrigger>
          <SelectContent>
            {venues.map((v) => (
              <SelectItem key={v.id} value={v.id}>
                {v.name} {v.type === "AUDI" ? "(Auditorium)" : ""} — cap {v.capacity}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input type="hidden" name="venueId" value={venueId} />
      </div>

      {isAudi ? (
        <div className="space-y-3">
          <Label>Pick a date and slot</Label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          {date && (
            <SlotGrid
              venueId={venueId}
              date={date}
              selectedStart={startTime}
              selectedEnd={endTime}
              onSelect={(s, e) => { setStartTime(s); setEndTime(e); }}
            />
          )}
          {startTime && endTime && (
            <p className="text-sm text-neutral-500">
              Selected: {new Date(startTime).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })} –{" "}
              {new Date(endTime).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
            </p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label>Start Time</Label>
            <Input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
          </div>
          <div className="space-y-1.5">
            <Label>End Time</Label>
            <Input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 items-end">
        <div className="space-y-1.5">
          <Label>Expected Footfall</Label>
          <Input name="footfall" type="number" min={0} required placeholder="150" />
        </div>
        <div className="flex items-center gap-2 pb-2">
          <Checkbox name="hasExternalGuest" id="guest" />
          <Label htmlFor="guest" className="font-normal">External guest attending</Label>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Equipment (comma-separated)</Label>
        <Input name="equipment" placeholder="mic, projector, speakers" />
      </div>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {error}
        </div>
      )}

      <Button type="submit" disabled={pending || !venueId || !startTime || !endTime} className="bg-indigo-600 hover:bg-indigo-700">
        {pending ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
}
