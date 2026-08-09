import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Impressum',
    description: 'Impressum für gruenhauspflanzen.de',
    alternates: {
        canonical: 'https://gruenhauspflanzen.de/impressum/',
    },
};

export default function ImpressumPage() {
    return (
        <section className="section">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Impressum</h1>

                    <div className="prose prose-lg max-w-none">
                        <h2>Angaben gemäß § 5 TMG</h2>
                        <p>
                            Max Mustermann<br />
                            Musterstraße 1<br />
                            10115 Berlin<br />
                            Deutschland
                        </p>

                        <h2>Kontakt</h2>
                        <p>
                            E-Mail: <a href="mailto:hello@imtinan.dev">hello@imtinan.dev</a>
                        </p>

                        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                        <p>
                            Max Mustermann<br />
                            Musterstraße 1<br />
                            10115 Berlin<br />
                            Deutschland
                        </p>

                        <h2>Haftungsausschluss</h2>

                        <h3>Haftung für Inhalte</h3>
                        <p>
                            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
                            wir jedoch keine Gewähr übernehmen.
                        </p>

                        <h3>Haftung für Links</h3>
                        <p>
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
                            Inhalte auch keine Gewähr übernehmen.
                        </p>

                        <h3>Urheberrecht</h3>
                        <p>
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                            jeweiligen Autors bzw. Erstellers.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}
