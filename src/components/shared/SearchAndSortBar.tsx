"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { debounce } from "@/utils/debouce";
import { useState } from "react";
// or use custom debounce if lodash not used

export type SortType = "top" | "new" | "comments" | "ask";

type Props = {
  onSearch: (query: string) => void;
  onSort: (sortBy: SortType) => void;
};

export default function SearchAndSortBar({ onSearch, onSort }: Props) {
  const [input, setInput] = useState("");
   const [sortValue, setSortValue] = useState<SortType>("top");

  // Debounce search input
  const debouncedSearch = debounce((val: string) => onSearch(val), 300);


   const handleSortChange = (val: SortType) => {
    setSortValue(val);
    onSort(val);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:items-center justify-between py-4">
      <Input
        type="text"
        placeholder="Search stories..."
        value={input}
        onChange={(e) => {
          const val = e.target.value;
          setInput(val);
          debouncedSearch(val); // trigger here
        }}
        className="max-w-sm"
      />

      <Select value={sortValue} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="top">Top</SelectItem>
          <SelectItem value="new">Newest</SelectItem>
          <SelectItem value="comments">Most Comments</SelectItem>
          <SelectItem value="ask">Ask</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}