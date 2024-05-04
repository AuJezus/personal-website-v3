import { posts } from "@/content";
import { useSearchParams } from "next/navigation";

export function getBlogTagsArr() {
  const tagsObj: Record<string, number> = {};
  posts.forEach((p) =>
    p.tags?.forEach((t) => (tagsObj[t] = (tagsObj[t] ?? 0) + 1)),
  );

  const tagsArr = Object.entries(tagsObj).map((entry) => ({
    name: entry[0],
    num: entry[1],
  }));

  return tagsArr;
}

export const OrderByOptions = {
  Alphabet: "alph",
  Date: "date",
} as const;

export const OrderOptions = {
  Ascending: "asc",
  Descending: "desc",
} as const;

export type OrderByOption =
  (typeof OrderByOptions)[keyof typeof OrderByOptions];
export type OrderOption = (typeof OrderOptions)[keyof typeof OrderOptions];

export interface Sort {
  by?: OrderByOption;
  order?: OrderOption;
}

export const defaultSort: Sort = {
  by: OrderByOptions.Date,
  order: OrderOptions.Descending,
};

export function useFilterSearchParams() {
  const params = useSearchParams();

  const extractedParams = {
    tags: params.getAll("tag"),
    by: params.get("by"),
    order: params.get("order"),
    query: params.get("query") ?? undefined,
  };

  const bySafe =
    (Object.values(OrderByOptions) as Array<OrderByOption>).find(
      (option) => option === extractedParams.by,
    ) ?? undefined;
  const orderSafe =
    (Object.values(OrderOptions) as Array<OrderOption>).find(
      (option) => option === extractedParams.order,
    ) ?? undefined;

  return {
    ...extractedParams,
    by: bySafe,
    order: orderSafe,
  };
}
