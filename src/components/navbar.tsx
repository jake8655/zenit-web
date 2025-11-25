"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="bg-nav-bg p-4">
      <ul className="flex justify-center gap-2">
        <Navlink href="/" text="Organizátori" />
        <Navlink href="/akcie" text="Akcie" />
      </ul>
    </nav>
  );
}

function Navlink({ href, text }: { href: string; text: string }) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "text-white px-1 py-1.5 rounded-sm border-white border md:text-2xl md:px-2 md:py-2.5",
          pathname === href && "bg-nav-active border-none",
        )}
      >
        {text}
      </Link>
    </li>
  );
}
