'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { BiSolidCategory } from 'react-icons/bi';
import { BsPersonFill } from 'react-icons/bs';
import { MdEmail, MdCall } from 'react-icons/md';
import { TbMessageFilled } from 'react-icons/tb';
import { useState } from 'react';
import axios from 'axios';

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForms = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string | null>(null);
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsLoading(true);

    try {
      await axios.post('/api/send', values);
      setResponse('Pesanmu Berhasil Dikirim');
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error:', error.response?.data || error.message);
      } else if (error instanceof Error) {
        console.error('Error:', error.message);
      } else {
        console.error('Error: Unknown error');
      }
      setResponse('Gagal mengirim pesan');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 max-w-lg mx-auto'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='pl-[10px]'>Nama</FormLabel>
              <FormControl>
                <div className='relative'>
                  <BsPersonFill
                    className='absolute left-3 top-1/2 -translate-y-1/2 text-title'
                    size={18}
                  />
                  <Input
                    {...field}
                    placeholder='masukkan nama'
                    className='pl-10'
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='pl-[10px]'>Email</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <MdEmail
                      className='absolute left-3 top-1/2 -translate-y-1/2 text-title'
                      size={18}
                    />
                    <Input
                      {...field}
                      placeholder='masukkan email'
                      className='pl-10'
                      type='email'
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='pl-[10px]'>Nomor Telepon</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <MdCall
                      className='absolute left-3 top-1/2 -translate-y-1/2 text-title'
                      size={18}
                    />
                    <Input
                      {...field}
                      placeholder='masukkan nomor telepon'
                      className='pl-10'
                      type='number'
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='pl-[10px]'>Subjek/Topik</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className='flex justify-between'>
                    <div className='flex justify-start gap-2'>
                      <BiSolidCategory
                        className='text-title'
                        size={18}
                      />
                      <SelectValue
                        placeholder='pilih subjek/topik pesan'
                        className='text-muted-foreground'
                      />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='support'>Dukungan</SelectItem>
                    <SelectItem value='sales'>Penawaran</SelectItem>
                    <SelectItem value='other'>Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='pl-[10px]'>Pesan</FormLabel>
              <FormControl>
                <div className='relative'>
                  <TbMessageFilled
                    className='absolute left-3 top-4 text-title'
                    size={18}
                  />
                  <Textarea
                    {...field}
                    placeholder='masukkan pesan'
                    className='pl-10 pt-3'
                    rows={4}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <div className='w-full flex items-center justify-center'>
          <Button
            type='submit'
            disabled={isLoading}
            className={`w-[80%] h-12  ${
              !isLoading
                ? 'bg-primary_ani text-white'
                : 'bg-gray-200 text-gray-900'
            }`}
          >
            {!isLoading ? 'Kirim' : 'Loading...'}
          </Button>
        </div>
        {response && <p className='text-xs mt-3 text-center'>{response}</p>}
      </form>
    </Form>
  );
};

export default ContactForms;
