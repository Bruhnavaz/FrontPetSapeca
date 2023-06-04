import { useQuery } from "@tanstack/react-query"

const fetchBanner = async () => {
    const res = await fetch('https://api-grupocinco.onrender.com/banner')
    return res.json()
}

export const useCreateBanner = () => {
    const {data, error, isError, isLoading} = useQuery(['banner'],fetchBanner)
    return {
        banner: data,
        error,
        isLoading,
        isError
    }
}

const fetchBannerById = async (id) => {
    const res = await fetch(`https://api-grupocinco.onrender.com/banner/${id}`)
    return res.json()  
    
}

export const useBanner = (id) => {
    const {data, error, isError, isLoading} = useQuery(['banner',id],() => fetchBannerById(id))
    return {
        banner: data,
        error,
        isLoading,
        isError
    }
}