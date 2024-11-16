import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/abdurrohmanzorif/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/azorifim/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/zorifudin",
    },
  ];

  return (
    <footer className="relative bg-gray-900 py-4 bg-blend-color-burn">
      <div className="absolute inset-0 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b"></div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <div className="text-xl font-semibold text-amber-400 transition-colors duration-200 hover:text-amber-300 md:text-2xl">
            samarasa
          </div>

          <p className="text-xs font-light text-gray-400">
            © {currentYear} samarasa. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="rounded-lg p-2 transition-transform duration-300 group-hover:-translate-y-1">
                <social.icon className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-gray-200" />
              </div>

              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs text-gray-400 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
