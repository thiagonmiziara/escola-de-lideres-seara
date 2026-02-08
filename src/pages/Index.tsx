import HeroSection from '@/components/landing/HeroSection';
import AudienceSection from '@/components/landing/AudienceSection';
import MentorSection from '@/components/landing/MentorSection';
import PurposeSection from '@/components/landing/PurposeSection';
import ProgramSection from '@/components/landing/ProgramSection';
import LogisticsSection from '@/components/landing/LogisticsSection';
import InvestmentSection from '@/components/landing/InvestmentSection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <AudienceSection />
      <MentorSection />
      <PurposeSection />
      <ProgramSection />
      <LogisticsSection />
      <InvestmentSection />
      <Footer />
    </main>
  );
};

export default Index;
