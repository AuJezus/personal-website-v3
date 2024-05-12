import { useSearchParams } from "next/navigation";
import {
  type OrderByOption,
  OrderByOptions,
  type OrderOption,
  OrderOptions,
} from "../blog";

export default function useFilterSearchParams() {
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
