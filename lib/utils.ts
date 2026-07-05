import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes conditionally without style conflicts.
 * Example: cn("px-2", isActive && "bg-accent-blue", "px-4")
 * -> later conflicting classes (px-4) correctly win over px-2.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
