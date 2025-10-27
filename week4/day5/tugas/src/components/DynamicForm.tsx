'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Trash2, Plus } from 'lucide-react'; 

const formSchema = z.object({
  projectName: z.string().min(3, 'Nama project minimal 3 karakter.'),
  members: z
    .array(
      z.object({
        name: z.string().min(2, 'Nama anggota harus diisi.'),
        email: z.string().email('Email tidak valid.'),
      })
    )
    .min(1, 'Minimal ada 1 anggota tim.'), 
});

type FormValues = z.infer<typeof formSchema>;

export default function DynamicForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: '',
      members: [{ name: '', email: '' }], 
    },
    mode: 'onChange', 
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'members',
  });

  const onSubmit = (data: FormValues) => {
    console.log(JSON.stringify(data, null, 2));
    alert('Form berhasil disubmit! Cek data di console.');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
        <FormField
          control={form.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Project</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan nama project" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <Label>Anggota Tim</Label>
          {form.formState.errors.members?.root && (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.members.root.message}
            </p>
          )}

          {fields.map((field, index) => (
            <div
              key={field.id} 
              className="flex w-full items-start gap-2 rounded-md border p-3"
            >
              <div className="flex-1 space-y-2">
                <FormField
                  control={form.control}
                  name={`members.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Nama Anggota" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`members.${index}.email`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="email@anggota.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => remove(index)} 
                disabled={fields.length <= 1} 
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={() => append({ name: '', email: '' })} 
        >
          <Plus className="mr-2 h-4 w-4" />
          Tambah Anggota
        </Button>

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Menyimpan...' : 'Submit Project'}
        </Button>
      </form>
    </Form>
  );
}