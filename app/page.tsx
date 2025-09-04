import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  CheckCircle,
  Star,
  Clock,
  TrendingUp,
  Globe,
  Calculator,
  FileSpreadsheet,
  Briefcase,
  Users,
  Phone,
  Database,
  BarChart3,
} from "lucide-react"

export default function LandingPage() {
  const services = [
    {
      name: "Unterstützung bei täglichen Aufgaben",
      icon: <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />,
    },
    { name: "Buchhaltung mit SevDesk", icon: <Calculator className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" /> },
    {
      name: "Telefonische Kundenqualifizierung",
      icon: <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />,
    },
    { name: "Mailvertrieb", icon: <BarChart3 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" /> },
    {
      name: "Projektorganisation & Prozessautomatisierung",
      icon: <Briefcase className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />,
    },
    { name: "Webseiten & SEO", icon: <Globe className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" /> },
    {
      name: "Vorbereitende Buchhaltung & UmStVA",
      icon: <Calculator className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />,
    },
    {
      name: "Komplexe Excelberechnungen",
      icon: <FileSpreadsheet className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />,
    },
    { name: "Unterstützung im Back-Office", icon: <Briefcase className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" /> },
    { name: "Vertrieb & CRM Pflege", icon: <Users className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" /> },
    { name: "Kundenqualifizierung", icon: <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" /> },
    { name: "Dateneingabe", icon: <Database className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" /> },
  ]

  const software = [
    {
      name: "ChatGPT Plus",
      logo: "/images/logos/chatgpt-logo-new.png",
      hasBackground: false,
    },
    {
      name: "Canva Pro",
      logo: "/images/logos/canva-logo-new.webp",
      hasBackground: false,
    },
    {
      name: "Asana",
      logo: "/images/logos/asana-logo-new.png",
      hasBackground: false,
    },
    {
      name: "SevDesk",
      logo: "/images/logos/sevdesk-logo.jpeg",
      hasBackground: false,
    },
    {
      name: "DATEV",
      logo: "/images/logos/datev-logo.png",
      hasBackground: false,
    },
    {
      name: "HubSpot",
      logo: "/images/logos/hubspot-logo.svg",
      hasBackground: false,
    },
    {
      name: "SISTRIX",
      logo: "/images/logos/sistrix-logo.png",
      hasBackground: false,
    },
    {
      name: "GoogleAds",
      logo: "/images/logos/google-ads-logo.png",
      hasBackground: false,
    },
    {
      name: "Wordpress",
      logo: "/images/logos/wordpress-logo.png",
      hasBackground: false,
    },
  ]

  const languages = [
    { lang: "Deutsch", level: "Muttersprache" },
    { lang: "Englisch", level: "Fließend" },
    { lang: "Portugiesisch", level: "Fließend" },
    { lang: "Spanisch", level: "Grundkenntnisse" },
  ]

  const prices = [
    {
      title: "Einzelstunde",
      price: "40,00€",
      description: "Flexible Unterstützung nach Bedarf",
      features: ["Keine Mindestlaufzeit", "Abrechnung nach tatsächlichem Aufwand", "Ideal für kleinere Projekte"],
    },
    {
      title: "Paketpreis 10h",
      price: "300,00€ brutto",
      description: "Günstiger Paketpreis für regelmäßige Unterstützung",
      features: [
        "25% Rabatt gegenüber Einzelstunden",
        "Flexible Einteilung der Stunden",
        "Monatliche Abrechnung möglich",
      ],
    },
    {
      title: "Individuelles Angebot",
      price: "Sprich mich an!",
      description: "Maßgeschneiderte Lösung für deine Bedürfnisse",
      features: ["Persönliche Beratung", "Angepasst an dein Budget", "Langfristige Zusammenarbeit"],
    },
  ]

  const clients = [
    {
      name: "Stoll Photobox",
      logo: "/images/stoll-logo.png",
      description: "Back-Office, KI-Automatisierung, Vertrieb, Fernwartung",
    },
    {
      name: "Punktgenau",
      logo: "/images/punktgenau-logo.png",
      description: "Kundenansprache & Vertrieb",
    },
    {
      name: "Amicia",
      logo: "/images/amicia-logo.svg",
      description: "SEO, Webseiten und GoogleAds",
    },
    {
      name: "Technik ohne Grenzen",
      logo: "/images/teog-logo.png",
      description: "Projektleiter & Repräsentant in Brasilien",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/va-lutz-logo-new.png" alt="VA Lutz Logo" className="h-20 w-auto" />
          </div>
        </div>
      </header>

      {/* Hero Section with Bridge Background */}
      <section
        className="py-20 px-4 relative min-h-[600px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/florianopolis-bridge.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="lg:w-1/3 flex flex-col items-center">
              <div className="relative">
                <div className="p-1 bg-yellow-400 rounded-2xl">
                  <img
                    src="/images/lutz-portrait.jpg"
                    alt="Lutz Michaelis - Virtueller Assistent"
                    className="w-80 h-auto object-cover rounded-xl shadow-2xl"
                    style={{ aspectRatio: "3/4" }}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mt-6">Lutz Michaelis</h3>
              <p className="text-gray-200 text-center mt-2">Ihr virtueller Assistent</p>
            </div>

            {/* Content Section */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <h1 className="text-5xl font-bold text-white mb-6">
                Dein Back Office Experte aus Florianópolis, Brasilien
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Ich bin Lutz, ein virtueller Assistent mit langjähriger Erfahrung – ansässig in Florianópolis, einer der
                modernsten und lebenswertesten Städte Brasiliens. Ich biete Selbstständigen und Unternehmer:innen in
                Deutschland ein hervorragendes Preis-Leistungs-Verhältnis für professionelle Unterstützung im Back
                Office.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-lg px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                  asChild
                >
                  <a href="https://calendly.com/va-lutz" target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-5 w-5 mr-2" />
                    Jetzt Kennenlerngespräch vereinbaren
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meine Leistungen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-gray-200 hover:border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    {service.icon}
                    <p className="text-gray-700 font-medium">{service.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Software Skills Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Softwarekenntnisse</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {software.map((item, index) => (
              <Card
                key={index}
                className="text-center border-gray-200 hover:shadow-lg transition-shadow group hover:border-green-200"
              >
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="mb-4 h-20 w-20 flex items-center justify-center">
                    <img
                      src={item.logo || "/placeholder.svg"}
                      alt={`${item.name} Logo`}
                      className="max-h-16 max-w-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Sprachen</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {languages.map((item, index) => (
              <Card key={index} className="text-center border-gray-200 hover:border-green-200 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.lang}</h3>
                  <Badge variant="secondary" className="text-sm bg-green-100 text-green-800 hover:bg-green-200">
                    {item.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Preise</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((plan, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:shadow-lg transition-shadow h-full hover:border-green-200"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-4">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {index === 2 && (
                    <Button
                      className="mt-auto w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                      asChild
                    >
                      <a href="https://calendly.com/va-lutz" target="_blank" rel="noopener noreferrer">
                        <Calendar className="h-4 w-4 mr-2" />
                        Termin vereinbaren
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16 px-4 bg-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Warum mit mir arbeiten?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kosteneffizient</h3>
              <p className="text-gray-600">Hervorragendes Preis-Leistungs-Verhältnis durch Standort in Südamerika</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Erfahren</h3>
              <p className="text-gray-600">Langjährige Erfahrung mit deutschen Unternehmen</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Zuverlässig</h3>
              <p className="text-gray-600">Professionelle Abwicklung Ihrer Aufgaben mit deutscher Gründlichkeit</p>
            </div>
          </div>

          {/* Client Logos Carousel */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Vertrauen von Unternehmen</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white rounded-lg p-6 shadow-md mb-4 w-full h-32 flex items-center justify-center hover:shadow-lg transition-shadow">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} Logo`}
                      className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{client.name}</h4>
                  <p className="text-sm text-gray-600 text-center">{client.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für professionelle Unterstützung?</h2>
          <p className="text-xl mb-8 opacity-90">
            Lassen Sie uns gemeinsam Ihr Back Office optimieren und Ihre Produktivität steigern.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
            asChild
          >
            <a href="https://calendly.com/va-lutz" target="_blank" rel="noopener noreferrer">
              <Calendar className="h-5 w-5 mr-2" />
              Kennenlerngespräch vereinbaren
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <img src="/images/va-lutz-logo-new.png" alt="VA Lutz Logo" className="h-16 w-auto" />
          </div>
          <p className="text-gray-400 mb-4">Ihr Back Office Experte in Südamerika</p>
          <p className="text-gray-500 text-sm mt-6">© 2024 VA Lutz. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  )
}
