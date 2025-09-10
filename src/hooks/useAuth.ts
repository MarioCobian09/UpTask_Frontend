import { useQuery } from "@tanstack/react-query"
import { getUser } from "@/api/AuthAPI"

export const useAuth = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        retry: 1,
        refetchOnWindowFocus: false     // Cuando cambiamos entre pestañas del navegador, recarga, cosa inesesario y por eso lo deshabilitamos
    })

    return { data, isError, isLoading }
}