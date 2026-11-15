import Link from 'next/link';
import Image from 'next/image';
import { getRecentPosts, formatDate } from '@/lib/posts';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Pflanzenpflege leicht gemacht',
    description: 'Einfache Tipps und Schritt-für-Schritt-Anleitungen für gesunde Zimmerpflanzen.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Grüne Inspiration für dein Zuhause',
    description: 'Ideen, wie Hauspflanzen deine Wohnung verschönern und für mehr Wohlbefinden sorgen.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Wissen für Pflanzenfreunde',
    description: 'Spannende Blogartikel rund um Zimmerpflanzen, Trends und nützliche Ratgeber.',
  },
];

const categories = [
  {
    title: 'Zimmerpflanzen',
    description: 'Alle beliebten Arten im Überblick – nach Standort, Licht und Pflege sortiert.',
    image: '/images/posts/zimmerpflanzen/zimmerpflanzen-wohnzimmer.webp',
    href: '/zimmerpflanzen/',
  },
  {
    title: 'Wenig Licht',
    description: 'Die besten Zimmerpflanzen für dunkle Räume und schattige Ecken.',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80',
    href: '/zimmerpflanzen-fur-schwach-beleuchtete/',
  },
  {
    title: 'Pflegeleicht',
    description: 'Robuste Zimmerpflanzen für Anfänger und Vielbeschäftigte.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
    href: '/pflegeleichte-zimmerpflanzen/',
  },
  {
    title: 'Badezimmer',
    description: 'Tropische Pflanzen, die sich im Bad wohlfühlen.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80',
    href: '/badezimmer-pflanzen/',
  },
];

export default function HomePage() {
  const recentPosts = getRecentPosts(3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <span className="badge mb-4">🌿 Zimmerpflanzen Blog</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Mach dein Zuhause schöner mit beliebten{' '}
                <span className="text-emerald-600">Zimmerpflanzen</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Entdecke Tipps und Inspiration rund um Hauspflanzen. Erfahre, wie
                Zimmerpflanzen dein Zuhause verschönern, die Luftqualität verbessern
                und für mehr Wohlbefinden sorgen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/blog/" className="btn btn-primary">
                  Entdecken
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/uber-uns/" className="btn btn-secondary">
                  Über uns
                </Link>
              </div>
            </div>
            <div className="relative animate-slideUp hidden lg:block">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-full blur-3xl opacity-30"></div>
                <Image
                  src="https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&q=80"
                  alt="Schöne Zimmerpflanzen"
                  width={500}
                  height={500}
                  className="relative rounded-3xl object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white pt-20 pb-20 md:pt-32 md:pb-32">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unsere Schwerpunkte im Blog
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir teilen unser Wissen und unsere Leidenschaft für Pflanzen mit dir
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mb-6 group-hover:bg-emerald-200 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge mb-4">🌱 Pflanzen Inspiration</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beliebte Themen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Entdecke verschiedene Pflanzenarten und finde die perfekte für dein Zuhause
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="card group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="card-content">
                  <p className="text-gray-600 text-sm">{category.description}</p>
                  <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    Weiterlesen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="section bg-emerald-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <span className="badge mb-4">📝 Blog</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Aktuelle Tipps & Artikel
              </h2>
            </div>
            <Link href="/blog/" className="btn btn-secondary">
              Alle Artikel
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {recentPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${post.slug}/`}
                  className="card group bg-white"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {post.category && (
                      <span className="absolute top-4 left-4 badge">
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div className="card-content">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <time>{formatDate(post.date)}</time>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                      Weiterlesen
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bald mehr Artikel!</h3>
              <p className="text-gray-600">
                Wir arbeiten an neuen Inhalten für dich. Schau bald wieder vorbei!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-600"></div>

        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-600/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></span>
              Jetzt starten
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-6 leading-tight">
              Bereit für mehr Grün in deinem Leben?
            </h2>

            <p className="text-lg md:text-xl !text-white mb-10 leading-relaxed">
              Entdecke unseren Blog und lerne alles über die Pflege deiner Lieblingspflanzen.
              Von Anfängertipps bis zu Expertenwissen – wir haben alles für dich!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                Zum Blog
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/kontakt/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent !text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Kontakt
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
