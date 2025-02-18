import { Footer } from '@/components/home/footer';
import { Header } from '@/components/home/header';
import { Hero } from '@/components/home/hero';
import { SalesLetter } from '@/components/home/sales-letter';

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-[radial-gradient(circle_at_center_center,_rgba(33,_33,_33,_0),rgb(33,_33,_33)),_repeating-linear-gradient(135deg,_rgb(33,_33,_33)_0px,_rgb(33,_33,_33)_1px,_transparent_1px,_transparent_4px),_repeating-linear-gradient(45deg,_rgb(56,_56,_56)_0px,_rgb(56,_56,_56)_5px,_transparent_5px,_transparent_6px),_linear-gradient(90deg,_rgb(33,_33,_33),_rgb(33,_33,_33))]">
        {/* Header */}
        <Header className="sticky top-0 z-50 bg-black/80" />

        {/* Hero */}
        <Hero />

        {/* Sales Letter */}
        <SalesLetter />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
