import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandProps = {
  className?: string;
  priority?: boolean;
};

export function Brand({ className, priority = false }: BrandProps) {
  return (
    <Link
      href="/"
      aria-label="FlovFi home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden">
        <Image
          src="/brand/flovfi.png"
          alt=""
          width={28}
          height={28}
          priority={priority}
          className="size-7 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </span>
      <span className="text-[22px] font-semibold tracking-[-0.045em] text-white">
        FlovFi
      </span>
    </Link>
  );
}
