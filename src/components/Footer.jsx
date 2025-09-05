import { Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 pt-14 pb-10 mt-20 border-t border-gray-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Name + Role */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Chetturu Khaleel
          </h2>
          <p className="text-base text-gray-600 mt-2">
            React JS Developer • Building scalable & responsive web apps
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex space-x-10 text-base font-medium">
          <a href="/about" className="hover:text-yellow-500 transition-colors">
            About
          </a>
          <a href="/projects" className="hover:text-yellow-500 transition-colors">
            Projects
          </a>
          <a href="/contact" className="hover:text-yellow-500 transition-colors">
            Contact
          </a>
        </div>

        {/* Right: Socials with icons */}
        <div className="flex space-x-8">
          <a
            href="https://linkedin.com/in/chetturu-khaleel-25a96b266"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500 transition-colors"
          >
            <Linkedin size={26} />
          </a>
          <a
            href="https://github.com/chetturuKhaleel1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500 transition-colors"
          >
            <Github size={26} />
          </a>
          <a
            href="https://instagram.com/ckhaleel1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500 transition-colors"
          >
            <Instagram size={26} />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-sm text-gray-500 tracking-wide">
        © {new Date().getFullYear()} Chetturu Khaleel. All Rights Reserved.
      </div>
    </footer>
  );
}
