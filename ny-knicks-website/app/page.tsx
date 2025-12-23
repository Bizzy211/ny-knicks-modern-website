import { Button } from "@/components/ui";
import { Header, Footer } from "@/components/layout";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-knicks-blue to-blue-800 text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              NEW YORK KNICKS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Official Team Website - Modern Experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                View Schedule
              </Button>
              <Button variant="outline" size="lg" className="bg-white hover:bg-blue-50">
                Team Roster
              </Button>
            </div>
          </div>
        </section>

        {/* Status Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-knicks-blue">
              Project Setup Complete
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-knicks-blue">
                <h3 className="font-semibold text-lg mb-2 text-knicks-blue">
                  Framework
                </h3>
                <p className="text-gray-600">Next.js 14 with App Router</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-knicks-orange">
                <h3 className="font-semibold text-lg mb-2 text-knicks-blue">
                  Styling
                </h3>
                <p className="text-gray-600">Tailwind CSS with Knicks Colors</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-knicks-blue">
                <h3 className="font-semibold text-lg mb-2 text-knicks-blue">
                  Animation
                </h3>
                <p className="text-gray-600">Framer Motion & GSAP</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
