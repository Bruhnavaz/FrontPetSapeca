import { useMutation } from "@tanstack/react-query";

const createUser = async (user) => {
  console.log(user)
  const res = await fetch("https://api-grupocinco.onrender.com/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export const useUsers = () => {
    return useMutation(createUser)
}

const deleteUser = async (id) => {
  const res = await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json()
}

export const useDeleteUser = () => {
  return useMutation(deleteUser)
}

const updateUser = async (user) => {
  const res = await fetch(`http://localhost:3000/users/${user.id}`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json()
}

export const useUpdateUser = () => {
  return useMutation(updateUser)
}