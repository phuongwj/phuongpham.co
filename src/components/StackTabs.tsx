import { useState } from "react";
import {
  IoCodeSlashOutline,
  IoLayersOutline,
  IoCloudOutline,
  IoConstructOutline,
} from "react-icons/io5";
import { stack } from "../utils/data";

const categories = Object.entries(stack);

const icons = [IoCodeSlashOutline, IoLayersOutline, IoCloudOutline, IoConstructOutline];

export function StackTabs() {
  const [active, setActive] = useState(0);

  return (
    <div
      className="rounded-2xl border p-5 overflow-hidden"
      style={{
        borderColor: "var(--c-border)",
        background: "var(--c-surface)",
      }}
    >
      <p
        className="text-[11px] font-mono uppercase tracking-wider mb-4"
        style={{ color: "var(--c-muted)" }}
      >
        tools i use
      </p>
      <div
        className="relative inline-flex items-center gap-0.5 flex-wrap rounded-xl p-1"
        style={{ background: "var(--c-inset)" }}
      >
        {categories.map(([category], i) => {
          const Icon = icons[i];
          return (
            <button
              key={category}
              onClick={() => setActive(i)}
              className="flex items-center gap-1.5 px-2.5 py-1 whitespace-nowrap cursor-pointer rounded-full"
              style={{
                color:
                  active === i
                    ? "var(--c-heading)"
                    : "var(--c-muted)",
                fontWeight: active === i ? 500 : 400,
                transition: "color 200ms cubic-bezier(0.23, 1, 0.32, 1), background 200ms cubic-bezier(0.23, 1, 0.32, 1)",
                background: active === i ? "var(--c-inset-item)" : "transparent",
                border: "none",
                fontSize: "0.75rem",
              }}
            >
              <Icon size={14} />
              <span>{category}</span>
            </button>
          );
        })}
      </div>

      <div
        className="flex flex-wrap gap-2 rounded-xl p-3 mt-3"
        style={{ background: "var(--c-inset)" }}
      >
        {categories[active][1].map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full cursor-default"
            style={{
              color: "var(--c-heading)",
              background: "var(--c-inset-item)",
              transition:
                "border-color 200ms cubic-bezier(0.23, 1, 0.32, 1), color 200ms cubic-bezier(0.23, 1, 0.32, 1), transform 200ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
