
import { motion } from "framer-motion";
import { useTheme} from "@/app/context/ThemeContext";


// --- Contact Component ---
const Contact: React.FC = () => {
  const { theme } = useTheme();

  const sectionClasses =
    theme === "dark" ? "bg-zinc-800 text-gray-100" : "bg-white text-gray-800";
  const headingTextClasses =
    theme === "dark"
      ? "text-gray-100"
      : "text-gray-800";
  const labelClasses = theme === "dark" ? "text-gray-200" : "text-gray-700";
  const inputClasses =
    theme === "dark"
      ? "bg-zinc-700 text-gray-100 border-zinc-600"
      : "bg-gray-100 text-gray-800 border-gray-300";
  const buttonClasses =
    theme === "dark"
      ? "bg-white text-black hover:bg-gray-200"
      : "bg-black text-white hover:bg-gray-800";

  return (
    <section
      id="contact"
      className={`relative min-h-screen flex flex-col items-center justify-start px-6 py-20 transition-colors duration-500 ${sectionClasses} scroll-mt-20`}
    >
      <motion.h2
        className={`text-3xl md:text-4xl font-bold ${headingTextClasses}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="mt-4 text-gray-600 dark:text-gray-400 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        I&apos;m currently open to new opportunities. Feel free to reach out!
      </motion.p>

      <form className="mt-12 w-full max-w-xl">
        <div className="mb-4">
          <label className={`block text-sm font-bold mb-2 ${labelClasses}`} htmlFor="name">
            Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputClasses}`}
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className={`block text-sm font-bold mb-2 ${labelClasses}`} htmlFor="email">
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputClasses}`}
            id="email"
            type="email"
            placeholder="your@email.com"
          />
        </div>
        <div className="mb-6">
          <label className={`block text-sm font-bold mb-2 ${labelClasses}`} htmlFor="message">
            Message
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline resize-none h-32 ${inputClasses}`}
            id="message"
            placeholder="Your message..."
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ${buttonClasses}`}
            type="button"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
