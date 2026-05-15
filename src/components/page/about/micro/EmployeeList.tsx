'use client';
import MemberCard from '@/components/micro/MemberCard';
import { getExecutive } from '@/libs/Employee';
import { ExecutiveInterface } from '@/types/app/Employee';
import { useEffect, useState } from 'react';

function EmployeeList() {
  const [data, setData] = useState<ExecutiveInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const getExecutiveEmployee = async () => {
      try {
        setLoading(true);
        setNotFound(false);
        setError(null);
        const res = await getExecutive();

        if (!res || res.length === 0) {
          setNotFound(true);
        } else {
          setData(res);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    getExecutiveEmployee();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (notFound) return <p>Data karyawan tidak ditemukan.</p>;

  return (
    <div className='flex justify-center gap-20 px-5 sm:px-10 lg:px-20 xl:px-40'>
      <div
        data-aos='fade-up'
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-10 gap-y-10 md:gap-y-16'
      >
        {data.map((item) => (
          <MemberCard
            key={item.id}
            data={item}
            alt={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
