import { Phone, Instagram, Facebook, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingContacts() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.3 }}
        href="https://www.instagram.com/grandcleanuz/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Instagram className="w-5 h-5" />
      </motion.a>

      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2 }}
        href="https://facebook.com/grandcleanuz"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Facebook className="w-5 h-5" />
      </motion.a>

      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1 }}
        href="https://t.me/GrandCleanUZ"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#2AABEE] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Send className="w-5 h-5 -ml-0.5 mt-0.5" />
      </motion.a>

      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href="tel:+998935712151"
        className="w-14 h-14 bg-gold text-accent-foreground rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(255,184,0,0.5)] hover:scale-110 transition-transform relative mt-1"
      >
        <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-60" />
        <Phone className="w-6 h-6 relative z-10 fill-current" />
      </motion.a>
    </div>
  );
}
