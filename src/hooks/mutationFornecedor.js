import { useMutation } from "@tanstack/react-query";

const createFornecedor = async (fornecedor) => {
  const res = await fetch(`http://localhost:3000/fornecedor`, {
    method: "POST",
    body: JSON.stringify(fornecedor),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export const useFornecedor = () => {
    return useMutation(createFornecedor)
}

const deleteFornecedor = async (id) => {
  const res = await fetch(`http://localhost:3000/fornecedor/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json()
}

export const useDeleteFornecedor = () => {
  return useMutation(deleteFornecedor)
}

const updateFornecedor = async (fornecedor) => {
  const res = await fetch(`http://localhost:3000/fornecedor/${fornecedor.id}`, {
    method: "PUT",
    body: JSON.stringify(fornecedor),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json()
}

export const useUpdateFornecedor = () => {
  return useMutation(updateFornecedor)
}