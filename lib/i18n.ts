import ru from "@/messages/ru.json";
import uz from "@/messages/uz.json";

export type Locale = "ru" | "uz";

export const locales: Locale[] = ["ru", "uz"];
export const defaultLocale: Locale = "ru";

export type Messages = typeof ru;

const messages: Record<"ru" | "uz", Messages> = {
  ru,
  uz,
};

export function getDictionary(locale: Locale): Messages {
  if (locale === "uz") return messages.uz;
  return messages.ru;
}
