import { useState, useRef, useEffect } from "react";
import { experience } from "../utils/data";

type Filter = "all" | "active" | "inactive";
const filters: Filter[] = ["all", "active", "inactive"];

export function ExperienceList() {
  const [filter, setFilter] = useState<Filter>("all");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const idx = filters.indexOf(filter);
    const el = tabRefs.current[idx];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [filter]);

  const filtered = [...experience]
    .reverse()
    .filter((exp) => {
      if (filter === "all") return true;
      if (filter === "active") return exp.active;
      return !exp.active;
    });

  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative inline-flex items-center gap-0.5 rounded-2xl border p-1.5 self-start"
        style={{
          borderColor: "var(--c-border)",
          background: "var(--c-surface)",
        }}
      >
        <div
          className="absolute rounded-full border"
          style={{
            borderColor: "var(--c-border-hover)",
            background: "var(--c-bg)",
            left: indicator.left,
            width: indicator.width,
            top: 4,
            bottom: 4,
            transition:
              "left 300ms cubic-bezier(0.23, 1, 0.32, 1), width 300ms cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        />
        {filters.map((f, i) => (
          <button
            key={f}
            ref={(el) => { tabRefs.current[i] = el; }}
            onClick={() => setFilter(f)}
            className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 font-mono uppercase tracking-wider whitespace-nowrap cursor-pointer"
            style={{
              border: "none",
              background: "transparent",
              fontSize: "0.6875rem",
              transition: "color 200ms cubic-bezier(0.23, 1, 0.32, 1)",
              color:
                filter === f
                  ? "var(--c-heading)"
                  : "var(--c-muted)",
              fontWeight: filter === f ? 500 : 400,
            }}
          >
            {f === "active" && (
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--c-active-dot)" }}
              />
            )}
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.length === 0 && (
          <div
            className="rounded-2xl border p-5"
            style={{
              borderColor: "var(--c-border)",
              background: "var(--c-surface)",
            }}
          >
            <p className="text-sm" style={{ color: "var(--c-muted)" }}>
              No experiences to show.
            </p>
          </div>
        )}
        {filtered.map((exp) => (
          <div
            key={exp.company + exp.position}
            className="rounded-2xl border p-4"
            style={{
              borderColor: "var(--c-border)",
              background: "var(--c-surface)",
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 overflow-hidden"
                style={{
                  background:
                    exp.company === "PRAXES Medical Group"
                      ? "#fff"
                      : "var(--c-surface-hover)",
                  marginTop: "2px",
                }}
              >
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p
                    className="font-semibold text-sm leading-tight"
                    style={{ color: "var(--c-heading)" }}
                  >
                    {exp.position}
                  </p>
                  <span
                    className="flex items-center gap-1.5 text-[11px] font-mono shrink-0 px-2 py-0.5 rounded-full border"
                    style={{
                      borderColor: exp.active
                        ? "var(--c-active-border)"
                        : "var(--c-border)",
                      color: exp.active
                        ? "var(--c-active-text)"
                        : "var(--c-muted)",
                      background: exp.active
                        ? "var(--c-active-bg)"
                        : "transparent",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: exp.active
                          ? "var(--c-active-dot)"
                          : "var(--c-inactive-dot)",
                      }}
                    />
                    {exp.active ? "Active" : "Inactive"}
                  </span>
                </div>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--c-muted)" }}
                >
                  {exp.company} · {exp.location}
                </p>
                <p
                  className="text-[11px] font-mono mt-0.5"
                  style={{ color: "var(--c-muted-alt)" }}
                >
                  {exp.duration}
                </p>
              </div>
            </div>

            <p
              className="text-sm mt-3"
              style={{ color: "var(--c-body)" }}
            >
              {exp.description}
            </p>

            <div className="flex items-center gap-1.5 mt-2.5 flex-wrap">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 py-0.5 rounded-md border"
                  style={{
                    color: "var(--c-muted)",
                    borderColor: "var(--c-border)",
                    background: "var(--c-surface-alt)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
