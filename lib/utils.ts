import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export default function truncateString(
	str: string,
	maxLength?: number,
): string {
	const length = maxLength || 4;
	if (str.length <= length) {
		return str;
	}
	return `${str.slice(0, length)}...${str.slice(-length)}`;
}
