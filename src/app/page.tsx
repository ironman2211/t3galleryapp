import { SignedIn, SignedOut } from "@clerk/nextjs";
import Home from "./_components/Home";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#c8a5f8] to-[#8086e9] text-white">
      <SignedOut>
        <div className="text-bold p-20 text-2xl text-black">
          <p>Please click the button below to login with your Clerk account.</p>
        </div>
      </SignedOut>
      <SignedIn>
        <Home />
      </SignedIn>
    </main>
  );
}
