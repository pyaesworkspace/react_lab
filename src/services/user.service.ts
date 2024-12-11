import { apiClient } from "@/libs/axios/apiClient";

export async function getUser() {
  return await apiClient.get<User[]>("/users");
}
