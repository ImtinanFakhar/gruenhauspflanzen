import Link from 'next/link';

const quickLinks = [
    { href: '/blog/', label: 'Blog' },
    { href: '/zimmerpflanzen-fur-schwach-beleuchtete/', label: 'Wenig Licht' },
    { href: '/pflegeleichte-zimmerpflanzen/', label: 'Pflegeleicht' },
    { href: '/badezimmer-pflanzen/', label: 'Badezimmer' },
    { href: '/uber-uns/', label: 'Über uns' },
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
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
