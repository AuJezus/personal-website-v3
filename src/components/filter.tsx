"use client";

import { useRouter } from "next/navigation";
import {
  Menubar,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarSeparator,
} from "./ui/menubar";
import React, { useEffect, useState } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { cn } from "@/lib/utils";
import {
  getBlogTagsArr,
  type Sort,
  OrderByOptions,
  OrderOptions,
  useFilterSearchParams,
} from "@/lib/blog";

function FilterMenu() {
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
  const [sort, setSort] = useState<Sort>({
    by: by ?? undefined,
    order: order ?? undefined,
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
    sort.by && params.append("by", sort.by);
    sort.order && params.append("order", sort.order);

    // add query to params
    query && params.append("query", query);

    router.push("?" + params.toString());
  }, [tagsFilter, sort, query, router]);

  return (
    <div>
      <Menubar className="text-x mb-2 h-fit w-fit">
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
          <MenubarTrigger>Sort by</MenubarTrigger>
          <MenubarContent>
            {(
              Object.keys(OrderByOptions) as Array<keyof typeof OrderByOptions>
            ).map((orderBy, i) =>
              (
                Object.keys(OrderOptions) as Array<keyof typeof OrderOptions>
              ).map((order, x) => (
                <React.Fragment key={orderBy + order}>
                  <MenubarItem
                    onClick={() =>
                      setSort({
                        by: OrderByOptions[orderBy],
                        order: OrderOptions[order],
                      })
                    }
                  >
                    {orderBy} {order}
                  </MenubarItem>

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

export default FilterMenu;
