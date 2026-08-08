import { experience } from "../utils/data";

export function ExperienceList() {
  const entries = [...experience].reverse();

  return (
    <div className="flex flex-col gap-1.5">
      {entries.map((exp) => (
        <div
          key={exp.company + exp.position}
          className="exp-card rounded-[10px] border px-[13px] py-2.5 flex items-start gap-2.5"
          style={{
            borderColor: "var(--c-border)",
            background: "var(--c-surface)",
          }}
        >
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 overflow-hidden"
            style={{
              background:
                exp.company === "PRAXES Medical Group"
                  ? "#fff"
                  : "var(--c-surface-hover)",
            }}
          >
            <img
              src={exp.image}
              alt={exp.company}
              className="w-full h-full object-contain rounded-md"
            />
          </div>

          <div className="flex-1 min-w-0">
            {/* company leads with the date; role sits on the line beneath */}
            <div className="flex items-baseline justify-between gap-3.5">
              <div className="flex items-baseline gap-2 flex-wrap min-w-0">
                <span
                  className="text-[13px] font-semibold"
                  style={{ color: "var(--c-heading)" }}
                >
                  {exp.company}
                </span>
                {exp.active && (
                  <span
                    className="inline-flex items-center gap-1.5 text-[10.5px] leading-[17px] shrink-0 px-[7px] rounded-full border"
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

              <span
                className="text-[11px] tabular-nums whitespace-nowrap shrink-0"
                style={{ color: "var(--c-muted)" }}
              >
                {exp.duration}
              </span>
            </div>

            <p
              className="text-[12.5px] leading-snug mt-[1px]"
              style={{ color: "var(--c-body)" }}
            >
              {exp.position}
            </p>

            <p
              className="text-[12px] leading-[1.45] mt-[3px]"
              style={{ color: "var(--c-muted)" }}
            >
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
