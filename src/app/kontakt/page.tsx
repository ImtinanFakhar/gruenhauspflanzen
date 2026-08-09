import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kontakt',
    description: 'Haben Sie Fragen oder möchten Sie Tipps zur Pflanzenpflege? Kontaktieren Sie uns!',
    alternates: {
        canonical: 'https://gruenhauspflanzen.de/kontakt/',
    },
};

export default function KontaktPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="badge mb-4">📧 Kontakt</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Kontakt
                        </h1>
                        <p className="text-xl text-gray-600">
                            Haben Sie Fragen oder möchten Sie Tipps zur Pflanzenpflege?
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                            <h2 className="text-2xl font-bold mb-2">Kontakt aufnehmen</h2>
                            <p className="text-gray-600 mb-8">
                                Wir freuen uns über Ihre Nachricht und helfen Ihnen gerne weiter.
                            </p>

                            <form action="https://formspree.io/f/xdkpvzlr" method="POST" className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="input"
                                            placeholder="Ihr Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            E-Mail *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="input"
                                            placeholder="ihre@email.de"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Betreff
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="input"
                                        placeholder="Worum geht es?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nachricht *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        className="input resize-none"
                                        placeholder="Ihre Nachricht an uns..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-full md:w-auto">
                                    Nachricht senden
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="section">
                <div className="container">
                    <div className="max-w-2xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-emerald-50 rounded-2xl p-6">
                                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-lg mb-2">E-Mail</h3>
                                <p className="text-gray-600">
                                    Schreiben Sie an <a href="mailto:hello@imtinan.dev" className="text-emerald-700 font-medium hover:text-emerald-800">hello@imtinan.dev</a> und wir antworten so schnell wie möglich.
                                </p>
                            </div>

                            <div className="bg-emerald-50 rounded-2xl p-6">
                                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-lg mb-2">Antwortzeit</h3>
                                <p className="text-gray-600">
                                    Wir bemühen uns, innerhalb von 24-48 Stunden zu antworten.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
