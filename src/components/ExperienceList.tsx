import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { experience } from "../utils/data";

export function ExperienceList() {
  const entries = [...experience].reverse();
  const [open, setOpen] = useState<string | null>(null);

  return (
    // negative margin lets the hover surface bleed past the text column
    <div className="flex flex-col -mx-3">
      {entries.map((exp) => {
        const id = exp.company + exp.position;
        const isOpen = open === id;

        return (
          <button
            key={id}
            type="button"
            onClick={() => setOpen(isOpen ? null : id)}
            aria-expanded={isOpen}
            className="exp-card exp-toggle w-full text-left px-3 py-2.5 flex items-start gap-2"
          >
            <span className="w-4 h-10 flex items-center justify-center shrink-0">
              <IoChevronForward
                size={12}
                className="exp-chevron"
                style={{
                  color: "var(--c-subtle)",
                  transform: isOpen ? "rotate(90deg)" : "none",
                }}
              />
            </span>

            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 overflow-hidden"
              style={{
                background:
                  exp.company === "PRAXES Medical Group"
                    ? "#fff"
                    : "var(--c-surface-alt)",
              }}
            >
              <img
                src={exp.image}
                alt={exp.company}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            <div className="flex-1 min-w-0 ml-1">
              {/* two columns: role over company, dates over location */}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap min-w-0">
                    <span
                      className="text-[14px] font-semibold leading-snug"
                      style={{ color: "var(--c-heading)" }}
                    >
                      {exp.position}
                    </span>

                    {exp.active && (
                      <span
                        className="inline-flex items-center gap-1.5 text-[10.5px] leading-[16px] shrink-0 px-[7px] rounded-full border"
                        style={{
                          borderColor: "var(--c-active-border)",
                          color: "var(--c-active-text)",
                          background: "var(--c-active-bg)",
                        }}
                      >
                        <span
                          className="w-[5px] h-[5px] rounded-full"
                          style={{ background: "var(--c-active-dot)" }}
                        />
                        Current
                      </span>
                    )}
                  </div>

                  <p
                    className="text-[13px] leading-snug mt-1.5"
                    style={{ color: "var(--c-body)" }}
                  >
                    {exp.company}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <p
                    className="text-[12px] tabular-nums whitespace-nowrap leading-snug"
                    style={{ color: "var(--c-muted)" }}
                  >
                    {exp.duration}
                  </p>
                  <p
                    className="text-[12px] whitespace-nowrap leading-snug mt-1.5"
                    style={{ color: "var(--c-muted-alt)" }}
                  >
                    {exp.location}
                  </p>
                </div>
              </div>

              {/* 0fr -> 1fr animates height without needing a fixed value */}
              <div className="exp-extra" data-open={isOpen ? "true" : "false"}>
                <div>
                  <p
                    className="text-[12.5px] leading-snug pt-2"
                    style={{ color: "var(--c-muted)" }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
