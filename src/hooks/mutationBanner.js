import { useMutation } from "@tanstack/react-query";

const createBanner = async (banner) => {
  console.log(banner)
  const res = await fetch("https://api-grupocinco.onrender.com/banner", {
    method: "POST",
    body: JSON.stringify(banner),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export const useBanner = () => {
    return useMutation(createBanner)
}

const deleteBanner = async (id) => {
  const res = await fetch(`https://api-grupocinco.onrender.com/banner/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json()
}

export const useDeleteBanner = () => {
  return useMutation(deleteBanner)
}

const updateBanner = async (banner) => {
  const res = await fetch(`https://api-grupocinco.onrender.com/banner/${banner.id}`, {
    method: "PUT",
    body: JSON.stringify(banner),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json()
}

export const useUpdateBanner = () => {
  return useMutation(updateBanner)
}