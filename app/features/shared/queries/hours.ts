import { useQuery } from "@tanstack/react-query"

export const useCurrentStoreStateQuery = () => {
    return useQuery({
        queryKey: ['currentStoreState'],
        queryFn: () => getCurrentStoreState(),
        retry: 1,
    })
}

const getCurrentStoreState = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/now`)
    const data = await response.json()
    return data
}