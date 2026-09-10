"use client";

import { useState, useEffect } from "react";
import { createEventRequest } from "@/app/requests/actions";
import { SlotGrid } from "./slot-grid";
import { LiveChecklist } from "./live-checklist";
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
import type { DocRule } from "@/generated/prisma";

type Club = { id: string; name: string };
type Venue = { id: string; name: string; type: "AUDI" | "OTHER"; capacity: number };

const HOURS = Array.from({ length: 14 }, (_, i) => i + 8);

function timeOptions() {
  const opts: { value: string; label: string }[] = [];
  for (const h of HOURS) {
    for (const m of [0, 30]) {
      const hh = String(h).padStart(2, "0");
      const mm = String(m).padStart(2, "0");
      const label = `${h % 12 === 0 ? 12 : h % 12}:${mm} ${h < 12 ? "AM" : "PM"}`;
      opts.push({ value: `${hh}:${mm}`, label });
    }
  }
  return opts;
}
const TIME_OPTIONS = timeOptions();

export function NewRequestForm({ clubs, venues, docRules }: { clubs: Club[]; venues: Venue[]; docRules: DocRule[] }) {
  const [clubId, setClubId] = useState("");
  const [venueId, setVenueId] = useState("");
  const [date, setDate] = useState("");
  const [startTimeOfDay, setStartTimeOfDay] = useState("");
  const [endTimeOfDay, setEndTimeOfDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [footfall, setFootfall] = useState("");
  const [hasExternalGuest, setHasExternalGuest] = useState(false);
  const [equipment, setEquipment] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const selectedVenue = venues.find((v) => v.id === venueId);
  const isAudi = selectedVenue?.type === "AUDI";
  const selectedClub = clubs.find((c) => c.id === clubId);

  useEffect(() => {
    setStartTime("");
    setEndTime("");
    setStartTimeOfDay("");
    setEndTimeOfDay("");
    setDate("");
  }, [venueId]);

  useEffect(() => {
    if (selectedVenue && !isAudi) {
      setStartTime(date && startTimeOfDay ? `${date}T${startTimeOfDay}` : "");
      setEndTime(date && endTimeOfDay ? `${date}T${endTimeOfDay}` : "");
    }
  }, [date, startTimeOfDay, endTimeOfDay, isAudi, selectedVenue]);

  async function handleSubmit(formData: FormData) {
    setError("");
    setPending(true);
    formData.set("clubId", clubId);
    formData.set("venueId", venueId);
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
          <Select value={clubId} onValueChange={setClubId} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select club">
                {selectedClub?.name ?? "Select club"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {clubs.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label>Event Name</Label>
          <Input name="eventName" required placeholder="Tech Talk: Systems Design" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Venue</Label>
        <Select value={venueId} onValueChange={setVenueId} required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select venue">
              {selectedVenue ? `${selectedVenue.name}${selectedVenue.type === "AUDI" ? " (Auditorium)" : ""} — cap ${selectedVenue.capacity}` : "Select venue"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {venues.map((v) => (
              <SelectItem key={v.id} value={v.id}>
                {v.name} {v.type === "AUDI" ? "(Auditorium)" : ""} — cap {v.capacity}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedVenue && isAudi && (
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
      )}

      {selectedVenue && !isAudi && (
        <div className="space-y-3">
          <Label>Date</Label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Start Time</Label>
              <Select value={startTimeOfDay} onValueChange={setStartTimeOfDay}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select time">
                    {TIME_OPTIONS.find((t) => t.value === startTimeOfDay)?.label ?? "Select time"}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {TIME_OPTIONS.map((t) => (
                    <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>End Time</Label>
              <Select value={endTimeOfDay} onValueChange={setEndTimeOfDay}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select time">
                    {TIME_OPTIONS.find((t) => t.value === endTimeOfDay)?.label ?? "Select time"}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {TIME_OPTIONS.map((t) => (
                    <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 items-end">
        <div className="space-y-1.5">
          <Label>Expected Footfall</Label>
          <Input name="footfall" type="number" min={0} required placeholder="150" value={footfall} onChange={(e) => setFootfall(e.target.value)} />
        </div>
        <div className="flex items-center gap-2 pb-2">
          <Checkbox name="hasExternalGuest" id="guest" checked={hasExternalGuest} onCheckedChange={(v) => setHasExternalGuest(v === true)} />
          <Label htmlFor="guest" className="font-normal">External guest attending</Label>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Equipment (comma-separated)</Label>
        <Input name="equipment" placeholder="mic, projector, speakers" value={equipment} onChange={(e) => setEquipment(e.target.value)} />
      </div>

      {selectedVenue && (
        <div className="space-y-2">
          <Label>Documents this event will require</Label>
          <LiveChecklist
            rules={docRules}
            attrs={{
              footfall: parseInt(footfall, 10) || 0,
              hasExternalGuest,
              isAudi: !!isAudi,
              hasEquipment: equipment.split(",").map((e) => e.trim()).filter(Boolean).length > 0,
            }}
          />
        </div>
      )}

      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {error}
        </div>
      )}

      <Button type="submit" disabled={pending || !clubId || !venueId || !startTime || !endTime} className="bg-[#635BFF] hover:bg-[#5147E0]">
        {pending ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
}
