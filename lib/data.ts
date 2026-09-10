import menuJson from "@/content/menu.json";
import reviewsJson from "@/content/reviews.json";
import hoursJson from "@/content/hours.json";

export const menu = menuJson;
export const reviews = reviewsJson;
export const hours = hoursJson;

export type MenuItem = (typeof menu.sections)[number]["items"][number];
export type ReviewQuote = (typeof reviews.quotes)[number];
