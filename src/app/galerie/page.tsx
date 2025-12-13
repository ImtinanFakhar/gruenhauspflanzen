import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Galerie',
    description: 'Entdecken Sie unsere Pflanzenfotos und Inspirationen. Das hängt vom Pot-Typ ab. Auf Gruenhauspflanzen stellen wir verschiedene Kombinationen und Gestaltungsideen vor.',
};

const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80',
        alt: 'Monstera Deliciosa',
        title: 'Monstera Deliciosa',
    },
    {
        src: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80',
        alt: 'Zimmerpflanzen Arrangement',
        title: 'Grünes Arrangement',
    },
    {
        src: 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=600&q=80',
        alt: 'Sukkulenten Sammlung',
        title: 'Sukkulenten',
    },
    {
        src: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80',
        alt: 'Kakteen auf Fensterbank',
        title: 'Kakteen',
    },
    {
        src: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&q=80',
        alt: 'Pflanzen im Wohnzimmer',
        title: 'Wohnzimmer Deko',
    },
    {
        src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
        alt: 'Hängende Pflanzen',
        title: 'Hängepflanzen',
    },
];

const faqs = [
    {
        question: 'Kann ich bei Gruenhauspflanzen Beratung zur Pflanzenpflege bekommen?',
        answer: 'Ja! Wir teilen regelmäßig Tipps, Anleitungen und Ratschläge direkt auf unserem Blog.',
    },
    {
        question: 'Wie viele Pflanzentypen gibt es in einem Pflanzenpot?',
        answer: 'Das hängt vom Pot-Typ ab. Auf Gruenhauspflanzen stellen wir verschiedene Kombinationen und Gestaltungsideen vor.',
    },
    {
        question: 'Welche Vorteile haben Pflanzen im Alltag?',
        answer: 'Pflanzen verbessern die Luftqualität, steigern das Wohlbefinden und verschönern Ihr Zuhause.',
    },
];

export default function GaleriePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="badge mb-4">📸 Galerie</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Galerie
                        </h1>
                        <p className="text-xl text-gray-600">
                            Entdecken Sie unsere Pflanzenfotos und Inspirationen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">Zur Galerie</h2>
                    <div className="gallery-grid">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="gallery-item">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                                    <p className="text-white font-medium">{image.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section bg-emerald-50">
                <div className="container">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Kontaktieren Sie uns</h2>
                        <p className="text-gray-600 mb-8">
                            Haben Sie Fragen oder möchten Sie Tipps zur Pflanzenpflege? Schreiben Sie uns!
                        </p>
                        <Link href="/kontakt/" className="btn btn-primary">
                            Kontakt aufnehmen
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Häufige Fragen</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                                >
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                        <h3 className="font-semibold text-gray-900 pr-4">
                                            {faq.question}
                                        </h3>
                                        <svg
                                            className="w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform group-open:rotate-180"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
