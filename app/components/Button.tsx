import type { PropsWithChildren } from "react";

export const Button = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <button
    type="button"
    className={`inline-flex items-center gap-x-2 rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
  >
    {children}
  </button>
);
