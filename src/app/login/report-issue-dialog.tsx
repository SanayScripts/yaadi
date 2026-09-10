"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ReportIssueDialog() {
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setSubmitted(false); }}>
      <DialogTrigger asChild>
        <button type="button" className="text-xs text-[#635BFF] hover:text-[#5147E0] font-medium">
          Trouble logging in? Report it
        </button>
      </DialogTrigger>
      <DialogContent>
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle>Report a login issue</DialogTitle>
              <DialogDescription>Describe what happened — this goes to the admin team.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-lg border border-[#E3E8EE] px-3 py-2 text-sm outline-none focus:border-[#635BFF]"
              />
              <textarea
                required
                placeholder="What went wrong?"
                rows={4}
                className="w-full rounded-lg border border-[#E3E8EE] px-3 py-2 text-sm outline-none focus:border-[#635BFF] resize-none"
              />
              <DialogFooter>
                <Button type="submit" className="bg-[#635BFF] hover:bg-[#5147E0] text-white">Submit report</Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Reported</DialogTitle>
              <DialogDescription>Thanks — the admin team will follow up by email.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
