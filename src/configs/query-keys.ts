// export query keys for users
export const user = {
  all: ["user"] as const,
  lists: (param?: Record<string, string>) =>
    [...user.all, "list", param || {}] as const,
  list: (filters: string | Record<string, unknown>) =>
    [...user.lists(), { filters }] as const,
  details: () => [...user.all, "detail"] as const,
  detail: (id: string | undefined) => [...user.details(), id] as const,
};
