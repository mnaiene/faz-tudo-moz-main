import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingChatButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/258840000000", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-[200]"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="bg-primary text-primary-foreground w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center text-2xl transition-all"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>
    </motion.div>
  );
};

export default FloatingChatButton;
