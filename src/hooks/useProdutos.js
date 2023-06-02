import { useQuery } from "@tanstack/react-query"

const fetchProdutos = async () => {
    const res = await fetch('https://api-grupocinco.onrender.com/users')
    return res.json()
}

export const useCreateProdutos = () => {
    const {data, error, isError, isLoading} = useQuery(['produtos'],fetchProdutos)
    return {
        produtos: data,
        error,
        isLoading,
        isError
    }
}

const fetchProdutosById = async (id) => {
    const res = await fetch(`http://localhost:3000/users/${id}`)
    return res.json()  
    
}

export const useProdutos = (id) => {
    const {data, error, isError, isLoading} = useQuery(['produtos',id],() => fetchProdutosById(id))
    return {
        user: data,
        error,
        isLoading,
        isError
    }
}