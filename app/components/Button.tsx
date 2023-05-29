import type { PropsWithChildren } from "react";

export const Button = ({
  disabled = false,
  className = "",
  children,
  ...props
}: PropsWithChildren<
  {
    disabled?: boolean;
    className?: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>) => (
  <button
    className={`${
      disabled ? "bg-gray-200" : "bg-amber-500 hover:bg-amber-400"
    } inline-flex items-center gap-x-2 rounded-md px-9 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);
