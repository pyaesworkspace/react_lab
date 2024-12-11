import { user } from "@/configs/query-keys";
import { getUser } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function useGetAllUsers() {
  return useQuery({
    queryKey: user.all,
    queryFn: () => getUser(),
    select: (response) => response.data,
  });
}
