import { ReactNode } from "react";

type WithAuthProps = {
  component: ReactNode;
  fallbackElement?: ReactNode;
  fallbackAction?: () => void;
};

export function WithAuth({
  component,
  fallbackElement,
  fallbackAction,
}: WithAuthProps) {
  if (fallbackElement) return fallbackElement;
  if (fallbackAction) fallbackAction();
  return component;
}
