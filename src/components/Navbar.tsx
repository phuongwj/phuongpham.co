import { useEffect, useState } from "react";
import {
  IoHomeOutline,
  IoBriefcaseOutline,
  IoCodeSlashOutline,
  IoSunnyOutline,
  IoMoonOutline,
} from "react-icons/io5";

const pages = [
  { id: "home", href: "/", icon: IoHomeOutline, label: "Home" },
  { id: "work", href: "/work", icon: IoBriefcaseOutline, label: "Work" },
  { id: "projects", href: "/projects", icon: IoCodeSlashOutline, label: "Projects" },
];

function useLocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "America/Halifax",
        })
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return { dark, toggle };
}

export function Navbar({ currentPage }: { currentPage: string }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const time = useLocalTime();
  const { dark, toggle } = useTheme();

  const activeIndex = pages.findIndex((p) => p.id === currentPage);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div
        className="flex items-center justify-between px-3 py-2 rounded-2xl border backdrop-blur-xl shadow-sm"
        style={{
          borderColor: "var(--c-border)",
          background: "var(--c-bg-alpha)",
        }}
      >
        <div className="relative flex items-center gap-1">
          <div
            className="absolute h-8 w-8 rounded-full transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{
              background: "var(--c-nav-active)",
              transform: `translateX(${activeIndex * 36}px)`,
            }}
          />
          {pages.map(({ id, href, icon: Icon, label }) => (
            <div
              key={id}
              className="relative"
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              <a
                href={href}
                aria-label={label}
                className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full transition-[color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-90"
                style={{
                  color:
                    currentPage === id
                      ? "var(--c-heading)"
                      : "var(--c-muted)",
                }}
              >
                <Icon size={16} />
              </a>
              <span
                className="absolute left-1/2 top-full mt-3 px-2 py-1 text-[11px] font-medium backdrop-blur-md rounded-md whitespace-nowrap pointer-events-none"
                style={{
                  color: "var(--c-tooltip)",
                  background: "var(--c-nav-active)",
                  opacity: hovered === id ? 1 : 0,
                  transform: `translateX(-50%) translateY(${hovered === id ? "0" : "-4px"})`,
                  transition:
                    "opacity 150ms cubic-bezier(0.23, 1, 0.32, 1), transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-1.5 text-[11px] font-mono pr-1"
            style={{ color: "var(--c-muted)" }}
          >
            <span>Halifax, CA</span>
            <span>·</span>
            <span>{time}</span>
          </div>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer transition-[color,background,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-90"
            style={{
              color: "var(--c-muted)",
              background: "transparent",
              border: "none",
            }}
          >
            {dark ? <IoSunnyOutline size={15} /> : <IoMoonOutline size={15} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
