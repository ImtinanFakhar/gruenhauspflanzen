import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung für gruenhauspflanzen.de',
};

export default function DatenschutzPage() {
    return (
        <section className="section">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

                    <div className="prose prose-lg max-w-none">
                        <h2>1. Datenschutz auf einen Blick</h2>

                        <h3>Allgemeine Hinweise</h3>
                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>

                        <h3>Datenerfassung auf dieser Website</h3>
                        <p>
                            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                        </p>
                        <p>
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                            Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>

                        <p>
                            <strong>Wie erfassen wir Ihre Daten?</strong>
                        </p>
                        <p>
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                            Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        </p>
                        <p>
                            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der
                            Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
                            (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                        </p>

                        <h2>2. Hosting</h2>
                        <p>
                            Diese Website wird bei Vercel Inc. gehostet. Die Server befinden sich in verschiedenen
                            Rechenzentren weltweit. Vercel ist ein US-amerikanisches Unternehmen, das sich zur
                            Einhaltung der DSGVO verpflichtet hat.
                        </p>

                        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

                        <h3>Datenschutz</h3>
                        <p>
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>

                        <h3>Hinweis zur verantwortlichen Stelle</h3>
                        <p>
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist
                            im Impressum genannt.
                        </p>

                        <h2>4. Datenerfassung auf dieser Website</h2>

                        <h3>Cookies</h3>
                        <p>
                            Diese Website verwendet keine Tracking-Cookies. Es werden lediglich technisch
                            notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind.
                        </p>

                        <h3>Kontaktformular</h3>
                        <p>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                            aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                            zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                            gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>

                        <h2>5. Plugins und Tools</h2>

                        <h3>Google Fonts (lokales Hosting)</h3>
                        <p>
                            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte
                            Google Fonts, die lokal installiert sind. Eine Verbindung zu Servern von Google
                            findet dabei nicht statt.
                        </p>

                        <h2>6. Ihre Rechte</h2>
                        <p>
                            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger
                            und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
                            außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
