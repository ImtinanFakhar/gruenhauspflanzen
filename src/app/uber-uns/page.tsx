import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Über uns',
    description: 'Unser Blog-Team besteht aus leidenschaftlichen Pflanzenliebhabern, die ihr Wissen und ihre Erfahrungen teilen.',
};

const teamMembers = [
    {
        name: 'Selena Watkins',
        role: 'Gärtnerin',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
        description: 'Expertin für tropische Zimmerpflanzen und nachhaltige Pflanzenpflege.',
    },
    {
        name: 'David Sean',
        role: 'Gärtner',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
        description: 'Spezialisiert auf Sukkulenten und Kakteen mit über 10 Jahren Erfahrung.',
    },
    {
        name: 'Martha Colin',
        role: 'Gärtnerin',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
        description: 'Leidenschaftliche Pflanzenliebhaberin und Interior Design Enthusiastin.',
    },
];

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
                            Willkommen auf unserem Pflanzenblog!
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Wir teilen Tipps, Anleitungen und Inspiration für Pflanzenliebhaber –
                            egal ob Anfänger oder erfahrener Gärtner.
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

            {/* Team Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Unser Team</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Unser Blog-Team besteht aus leidenschaftlichen Pflanzenliebhabern,
                            die ihr Wissen und ihre Erfahrungen teilen.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="card team-card">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={120}
                                    height={120}
                                    className="team-avatar mx-auto"
                                />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.description}</p>
                            </div>
                        ))}
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
