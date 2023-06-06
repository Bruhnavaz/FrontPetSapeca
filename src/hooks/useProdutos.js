import { useQuery } from "@tanstack/react-query"
import {config} from "../../config";

const base_url = ((config.debug)?config.dev_url:config.url)+"/produto";
const fetchProdutos = async () => {
    const res = await fetch(`${base_url}`)
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

const fetchProdutoById = async (id) => {
    const res = await fetch(`${base_url}/${id}`)
    return res.json()  
    
}
export const useProdutos = () => {
    const {data, error, isError, isLoading} = useQuery(['produtos'],fetchProdutos)
    return {
        produtos: data,
        error,
        isLoading,
        isError
    }
}

export const useProduto = (id) => {
    const {data, error, isError, isLoading} = useQuery(['produto',id],() => fetchProdutoById(id))
    return {
        produto: data,
        error,
        isLoading,
        isError
    }
}