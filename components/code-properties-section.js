import { Binary, Braces, Cpu, Database } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const codeLines = [
  "#include <iostream>",
  "using namespace std;",
  "",
  "int main() {",
  "  int myInt;",
  "  float myFloat;",
  "  double myDouble;",
  "  char myChar;",
  "",
  '  cout << sizeof(myInt) << "\\n";',
  '  cout << sizeof(myFloat) << "\\n";',
  '  cout << sizeof(myDouble) << "\\n";',
  '  cout << sizeof(myChar) << "\\n";',
  "  return 0;",
  "}",
];

const outputLines = [
  { label: "Line 1", value: "4", note: "int" },
  { label: "Line 2", value: "4", note: "float" },
  { label: "Line 3", value: "8", note: "double" },
  { label: "Line 4", value: "1", note: "char" },
];

const propertyCards = [
  {
    icon: Binary,
    type: "int",
    size: "4 bytes",
    detail: "Typical integer storage for whole numbers on many modern systems.",
  },
  {
    icon: Braces,
    type: "float",
    size: "4 bytes",
    detail: "Single-precision decimal storage used for lighter floating-point values.",
  },
  {
    icon: Database,
    type: "double",
    size: "8 bytes",
    detail: "Double-precision storage for more accurate floating-point calculations.",
  },
  {
    icon: Cpu,
    type: "char",
    size: "1 byte",
    detail: "Compact character storage for single symbols and ASCII-style values.",
  },
];

export function CodePropertiesSection() {
  return (
    <section id="cpp-properties" className="section-shell section-padding">
      <SectionHeading
        eyebrow="Code Properties"
        title="A clean C++ sizeof example, turned into a polished portfolio module."
        description="Your C++ snippet is now presented with a premium code panel, compiler-style output, and clear datatype property cards instead of a plain pasted block."
      />

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <article
          className="glass-panel relative overflow-hidden rounded-[28px] p-5 sm:p-6 lg:p-7"
          data-reveal
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_34%)]" />
          <div className="relative z-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">C++ source</p>
                <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Primitive size demo</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-300/80" />
                <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                <span className="h-3 w-3 rounded-full bg-cyan-300/80" />
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-[#070112]/92 shadow-[0_26px_80px_rgba(4,1,18,0.45)]">
              <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white/42">
                <span>main.cpp</span>
                <span>sizeof output</span>
              </div>
              <div className="overflow-x-auto px-4 py-5 sm:px-5">
                <pre className="min-w-[440px] font-mono text-[13px] leading-7 text-white/88 sm:text-sm">
                  {codeLines.map((line, index) => (
                    <div key={`${index}-${line}`} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4">
                      <span className="select-none text-right text-white/22">{String(index + 1).padStart(2, "0")}</span>
                      <code>{line || " "}</code>
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </div>
        </article>

        <div className="grid gap-5">
          <article
            className="glass-panel relative overflow-hidden rounded-[28px] p-5 sm:p-6"
            data-reveal
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/14 via-white/[0.04] to-fuchsia-400/10" />
            <div className="relative z-10">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">Program output</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Compiled result</h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-white/62">
                The snippet prints the typical byte sizes for four common primitive types. Values can vary by platform, but these are the most common modern defaults.
              </p>

              <div className="mt-5 space-y-3">
                {outputLines.map((line) => (
                  <div
                    key={line.label}
                    className="flex items-center justify-between rounded-[20px] border border-white/10 bg-[#090118]/70 px-4 py-3"
                  >
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/36">{line.label}</p>
                      <p className="mt-1 text-sm text-white/62">{line.note}</p>
                    </div>
                    <div className="rounded-full border border-white/12 bg-white/[0.08] px-3 py-1.5 text-base font-semibold text-white sm:text-lg">
                      {line.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {propertyCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.type}
                  className="group glass-panel relative overflow-hidden rounded-[24px] p-5"
                  data-reveal
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_32%)] opacity-90" />
                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/12 bg-white/[0.08] text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-lg font-semibold text-white">{card.type}</p>
                        <p className="mt-1 text-sm text-white/48">Datatype property</p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-sm font-semibold text-white/86">
                        {card.size}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/62">{card.detail}</p>
                  </div>
                  <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
