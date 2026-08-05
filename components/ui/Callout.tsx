import React from "react";

type CalloutProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export default function Callout({
  children,
  className = "",
  ...props
}: CalloutProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-4 text-sm text-text-secondary ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
