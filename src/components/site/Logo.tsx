import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type LogoProps = {
  showText?: boolean;      // <- NEW
  className?: string;
};

export default function Logo({ showText = true, className }: LogoProps) {
  return (
    <Link href="/" aria-label="Home" className={clsx("flex items-center gap-2", className)}>
      <img src="/logo.png" alt="" className="h-8 w-8 rounded-xl ring-1 ring-zinc-200" />
      {showText && (
        <span className="text-lg md:text-xl font-semibold text-[var(--color-ink)] dark:text-[var(--color-main)]">
          Ministry Of Meaning
        </span>
      )}
    </Link>
  );
}