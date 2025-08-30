// ./components/Footer/Footer.tsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Left side - copyright */}
        <p className="text-xs">&copy; {new Date().getFullYear()} Bill Xu</p>

        {/* Right side - social links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/billxu1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/billxu44"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
