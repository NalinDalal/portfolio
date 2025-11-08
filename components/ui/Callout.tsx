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
      className={`rounded-md border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
