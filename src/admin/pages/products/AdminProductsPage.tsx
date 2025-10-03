import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useProducts } from "@/shop/hooks/useProducts"
import { PencilIcon, PlusIcon } from "lucide-react"
import { Link } from "react-router"
import { currencyFormatter } from "@/lib/currency-format"
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading"



export const AdminProductsPage = () => {

  const { data, isLoading } = useProducts();

  if ( isLoading ) {
    return <CustomFullScreenLoading />
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle title="Productos" subTitle="Aqui puedes ver y administrar tus productos" />

        <div className="flex justify-end mb-10 gap-4">
          <Link to={'/admin/products/new'}>
            <Button className="cursor-pointer">
              <PlusIcon/>
              Nuevo Producto
            </Button>
          </Link>
        </div>
      </div>


      <Table className="bh-white p-10 shadow-xs border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead className="w-[100px]">Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

          {
            data!.products.map( product => (
              <TableRow key={ product.id }>
                <TableCell>
                  <img 
                    src={ product.images[0] }
                    alt={ product.title }
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  <Link  
                    to={`/admin/products/${ product.id }`}
                    className="hover:text-blue-500 hover:underline"
                  >
                    { product.title }
                  </Link>
                </TableCell>
                <TableCell> { currencyFormatter(product.price) }</TableCell>
                <TableCell>{ product.gender }</TableCell>
                <TableCell>{ product.stock } </TableCell>
                <TableCell>{ product.sizes.join(', ') }</TableCell>
                <TableCell>
                  <Link to={`/admin/products/${ product.id }`}>
                    <PencilIcon className="w-4 h-4 text-blue-500"/>
                  </Link>
                </TableCell>
              </TableRow>
            ))
          }




        </TableBody>
      </Table>

      <CustomPagination totalPages={ data?.pages || 1 }/>
    </>
  )
}
