import { db } from "@/lib/db";
import { signupAsClub } from "./actions";
import Link from "next/link";

export default async function SignupPage() {
  const clubs = await db.club.findMany({ orderBy: { name: "asc" } });

  return (
    <div className="min-h-screen bg-[#F6F9FC] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 justify-center mb-8">
          <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
          <span className="font-semibold text-[#0A2540] text-[15px]">Yaadi</span>
        </div>

        <div className="bg-white border border-[#E3E8EE] rounded-lg shadow-sm p-8">
          <h1 className="text-xl font-semibold text-[#0A2540] mb-1">Sign up</h1>
          <p className="text-sm text-[#6B7C93] mb-6">Club reps only — faculty accounts are provisioned separately.</p>

          <form action={signupAsClub} className="space-y-3">
            <div>
              <label className="text-xs font-medium text-[#425466] block mb-1.5">Your club</label>
              <select
                name="clubId"
                required
                defaultValue=""
                className="w-full rounded-lg border border-[#E3E8EE] px-3 py-2 text-sm outline-none focus:border-[#635BFF] bg-white"
              >
                <option value="" disabled>Select your club</option>
                {clubs.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-[#425466] block mb-1.5">Your name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Rep's full name"
                className="w-full rounded-lg border border-[#E3E8EE] px-3 py-2 text-sm outline-none focus:border-[#635BFF]"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-[#425466] block mb-1.5">Email</label>
              <input
                type="email"
                required
                placeholder="you@yaadi.edu"
                className="w-full rounded-lg border border-[#E3E8EE] px-3 py-2 text-sm outline-none focus:border-[#635BFF]"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-[#425466] block mb-1.5">Password</label>
              <input
                type="password"
                required
                placeholder="Mock — not actually checked"
                className="w-full rounded-lg border border-[#E3E8EE] px-3 py-2 text-sm outline-none focus:border-[#635BFF]"
              />
            </div>
            <button type="submit" className="w-full bg-[#635BFF] hover:bg-[#5147E0] text-white text-sm font-medium rounded-lg py-2.5 transition-colors">
              Sign up
            </button>
          </form>

          <Link href="/login" className="block text-center text-xs text-[#6B7C93] hover:text-[#0A2540] mt-4">
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
