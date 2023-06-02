import { useQuery } from "@tanstack/react-query"

const fetchUsers = async () => {
    const res = await fetch('https://api-grupocinco.onrender.com/users')
    return res.json()
}

export const useCreateUsers = () => {
    const {data, error, isError, isLoading} = useQuery(['users'],fetchUsers)
    return {
        users: data,
        error,
        isLoading,
        isError
    }
}

const fetchUserById = async (id) => {
    const res = await fetch(`http://localhost:3000/users/${id}`)
    return res.json()  
    
}

export const useUser = (id) => {
    const {data, error, isError, isLoading} = useQuery(['user',id],() => fetchUserById(id))
    return {
        user: data,
        error,
        isLoading,
        isError
    }
}