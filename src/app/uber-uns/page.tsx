import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Über uns',
    description: 'Grüne Hauspflanzen ist ein deutschsprachiger Blog rund um Zimmerpflanzen, Pflanzenpflege und grüne Wohnideen.',
    alternates: {
        canonical: 'https://gruenhauspflanzen.de/uber-uns/',
    },
};

const benefits = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Praktische Tipps',
        description: 'Einfache Anleitungen für die Pflege Ihrer Pflanzen.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: 'Inspirierende Ideen',
        description: 'Kreative Gestaltungsideen für Zuhause und Garten.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'Expertenwissen',
        description: 'Fundierte Informationen zu Pflanzenarten und deren Bedürfnissen.',
    },
];

export default function UberUnsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="badge mb-4">🌿 Über uns</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Über Grüne Hauspflanzen
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Grüne Hauspflanzen ist ein deutschsprachiger Blog rund um Zimmerpflanzen, Pflanzenpflege, passende Standorte und grüne Wohnideen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Warum unseren Blog lesen?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-6 rounded-2xl bg-emerald-50"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Redaktion Section */}
            <section className="section">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Unsere Redaktion</h2>
                        <p className="text-gray-600 mb-8">
                            Die Artikel auf Grüne Hauspflanzen werden von der
                            Grüne Hauspflanzen Redaktion recherchiert und verfasst.
                            Wir schreiben über Zimmerpflanzen, Pflegetipps, passende
                            Standorte und grüne Wohnideen – verständlich und praxisnah.
                        </p>
                        <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-emerald-50">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-lg">Grüne Hauspflanzen Redaktion</h3>
                                <p className="text-gray-600 text-sm">Dein Ratgeber für Zimmerpflanzen und Pflanzenpflege</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-emerald-50">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Entdecke unseren Blog
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Stöbere durch unsere Artikel und finde Inspiration für deine grüne Oase.
                    </p>
                    <Link href="/blog/" className="btn btn-primary">
                        Unser Blog
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </>
    );
}
