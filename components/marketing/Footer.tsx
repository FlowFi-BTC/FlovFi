import Link from "next/link";

import { footerColumns, site } from "@/lib/content/marketing";

import { ArrowUpRight, GithubIcon } from "./icons";
import { Brand } from "./ui/Brand";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-[1500px] px-5 py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Brand />

            <p className="mt-5 max-w-[340px] text-[13px] leading-relaxed text-white/45">
              Bitcoin-native receivables financing on Stacks. A verified
              business, a real invoice, and sBTC from a capital provider —
              settled by two Clarity contracts.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/40">
                <span className="size-1.5 rounded-full bg-signal" />
                Stacks testnet
              </span>

              <Link
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/40 transition-colors hover:border-white/25 hover:text-white"
              >
                <GithubIcon className="size-3.5" />
                GitHub
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">
                  {column.title}
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-1 text-[12px] text-white/50 transition-colors hover:text-white"
                        >
                          {link.label}
                          <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[12px] text-white/50 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <p className="max-w-[520px] sm:text-right">{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
