import { useState, useEffect } from 'react';
import type { Product, ProductFormData } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface ProductFormProps {
  initialData?: Product | null;
  onSubmit: (data: ProductFormData | (Partial<ProductFormData> & { id: number })) => void;
  onClose: () => void;
}

export const ProductForm = ({ initialData, onSubmit, onClose }: ProductFormProps) => {
  const [formData, setFormData] = useState<ProductFormData>({
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '', 
  });

  const isEditMode = !!initialData;

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        price: initialData.price,
        description: initialData.description,
        category: initialData.category,
        image: initialData.image,
      });
    }else {
      setFormData({
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
      });
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditMode) {
      onSubmit({ ...formData, id: initialData!.id });
    } else {
      onSubmit(formData);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="title" className="text-right">
          Nama
        </Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="price" className="text-right">
          Harga
        </Label>
        <Input
          id="price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          className="col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="category" className="text-right">
          Kategori
        </Label>
        <Input
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="image" className="text-right">
          Link Gambar
        </Label>
        <Input
          id="image"
          name="image"
          type="url"
          value={formData.image}
          onChange={handleChange}
          className="col-span-3"
          placeholder="https://..."
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="description" className="text-right">
          Deskripsi
        </Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="col-span-3"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button variant="outline" type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">{isEditMode ? 'Save Changes' : 'Create Product'}</Button>
      </div>
    </form>
  );
};