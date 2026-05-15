'use client';

import Description from '@/components/micro/Description';
import ImageComponent from '@/components/micro/ImageComponent';
import SectionTitle from '@/components/micro/SectionTitle';

export default function NotFound() {
  return (
    <div className='flex flex-col gap-10 py-40 px-12 text-center justify-center items-center'>
      <ImageComponent
        src='/img/404.png'
        alt='Not Found'
      />
      <SectionTitle title='Oops, Halaman Tidak Ditemukan' />
      <Description text='Sepertinya halaman yang kamu cari tidak tersedia.' />
    </div>
  );
}
