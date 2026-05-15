'use client';
import React from 'react';
import ImageComponent from './ImageComponent';
import { IMAGE_URL } from '@/config/endpoint';

interface Member {
  id: number;
  name: string;
  role_name: string[];
  images: string;
}

interface MemberCardProps {
  data: Member;
  alt: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ data, alt }) => {
  return (
    <div className='w-fit relative flex flex-col items-center'>
      <ImageComponent
        src={data.images ? `${IMAGE_URL}/${data.images}` : '/img/bahlil.png'}
        alt={alt}
        className={`w-36 md:w-48 lg:w-60 xl:w-52 2xl:w-60 rounded-tr-md rounded-bl-md`}
        imageStyle='md:rounded-tr-[7rem] md:rounded-bl-[7rem] md:rounded-tl-[3rem]'
      />
      <div className='bg-white md:absolute -bottom-10 w-full md:w-4/5 h-40 md:h-36 text-left md:text-center flex flex-col justify-center px-2 md:rounded-tr-[4rem] md:rounded-bl-[4rem] shadow-md shadow-gray-300'>
        <h1 className='text-sm 2xl:text-sm text-title font-semibold'>
          {data.name}
        </h1>
        <p className='text-xs 2xl:text-xs text-desc mt-3'>
          {data.role_name.join(' & ')}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
