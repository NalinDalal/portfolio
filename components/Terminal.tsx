"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type LineKind = "command" | "output" | "link";

interface TerminalLine {
  id: string;
  kind: LineKind;
  text: string;
  href?: string;
}

interface TerminalProps {
  counts: {
    work: number;
    writing: number;
    oss: number;
  };
}

interface PathTarget {
  href: string;
  label: string;
}

const pad = (value: number) => String(value).padStart(2, "0");

const TILE_SCALE = 4;
const TILE_GRID = 16;

function drawTimeTile(canvas: HTMLCanvasElement, now: Date) {
  const context = canvas.getContext("2d");

  if (!context) return;

  const styles = getComputedStyle(canvas);
  const token = (name: string, fallback: string) =>
    styles.getPropertyValue(name).trim() || fallback;

  const accent = token("--color-accent", "#e8a838");
  const background = token("--color-bg-primary", "#0a0a0b");
  const border = token("--color-border", "#232326");
  const secondary = token("--color-text-secondary", "#8b8b96");

  const dot = (x: number, y: number, color: string, alpha = 1) => {
    context.globalAlpha = alpha;
    context.fillStyle = color;
    context.fillRect(
      x * TILE_SCALE,
      y * TILE_SCALE,
      TILE_SCALE,
      TILE_SCALE,
    );
  };

  context.globalAlpha = 1;
  context.fillStyle = background;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const hour = now.getHours();
  const minute = now.getMinutes();

  for (let y = 1; y < 11; y += 1) {
    for (let x = 1; x < TILE_GRID - 1; x += 1) {
      if ((x * 3 + y * 5 + hour + minute) % 17 === 0) {
        dot(x, y, secondary, 0.18);
      }
    }
  }

  for (let x = 1; x < TILE_GRID - 1; x += 1) {
    dot(x, 12, border);
  }

  const dayProgress = (hour * 60 + minute) / 1440;
  const filled = Math.round(dayProgress * (TILE_GRID - 2));

  for (let x = 1; x < TILE_GRID - 1; x += 1) {
    dot(x, 14, x <= filled ? accent : border, x <= filled ? 0.85 : 0.7);
  }

  const isDay = hour >= 6 && hour < 18;

  if (isDay) {
    const progress = ((hour - 6) * 60 + minute) / 720;
    const x = 2 + Math.round(progress * 11);
    const y = 10 - Math.round(Math.sin(progress * Math.PI) * 6);

    dot(x, y, accent);
    dot(x + 1, y, accent, 0.7);
    dot(x, y + 1, accent, 0.7);
  } else {
    const progress =
      hour >= 18 ? ((hour - 18) * 60 + minute) / 360 : (hour * 60 + minute) / 360;
    const x = 2 + Math.round(progress * 11);
    const y = 4 + Math.round(Math.sin(progress * Math.PI) * 3);

    dot(x, y, accent, 0.9);
    dot(x + 1, y, accent, 0.55);
    dot(x, y + 1, accent, 0.45);
    dot(x + 1, y + 1, background);
  }

  context.globalAlpha = 1;
}

