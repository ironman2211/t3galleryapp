import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div className="flex h-20 w-full items-center justify-between bg-black px-10 text-white">
      <p>Some Navbar</p>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default Navbar;
