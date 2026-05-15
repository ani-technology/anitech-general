import Faq from '@/components/page/home/faq';
import Hero from '@/components/page/home/hero';
import Inovation from '@/components/page/home/inovation';
import Solution from '@/components/page/home/solution';
// import MemberSection from '@/components/partials/MemberSection';

export const metadata = {
  title: 'A.N.I Tech - Beranda',
  description:
    'ANI Technology adalah startup teknologi yang berkomitmen menghadirkan inovasi melalui pengembangan produk digital unggulan. Kami menggabungkan keahlian teknis dengan pemahaman mendalam terhadap kebutuhan klien untuk memberikan solusi yang relevan, efisien, dan berdampak positif.',
  keywords: 'tentang, ani, A.N.I, about',
  icons: {
    icon: '/img/logo.png',
  },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />
      <div className='px-10 lg:px-20 xl:px-40 overflow-hidden'>
        {/* Solution */}
        <Solution />
        {/* Inovation */}
        <Inovation />
        {/* FAQ */}
        <Faq />

        {/* <MemberSection data={test} /> */}
      </div>
    </>
  );
}
