import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yaadi",
  description: "College event management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-neutral-900">
        <nav className="border-b border-neutral-200 px-6 py-3 flex items-center gap-6">
          <Link href="/requests" className="font-semibold text-neutral-900">Yaadi</Link>
          <Link href="/requests" className="text-sm text-neutral-600 hover:text-neutral-900">Requests</Link>
          <Link href="/requests/new" className="text-sm text-neutral-600 hover:text-neutral-900">New Request</Link>
          <Link href="/calendar" className="text-sm text-neutral-600 hover:text-neutral-900">Calendar</Link>
          <Link href="/approvals" className="text-sm text-neutral-600 hover:text-neutral-900">Approvals</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
