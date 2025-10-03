import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProductByIdAction } from "../actions/get-product-by-id"
import { createUpdateProductAction } from "../actions/create-uptade-product.action";
import type { Product } from "@/interfaces/product.interface";


export const useProduct = ( id: string ) => {

    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ['product', {id}],
        queryFn: () => getProductByIdAction( id ),
        retry: false,
        staleTime: 1000 * 60 * 5,
        // enabled: !!id, //si el id no viene no se dispara la peticion, si si; si
    });


    // el use mutation no se manda a llamar cuando el componente se monta
    //como el use query, useMutation nosotros especificamos cuando se manda a llamar

    const mutation = useMutation({
        mutationFn: createUpdateProductAction,
        onSuccess: ( product: Product ) => {

            //invalidar cache
            queryClient.invalidateQueries({ queryKey: ['products']})
            queryClient.invalidateQueries({ queryKey: ['product', {id: product.id}]})

            //actualizar queryData
            queryClient.setQueryData(['products', { id: product.id }], product)
            //Al navegar a la página del producto recién actualizado, si no usáramos 
            // setQueryData, TanStack Query tendría que hacer una nueva petición GET 
            // para obtener sus datos. Al usar setQueryData con la respuesta de la mutación, 
            // los datos ya están en el caché, por lo que la página carga la información 
            // actualizada de forma instantánea y sin una petición adicional.
        },
    });

    //mutation.mutate() asi se llama a la mutationFn

    return {
        ...query,
        mutation,
    };
}