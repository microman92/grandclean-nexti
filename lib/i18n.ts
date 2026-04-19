import ruMessages from "@/messages/ru.json";
import uzMessages from "@/messages/uz.json";

export type Locale = "ru" | "uz";
export const locales: Locale[] = ["ru", "uz"];
export const defaultLocale: Locale = "ru";

const messages = {
  ru: ruMessages,
  uz: uzMessages,
} as const;

export type Messages = typeof ruMessages;

export function getMessages(lang: Locale): Messages {
  return messages[lang] ?? messages[defaultLocale];
}

// Type-safe t() function — supports dot-notation keys
export function getDictionary(lang: Locale) {
  return messages[lang] ?? messages[defaultLocale];
}
