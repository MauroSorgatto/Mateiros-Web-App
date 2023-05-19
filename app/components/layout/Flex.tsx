import type { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

export const Row = ({
  className,
  children,
  ...props
}: PropsWithChildren<Props>) => (
  <div className={`flex flex-row ${className}`} {...props}>
    {children}
  </div>
);
export const Column = ({
  className,
  children,
  ...props
}: PropsWithChildren<Props>) => (
  <div className={`flex flex-col ${className}`} {...props}>
    {children}
  </div>
);
