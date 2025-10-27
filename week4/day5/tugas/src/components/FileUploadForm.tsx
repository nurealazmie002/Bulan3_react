'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';



const MAX_FILE_SIZE = 2 * 1024 * 1024; 
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const formSchema = z.object({
  username: z.string().min(3, 'Username minimal 3 karakter.'),
  
  avatar: z
    .instanceof(FileList)
    
    .refine((files) => files.length > 0, 'Avatar harus diisi.')
    
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Ukuran file maksimal 2MB.`
    )
    

    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'Hanya format .jpg, .jpeg, .png, dan .webp yang didukung.'
    ),
});

type FormValues = z.infer<typeof formSchema>;

export default function FileUploadForm() {
  const [preview, setPreview] = useState<string | null>(null);


  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      avatar: undefined, 
    },
    mode: 'onChange', 
  });

  const avatarFile = form.watch('avatar');

  useEffect(() => {
    let fileUrl: string | null = null;

    if (avatarFile && avatarFile.length > 0) {
      const file = avatarFile[0];
      fileUrl = URL.createObjectURL(file);
      setPreview(fileUrl);
    } else {
      setPreview(null);
    }


    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [avatarFile]); 

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('avatar', data.avatar[0]); 

    console.log('Form Data to be Sent:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    alert('Form berhasil disubmit! Cek data di console.');
    form.reset(); 
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Naufal" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="avatar"
          render={({ field: { onChange, onBlur, name, ref } }) => (
            <FormItem>
              <FormLabel>Avatar</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={(e) => {
                    onChange(e.target.files);
                  }}
                  onBlur={onBlur}
                  name={name}
                  ref={ref}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {preview && (
          <div className="mt-4">
            <p className="text-sm font-medium">Image Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="mt-2 h-32 w-32 rounded-md object-cover"
            />
          </div>
        )}

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Uploading...' : 'Upload Profile'}
        </Button>
      </form>
    </Form>
  );
}