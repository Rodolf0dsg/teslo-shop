// https://github.com/Klerith/bolt-product-editor

import { Navigate, useNavigate, useParams } from 'react-router';
import { useProduct } from '@/admin/hooks/useProduct';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { ProductForm } from './ui/ProductForm';
import type { Product } from '@/interfaces/product.interface';
import { toast } from 'sonner';


export const AdminProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, data: product, isError, mutation } = useProduct( id || '' );

  const title = id === 'new' ? 'Nuevo producto' : 'Editar producto';
  const subTitle =
    id === 'new'
      ? 'Aquí puedes crear un nuevo producto.'
      : 'Aquí puedes editar el producto.';

  const handleSubmit = async( productLike: Partial<Product> & { files?: File[] } ) => {
    await mutation.mutateAsync( productLike, {
      onSuccess: ( data ) => {
        toast.success('Producto actualizado correctamente', {
          position: 'top-right',
        });
        navigate(`/admin/products/${data.id}`);
      },
      onError: ( error ) => {
        console.log({error});
        toast.error('Error al actualizar el producto')
      }
    });
  }

  if ( isLoading ) {
    return <CustomFullScreenLoading/>
  }

  if (isError) {
    return <Navigate to={'/admin/products'}/>
  };


  if( !product ) {
    return <Navigate to={'/admin/products'}/>
  };

  return <ProductForm
    title=    { title }
    subTitle= { subTitle }
    product=  { product }
    onSubmit= { handleSubmit }
    isPending={ mutation.isPending }
  />
};