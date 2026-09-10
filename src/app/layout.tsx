import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Yaadi",
  description: "College event management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-background text-foreground">
        <nav className="bg-white border-b border-[#E3E8EE] px-6 py-3.5 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-8">
            <Link href="/requests" className="flex items-center gap-2 font-semibold text-[#0A2540] text-[15px]">
              <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
              Yaadi
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/requests" className="text-[13px] font-medium text-[#425466] hover:text-[#0A2540] transition-colors">Requests</Link>
              <Link href="/calendar" className="text-[13px] font-medium text-[#425466] hover:text-[#0A2540] transition-colors">Calendar</Link>
              <Link href="/approvals" className="text-[13px] font-medium text-[#425466] hover:text-[#0A2540] transition-colors">Approvals</Link>
              <Link href="/roadmap" className="text-[13px] font-medium text-[#425466] hover:text-[#0A2540] transition-colors">Roadmap</Link>
            </div>
          </div>
          <Link href="/requests/new">
            <Button size="sm" className="bg-[#635BFF] hover:bg-[#5147E0] text-white shadow-sm">New Request</Button>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
