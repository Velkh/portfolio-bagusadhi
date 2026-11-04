import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-2xl font-bold bg-accent text-black px-3 border-2 border-white hover:bg-white transition-colors duration-150"
        >
          Bagus.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-text-secondary hover:text-white transition-colors duration-150 text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Resume Button - Desktop */}
        <a
          href="/Bagus-Adhi-Nugroho-CV.pdf"
          download="Bagus-Adhi-Nugroho-CV.pdf"
          className="hidden md:inline-block neo-btn neo-btn--sm"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="md:hidden p-2 text-white hover:text-accent transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t-4 border-white">
          <div className="flex flex-col gap-4 px-4 md:px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-text-secondary hover:text-white transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Bagus-Adhi-Nugroho-CV.pdf"
              download="Bagus-Adhi-Nugroho-CV.pdf"
              className="neo-btn neo-btn--sm text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
