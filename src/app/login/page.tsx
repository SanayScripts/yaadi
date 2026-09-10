import { db } from "@/lib/db";
import { loginWithEmail, loginAsProfile } from "./actions";
import { ReportIssueDialog } from "./report-issue-dialog";
import { MOCK_EMAILS } from "@/lib/mock-accounts";
import Link from "next/link";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  const [clubs, faculty] = await Promise.all([
    db.club.findMany({ orderBy: { name: "asc" } }),
    db.faculty.findMany({ orderBy: { name: "asc" } }),
  ]);

  return (
    <div className="min-h-screen bg-[#F6F9FC] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 justify-center mb-8">
          <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
          <span className="font-semibold text-[#0A2540] text-[15px]">Yaadi</span>
        </div>

        <div className="bg-white border border-[#E3E8EE] rounded-lg shadow-sm p-8">
          <h1 className="text-xl font-semibold text-[#0A2540] mb-1">Log in</h1>
          <p className="text-sm text-[#6B7C93] mb-6">Club reps and faculty both log in here.</p>

          {error && (
            <div className="text-sm text-[#A6161A] bg-[#FDE2E5] border border-[#F5C2C7] rounded-md px-3 py-2 mb-4">
              No account found for that email. Try one of the demo profiles below.
            </div>
          )}

          <form action={loginWithEmail} className="space-y-3">
            <div>
              <label className="text-xs font-medium text-[#425466] block mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="gdg@yaadi.edu"
                className="w-full rounded-lg border border-[#E3E8EE] px-3 py-2 text-sm outline-none focus:border-[#635BFF]"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-[#425466] block mb-1.5">Password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="Anything works — this is a mock login"
                className="w-full rounded-lg border border-[#E3E8EE] px-3 py-2 text-sm outline-none focus:border-[#635BFF]"
              />
            </div>
            <button type="submit" className="w-full bg-[#635BFF] hover:bg-[#5147E0] text-white text-sm font-medium rounded-lg py-2.5 transition-colors">
              Log in
            </button>
          </form>

          <div className="flex items-center justify-between mt-4">
            <ReportIssueDialog />
            <Link href="/signup" className="text-xs text-[#6B7C93] hover:text-[#0A2540]">
              New club rep? Sign up
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-medium text-[#6B7C93] mb-2 text-center">Quick demo login</p>
          <div className="bg-white border border-[#E3E8EE] rounded-lg shadow-sm divide-y divide-[#E3E8EE] overflow-hidden">
            <div className="px-4 py-2 bg-[#F6F9FC] text-[11px] font-medium text-[#6B7C93]">Clubs</div>
            {clubs.map((c) => (
              <form key={c.id} action={loginAsProfile.bind(null, "CLUB", c.id, c.name)}>
                <button type="submit" className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-[#F6F9FC] transition-colors text-left">
                  <span className="text-[#0A2540]">{c.name}</span>
                  <span className="text-xs text-[#8A98AC]">{MOCK_EMAILS[c.name]}</span>
                </button>
              </form>
            ))}
            <div className="px-4 py-2 bg-[#F6F9FC] text-[11px] font-medium text-[#6B7C93]">Faculty</div>
            {faculty.map((f) => (
              <form key={f.id} action={loginAsProfile.bind(null, f.role as "FACULTY" | "PRINCIPAL", f.id, f.name)}>
                <button type="submit" className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-[#F6F9FC] transition-colors text-left">
                  <span className="text-[#0A2540]">{f.name}{f.role === "PRINCIPAL" ? " (Principal)" : ""}</span>
                  <span className="text-xs text-[#8A98AC]">{MOCK_EMAILS[f.name]}</span>
                </button>
              </form>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
