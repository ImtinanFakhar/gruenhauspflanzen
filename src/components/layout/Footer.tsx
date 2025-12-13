import Link from 'next/link';

const quickLinks = [
    { href: '/uber-uns/', label: 'Über uns' },
    { href: '/blog/', label: 'Blog' },
    { href: '/kontakt/', label: 'Kontakt' },
];

const legalLinks = [
    { href: '/datenschutz/', label: 'Datenschutzerklärung' },
    { href: '/impressum/', label: 'Impressum' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* About Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative h-24 w-auto">
                                <img
                                    src="/images/logo.png"
                                    alt="Grüne Hauspflanzen"
                                    className="h-full w-auto object-contain brightness-0 invert"
                                />
                            </div>
                        </Link>
                        <p className="!text-white mb-6 max-w-md">
                            gruenhauspflanzen.de ist dein Blog für Zimmerpflanzen, Hauspflanzen und grüne Wohnideen.
                            Entdecke Tipps zur Pflanzenpflege, Inspiration für dein Zuhause und hilfreiche Ratgeber für Pflanzenliebhaber.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a
                                href="https://pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="Pinterest"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="!text-white font-semibold mb-4">Quicklinks</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="!text-white hover:text-gray-200 transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="!text-white font-semibold mb-4">Newsletter abonnieren</h4>
                        <p className="!text-white text-sm mb-4">
                            Erhalte regelmäßig Tipps zur Pflanzenpflege und die neuesten Blogartikel direkt in dein Postfach.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Deine E-Mail"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-emerald-100/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            />
                            <button
                                type="submit"
                                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded-lg transition-colors"
                            >
                                Abonnieren
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="!text-white text-sm">
                            Copyright © {currentYear} Grüne Hauspflanzen. Alle Rechte vorbehalten.
                        </p>
                        <ul className="flex gap-6">
                            {legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="!text-white hover:text-gray-200 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
