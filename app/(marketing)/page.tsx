import { ArchitectureSection } from "@/components/marketing/ArchitectureSection";
import { CTASection } from "@/components/marketing/CTASection";
import { FeaturesSection } from "@/components/marketing/FeaturesSection";
import { Footer } from "@/components/marketing/Footer";
import { Hero } from "@/components/marketing/Hero";
import { Navbar } from "@/components/marketing/Navbar";
import { ProcessSection } from "@/components/marketing/ProcessSection";
import { SecuritySection } from "@/components/marketing/SecuritySection";

export default function Page() {
    return (
        <div className="relative min-h-screen overflow-x-clip  text-white">
            <Navbar />

            <main>
                <Hero />

                <ProcessSection />
                <ArchitectureSection />
                <FeaturesSection />
                <SecuritySection />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}
