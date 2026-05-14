'use client';

import Description from '@/components/micro/Description';
import PrimaryButton from '@/components/micro/PrimaryButton';
import SectionTitle from '@/components/micro/SectionTitle';

function Hero() {
  return (
    <div
      className={`relative flex flex-col items-center gap-10 py-40 bg-[url('/img/footer_grid.png')] bg-cover`}
    >
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#BCC7E0]/20 to-[#2E9CA7]/20 -z-10 pointer-events-none'></div>
      <SectionTitle
        title='Transforani digital <br> dimulai dari sini'
        className='text-center'
      />
      <Description
        className='text-center w-4/6'
        text='<b>ANI Technology</b> adalah startup teknologi yang berkomitmen menghadirkan inovasi melalui pengembangan produk digital unggulan. Kami menggabungkan keahlian teknis dengan pemahaman mendalam terhadap kebutuhan klien untuk memberikan solusi yang relevan, efisien, dan berdampak positif.'
      />
      <PrimaryButton
        title='Mulai Sekarang'
        onClick={() => {
          document.location.href = '/contact';
        }}
      />
    </div>
  );
}

export default Hero;
