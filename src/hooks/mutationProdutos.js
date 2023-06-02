import { useMutation } from "@tanstack/react-query";

const createProdutos = async (produto) => {
  const res = await fetch("https://api-grupocinco.onrender.com/produto", {
    method: "POST",
    body: JSON.stringify(produto),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export const useProdutos = () => {
    return useMutation(createProdutos)
}

const deleteProdutos = async (id) => {
  const res = await fetch(`http://localhost:3000/produto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json()
}

export const useDeleteProdutos = () => {
  return useMutation(deleteProdutos)
}

const updateProduto = async (produto) => {
  const res = await fetch(`http://https://api-grupocinco.onrender.com/produto/${produto.cod}`, {
    method: "PUT",
    body: JSON.stringify(produto),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json()
}

export const useUpdateProduto = () => {
  return useMutation(updateProduto)
}