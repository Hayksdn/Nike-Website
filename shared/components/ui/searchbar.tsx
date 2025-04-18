import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const SearchBar = () => {
  return (
    <Popover >
      <PopoverTrigger className='flex justify-center items-center'>
        <input type="text" placeholder='Search' className='w-[17.5rem] bg-muted-foreground ' />
      </PopoverTrigger>
      <PopoverContent>

      </PopoverContent>
    </Popover>
  )
}

export default SearchBar