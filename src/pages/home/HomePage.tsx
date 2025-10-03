import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomScreenLoader } from "@/components/custom/CustomScreenLoader"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useProducts } from "@/shop/hooks/useProducts"


export const HomePage = () => {

  const { data, isPending } = useProducts();


  return (
    <>
      <CustomJumbotron title="Todos los productos"/>

      {
        isPending 
          ? <CustomScreenLoader />
          : (
            <>
              <ProductsGrid products={ data?.products || [] }/>          
              <CustomPagination totalPages={ data?.pages || 0}/>          
            </>
          )
      }

    </>
  )
}