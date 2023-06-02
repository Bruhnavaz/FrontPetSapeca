import { useQuery } from "@tanstack/react-query"

const fetchFornecedor = async () => {
    const res = await fetch('https://api-grupocinco.onrender.com/fornecedor')
    return res.json()
}

export const useCreateFornecedor = () => {
    const {data, error, isError, isLoading} = useQuery(['fornecedor'],fetchFornecedor)
    return {
        fornecedores: data,
        error,
        isLoading,
        isError
    }
}

const fetchFornecedorById = async (id) => {
    const res = await fetch(`http://localhost:3000/fornecedor/${id}`)
    return res.json()  
    
}

export const useFornecedor = (id) => {
    const {data, error, isError, isLoading} = useQuery(['fornecedor',id],() => fetchFornecedorById(id))
    return {
        fornecedores: data,
        error,
        isLoading,
        isError
    }
}