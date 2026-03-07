import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Highlights from '@/components/highlights';
import Countdown from '@/components/countdown';
import Timeline from '@/components/timeline';
import Domains from '@/components/domains';
import TechStack from '@/components/techstack';
import Eligibility from '@/components/eligibility';
import Prizes from '@/components/prizes';
import FAQ from '@/components/faq';
import RegisterCTA from '@/components/register-cta';
import Footer from '@/components/footer';
import BackgroundEffects from '@/components/background-effects';

export default function Home() {
  return (
    <main className="min-h-screen bg-space-black">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Countdown />
      <Timeline />
      <Domains />
      <TechStack />
      <Eligibility />
      <Prizes />
      <FAQ />
      <RegisterCTA />
      <Footer />
    </main>
  );
}
