import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SearchIcon from "../../../assets/icons/search";
import css from "./searchbar.module.css";
const SearchBar = () => {
  return (
    <div className={css.popOver}>
      <Popover open={true} >
        <PopoverTrigger
          className={`flex   w-[10.5rem] h-[2.1rem] bg-[#f5f5f5] rounded-[4rem]  relative ${css.popOverTrigger} mt-[0.7rem]`}
        >
          <div className=" flex items-center rounded-full px-[0.4rem] h-full hover:bg-[#CACACB] w-fit absolute left-0 bg-[#f5f5f5] cursor-pointer">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search"
            className={`w-full pl-[2.2rem] h-[2.1rem] border-none rounded-[4rem] text-[0.875rem] line-height-[2.1rem] hover:bg-[#e6e6e6] ${css.searchbar}`}
          />
        </PopoverTrigger>
        <PopoverContent className="w-full bg-red-500  "></PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchBar;
