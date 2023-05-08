import axios from "axios";

axios.defaults.baseURL =
  "https://6457326f1a4c152cf97cf8a9.mockapi.io/users/api";

export async function getUsers(page = 1) {
  const searchParams = new URLSearchParams({
    page,
    limit: 3,
  });

  const response = await axios.get(`/users?${searchParams}`);
  return response.data;
}

export async function updateUsers(id, followers) {
  const response = await axios.put(`/users/${id}`, {
    followers,
  });
  return response.data;
}

export async function getUserById(id) {
  const response = await axios.get(`/users/${id}`);
  return response.data;
}
