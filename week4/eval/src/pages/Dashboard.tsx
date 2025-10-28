// src/pages/Dashboard.tsx
import { useState, useMemo, useCallback } from 'react';
import { useProducts } from '@/hooks/useProducts';
import type { Product, ProductFormData } from '@/types';
import { ProductForm } from '@/components/ProductForm';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Edit, Trash, PlusCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export const Dashboard = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const handleDelete = useCallback((id: number) => {
    if (window.confirm('Yakin ingin menghapus produk ini?')) {
      deleteProduct(id);
    }
  }, [deleteProduct]);

  const openModal = (product: Product | null) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleFormSubmit = (
    data: ProductFormData | (Partial<ProductFormData> & { id: number })
  ) => {
    if ('id' in data) {
      updateProduct(data.id, data);
    } else {
      addProduct(data);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dasboard Produk</h1>
        <Button onClick={() => openModal(null)}>
          <PlusCircle className="mr-2 h-4 w-4" /> Tambah Produk Baru
        </Button>
      </div>

      <div className="flex space-x-4">
        <Input
          placeholder="Cari Produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <p className="text-muted-foreground text-sm self-center">
          Total Products: {useMemo(() => filteredProducts.length, [filteredProducts])}
        </p>
      </div>

      <Card>
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map(product => (
              <TableRow key={product.id}>
                <TableCell>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-10 w-10 object-contain rounded"
                  />
                </TableCell>
                <TableCell className="font-medium max-w-xs truncate">
                  {product.title}
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => openModal(product)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(product.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </DialogTitle>
            <DialogDescription>
              {editingProduct
                ? "Make changes to your product here."
                : "Add a new product to your store."}
            </DialogDescription>
          </DialogHeader>
          <ProductForm
            initialData={editingProduct}
            onSubmit={handleFormSubmit}
            onClose={closeModal}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};