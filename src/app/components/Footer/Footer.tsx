// ./components/Footer/Footer.tsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-6"> {/* increased padding */}
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Left side - copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Bill Xu</p> {/* slightly larger text */}

        {/* Right side - social links */}
        <div className="flex items-center space-x-5">
          <a
            href="https://github.com/billxu1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github size={20} /> {/* slightly bigger icon */}
          </a>
          <a
            href="https://linkedin.com/in/billxu44"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={20} /> {/* slightly bigger icon */}
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-white transition-colors"
          >
            <Mail size={20} /> {/* slightly bigger icon */}
          </a>
        </div>
      </div>
    </footer>
  );
}