export default function Terminal({ counts }: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>(() => [
    { id: "0", kind: "command", text: "whoami" },
    { id: "1", kind: "output", text: "Nalin Dalal, Software Engineer" },
    { id: "2", kind: "command", text: "ls" },
    {
      id: "3",
      kind: "link",
      text: `work/       ${pad(counts.work)} featured projects`,
      href: "#work",
    },
    {
      id: "4",
      kind: "link",
      text: `writing/    ${pad(counts.writing)} notes`,
      href: "#notes",
    },
    {
      id: "5",
      kind: "link",
      text: `oss/        ${pad(counts.oss)} merged PRs`,
      href: "#contributions",
    },
    {
      id: "6",
      kind: "link",
      text: "resume.md  Resume",
      href: "/resume",
    },
  ]);
  const [value, setValue] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [timeLabel, setTimeLabel] = useState("Local time");

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const render = () => {
      const now = new Date();

      drawTimeTile(canvas, now);
      setTimeLabel(
        `Local time ${new Intl.DateTimeFormat(undefined, {
          hour: "numeric",
          minute: "2-digit",
        }).format(now)}`,
      );
    };

    render();
    const timer = window.setInterval(render, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  const paths: Record<string, PathTarget> = {
    work: { href: "#work", label: "work/" },
    writing: { href: "#notes", label: "writing/" },
    oss: { href: "#contributions", label: "oss/" },
    resume: { href: "/resume", label: "resume.md" },
  };

  const listing = (): Omit<TerminalLine, "id">[] => [
    {
      kind: "link",
      text: `work/       ${pad(counts.work)} featured projects`,
      href: "#work",
    },
    {
      kind: "link",
      text: `writing/    ${pad(counts.writing)} notes`,
      href: "#notes",
    },
    {
      kind: "link",
      text: `oss/        ${pad(counts.oss)} merged PRs`,
      href: "#contributions",
    },
    { kind: "link", text: "resume.md  Resume", href: "/resume" },
  ];

  function run(raw: string) {
    const command = raw.trim().toLowerCase();

    if (!command) return;

    const added: Omit<TerminalLine, "id">[] = [
      { kind: "command", text: command },
    ];

    if (command === "help") {
      added.push({
        kind: "output",
        text: "commands: help, whoami, ls, open work, open writing, open oss, open resume",
      });
    } else if (command === "whoami") {
      added.push({ kind: "output", text: "Nalin Dalal, Software Engineer" });
    } else if (command === "ls") {
      added.push(...listing());
    } else if (command.startsWith("open ")) {
      const target = paths[command.slice(5).trim()];

      if (target) {
        added.push({ kind: "output", text: `opening ${target.label}` });
        window.location.href = target.href;
      } else {
        added.push({
          kind: "output",
          text: "unknown path. type ls to see what is here",
        });
      }
    } else {
      added.push({
        kind: "output",
        text: `command not found: ${command}. type help`,
      });
    }

    const stamp = Date.now();

    setLines((current) =>
      [
        ...current,
        ...added.map((line, index) => ({ ...line, id: `${stamp}-${index}` })),
      ].slice(-14),
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    run(value);
    setValue("");
  }

  return (
    <div className="border-border bg-surface mt-8 max-w-2xl border">
      <div className="border-border flex items-center justify-between gap-3 border-b px-4 py-2">
        <div className="flex min-w-0 items-center gap-3">
          <canvas
            ref={canvasRef}
            width={64}
            height={64}
            role="img"
            aria-label={timeLabel}
            title={timeLabel}
            className="h-16 w-16 shrink-0 [image-rendering:pixelated]"
          />
          <span className="text-text-secondary font-mono text-[var(--text-caption)]">
            nalin@portfolio:~$
          </span>
        </div>
        <span className="text-text-secondary font-mono text-[var(--text-caption)]">
          bash
        </span>
      </div>

      <div
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
        className="space-y-1 px-4 py-4 font-mono text-[var(--text-small)]"
      >
        {lines.map((line) => (
          <p key={line.id} className="break-words">
            {line.kind === "command" ? (
              <>
                <span className="text-accent">$ </span>
                <span className="text-text-primary">{line.text}</span>
              </>
            ) : line.kind === "link" && line.href ? (
              <a
                href={line.href}
                className="text-text-secondary transition-colors duration-150 hover:text-accent"
              >
                {line.text}
              </a>
            ) : (
              <span className="text-text-secondary">{line.text}</span>
            )}
          </p>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="border-border flex items-center gap-2 border-t px-4 py-3"
      >
        <label
          htmlFor="terminal-command"
          className="text-accent font-mono text-[var(--text-small)]"
        >
          $
        </label>
        <input
          id="terminal-command"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          autoComplete="off"
          spellCheck={false}
          placeholder="type help"
          aria-label="Type a terminal command"
          className="bg-transparent font-mono text-[var(--text-small)] text-text-primary placeholder:text-text-secondary"
        />
      </form>

      <div className="border-border flex flex-wrap gap-2 border-t px-4 py-3">
        {["help", "whoami", "ls"].map((command) => (
          <button
            key={command}
            type="button"
            onClick={() => run(command)}
            className="border-border text-text-secondary hover:border-accent hover:text-accent rounded-none border px-2.5 py-1 font-mono text-[var(--text-caption)] transition-colors duration-150"
          >
            {command}
          </button>
        ))}
      </div>
    </div>
  );
}
