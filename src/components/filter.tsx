"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Menubar,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarSeparator,
} from "./ui/menubar";
import { BiCheck, BiX } from "react-icons/bi";

import {
  defaultSort,
  getBlogTagsArr,
  type OrderByOption,
  OrderByOptions,
  type OrderOption,
  OrderOptions,
} from "@/lib/blog";
import useFilterSearchParams from "@/lib/hooks/use-filter-seach-params";

function FilterMenu({ className }: { className?: string }) {
  const router = useRouter();

  // Get initial filter from search params
  const {
    tags: tagsInit,
    by,
    order,
    query: queryInit,
  } = useFilterSearchParams();
  const tags = getBlogTagsArr();

  const [tagsFilter, setTagsFilter] = useState<string[]>(tagsInit);
  const [sort, setSort] = useState({
    by: by ?? defaultSort.by,
    order: order ?? defaultSort.order,
  });
  const [query, setQuery] = useState<string>(queryInit ?? "");

  const addTag = (tag: string) => setTagsFilter((tags) => [...tags, tag]);
  const removeTag = (tag: string) =>
    setTagsFilter((tags) => tags.filter((t) => t !== tag));

  useEffect(() => {
    const params = new URLSearchParams();

    // add tags to params
    tagsFilter.forEach((t) => params.append("tag", t));

    // add sort to params
    params.append("by", sort.by);
    params.append("order", sort.order);

    // add query to params
    query && params.append("query", query);

    router.push("?" + params.toString());
  }, [tagsFilter, sort, query, router]);

  return (
    <div className={className}>
      <Menubar className="text-x mb-4 flex h-fit w-fit flex-wrap">
        <MenubarMenu>
          <MenubarTrigger>Filter by tag</MenubarTrigger>
          <MenubarContent>
            <div className="max-h-96 overflow-x-hidden">
              {tags.map(({ name, num }, i) => (
                <React.Fragment key={name}>
                  <MenubarItem
                    className={cn(
                      tagsFilter.includes(name) &&
                        "flex items-center gap-2 bg-accent",
                    )}
                    onClick={() =>
                      tagsFilter.includes(name) ? removeTag(name) : addTag(name)
                    }
                  >
                    {tagsFilter.includes(name) && <BiCheck />}
                    {name} ({num})
                  </MenubarItem>

                  {i !== tags.length - 1 && <MenubarSeparator />}
                </React.Fragment>
              ))}
            </div>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Sort By</MenubarTrigger>
          <MenubarContent>
            {(
              Object.keys(OrderByOptions) as Array<keyof typeof OrderByOptions>
            ).map((orderBy, i) =>
              (
                Object.keys(OrderOptions) as Array<keyof typeof OrderOptions>
              ).map((order, x) => (
                <React.Fragment key={orderBy + order}>
                  <MenuBarSortItem
                    orderBy={orderBy}
                    order={order}
                    sort={sort}
                    setSort={setSort}
                  />

                  {(i !== Object.keys(OrderByOptions).length - 1 ||
                    x !== Object.keys(OrderOptions).length - 1) && (
                    <MenubarSeparator />
                  )}
                </React.Fragment>
              )),
            )}
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <label
            htmlFor="search"
            className="group flex items-center gap-2 rounded-sm px-3 py-1.5 text-sm font-medium focus-within:bg-accent hover:bg-accent"
          >
            Search:
            <input
              id="search"
              placeholder="react forms..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent text-sm font-normal focus-visible:outline-none"
            />
          </label>
        </MenubarMenu>
      </Menubar>

      <div className="flex flex-wrap items-center gap-2">
        {tagsFilter.map((t) => (
          <div
            className="flex cursor-pointer items-center gap-2 text-nowrap rounded-sm bg-primary px-2 py-1 text-sm text-primary-foreground"
            key={t}
            onClick={() => removeTag(t)}
          >
            {t} <BiX className="text-red-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuBarSortItem({
  orderBy,
  order,
  sort,
  setSort,
}: {
  orderBy: keyof typeof OrderByOptions;
  order: keyof typeof OrderOptions;
  sort: {
    by: OrderByOption;
    order: OrderOption;
  };
  setSort: (sortObj: { by: OrderByOption; order: OrderOption }) => void;
}) {
  const orderByOption = OrderByOptions[orderBy];
  const orderOption = OrderOptions[order];
  const isSelected = orderByOption === sort.by && orderOption === sort.order;

  return (
    <MenubarItem
      onClick={() =>
        setSort({
          by: orderByOption,
          order: orderOption,
        })
      }
      className={cn(isSelected && "flex items-center gap-2 bg-accent")}
    >
      {isSelected && <BiCheck />}
      {orderBy} {order}
    </MenubarItem>
  );
}

export default FilterMenu;
