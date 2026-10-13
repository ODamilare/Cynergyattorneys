import type { ElementType, ReactNode } from "react";

type Props = { as?: ElementType; className?: string; children: ReactNode };

export function Container({ as: Tag = "div", className = "", children }: Props) {
  return <Tag className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</Tag>;
}
