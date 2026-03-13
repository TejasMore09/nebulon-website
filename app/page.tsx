import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Highlights from '@/components/highlights';
import Countdown from '@/components/countdown';
import RegistrationCounter from '@/components/registration-counter';
import Timeline from '@/components/timeline';
import Domains from '@/components/domains';
import Prizes from '@/components/prizes';
import Eligibility from '@/components/eligibility';
//import Sponsors from '@/components/sponsors';
//import Judges from '@/components/judges';
//import Gallery from '@/components/gallery';
import FAQ from '@/components/faq';
import RegisterCTA from '@/components/register-cta';
import Footer from '@/components/footer';
import BackgroundEffects from '@/components/background-effects';

export const metadata = {
  title: 'Nebulon\'26 Hackathon - National Level Innovation Challenge',
  description: 'Join Nebulon\'26, a 24-hour national hackathon with ₹15,000+ prize pool. Register now and showcase your innovation skills.',
};

export default function HackathonPage() {
  return (
    <main className="min-h-screen bg-space-black relative">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Countdown />
      <RegistrationCounter />
      <Timeline />
      <Domains />
      <Prizes />
      <Eligibility />
      <FAQ />
      <RegisterCTA />
      <Footer />
    </main>
  );
}
