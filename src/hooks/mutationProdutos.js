import { useMutation } from "@tanstack/react-query";
import {config} from "../../config";

const base_url = ((config.debug)?config.dev_url:config.url)+"/produto";

const createProdutos = async (produto) => {
  const res = await fetch(`${base_url}`, {
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

const deleteProdutos = async (cod) => {
  const res = await fetch(`${base_url}/${cod}`, {
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
  const res = await fetch(`${base_url}/${produto.cod}`, {
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