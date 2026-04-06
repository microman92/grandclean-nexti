import { motion } from "framer-motion";

export default function MobileTelegramBtn() {
  return (
    <motion.a
      href="https://t.me/your_telegram"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 md:hidden z-50 w-14 h-14 bg-[#2AABEE] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(42,171,238,0.5)] cursor-pointer"
    >
      <div className="absolute inset-0 bg-[#2AABEE] rounded-full animate-ping opacity-75" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 relative z-10 -ml-1 mt-1"
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.867-.44-.504-.163-.905-.25-1.026-.53-.063-.146.026-.297.26-.456 3.99-1.738 6.649-2.88 7.977-3.434 3.791-1.583 4.58-1.858 5.09-1.867h.001z" />
      </svg>
    </motion.a>
  );
}
