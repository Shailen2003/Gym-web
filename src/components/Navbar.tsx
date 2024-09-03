"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu"; // Assuming ProductItem is not needed
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("relative top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Plan">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Plans">Yearly Plan</HoveredLink>
            <HoveredLink href="/Plans">Monthly Plan</HoveredLink>
            <HoveredLink href="/Plans">Weekly Plan</HoveredLink>
            <HoveredLink href="/Plans">Free trial</HoveredLink>
          </div>
        </MenuItem>

        <Link href="/contact">
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>

        <Link href="..//app/Login.tsx">
          <MenuItem setActive={setActive} active={active} item="Login" />
        </Link>

        <Link href="../app/SignUp.tsx">
          <MenuItem setActive={setActive} active={active} item="Register" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
