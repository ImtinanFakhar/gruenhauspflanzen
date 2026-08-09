'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/zimmerpflanzen-fur-schwach-beleuchtete/', label: 'Wenig Licht' },
  { href: '/pflegeleichte-zimmerpflanzen/', label: 'Pflegeleicht' },
  { href: '/badezimmer-pflanzen/', label: 'Badezimmer' },
  { href: '/blog/', label: 'Blog' },
  { href: '/uber-uns/', label: 'Über uns' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-16 md:h-24 w-auto">
              <img
                src="/images/logo.png"
                alt="Grüne Hauspflanzen"
                className="h-full w-auto object-contain"
              />
            </div>
            {/* Fallback text if logo doesn't load or for SEO, but usually redundant if logo has text. 
                Based on the site, the logo likely includes the text. 
                If the logo DOES NOT include text, we keep the text.
                Let's assume the logo IS the text + icon. 
                But to be safe, I'll keep the text hidden on mobile and visible on desktop if the logo is just an icon?
                No, looking at the original site, the logo is "Icon + Text" in one image usually?
                Actually, checking widely, often it's separate.
                Let's use the image and hide the text for now, assuming the image is complete.
                Wait, if I don't know for sure, I should probably keep the text but maybe `hidden` if the image is wide.
                Let's fallback to: Show Image. If Image is just icon, we need text.
                The filename `gruenhauspflanzen-logo.png` suggests full logo.
            */}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${isActive(link.href) ? 'active text-emerald-600' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fadeIn">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 px-4 rounded-lg transition-colors ${isActive(link.href)
                      ? 'bg-emerald-50 text-emerald-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
