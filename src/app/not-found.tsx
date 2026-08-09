import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="section">
            <div className="container">
                <div className="max-w-2xl mx-auto text-center py-16">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Seite nicht gefunden</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Die gesuchte Seite existiert leider nicht oder wurde verschoben.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/" className="btn btn-primary">
                            Zur Startseite
                        </Link>
                        <Link href="/blog/" className="btn btn-secondary">
                            Alle Artikel
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
