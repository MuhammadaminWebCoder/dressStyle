import { ChevronDown, SlidersVertical } from "lucide-react"
import { useState } from "react"
import CazualCard from "./CazualCard"
import { cardItemsType } from "../../types/CardBox"
import cardImg from '../../assets/image/CardImage.png'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination"
import { Button } from "../ui/button"
import useAppStore from "../../store"

const SelectCazual = () => {
  const reytingSort:any = [
    {
      id:1,
      title:'Most Popular',
    },
    {
      id:2,
      title:'Old Popular',
    },
    {
      id:3,
      title:'New Popular',
    },
  ]
  const cazualCardInfo:cardItemsType[] = [
    {
      id:1,
      image: cardImg,
      title:'T-shirt with tape details',
      rate:'4.5',
      newPrice:120,
      oldPrice:null,
      salePercent:null,
    },
    {
      id:2,
      image: cardImg,
      title:'skinniy fit jeans',
      rate:'3.5',
      newPrice:240,
      oldPrice:260,
      salePercent:20,
    },
    {
      id:3,
      image: cardImg,
      title:'checed shirt',
      rate:'4.5',
      newPrice:180,
      oldPrice:null,
      salePercent:null,
    },
    {
      id:4,
      image: cardImg,
      title:'sleve striped T-shirt',
      rate:'4.5',
      newPrice:130,
      oldPrice:160,
      salePercent:30,
    },

  ]
  const setOpenFilter = useAppStore((state) => state.setOpenFilter);
  const [reytingIndex,setReytingIndex] = useState<number>(0)
  return (
    <div className='col-span-12  lg:col-span-9'>
       <div className="hidden lg:flex justify-between items-center">
        <p className="text-3xl font-semibold">Casual</p>
        <div className="flex text-slate-500">
          Showing 1-10 of 100 Products
          <div className="flex">Sort by: 
            <div className="text-black relative font-semibold group flex items-center cursor-pointer ms-2">
              {reytingSort[reytingIndex].title}
              <ChevronDown size={16} className="ms-1 mt-1 transition-transform duration-300 ease-in-out group-hover:rotate-180"/>
                <ul className="absolute right-0 text-center top-6 hidden w-[150px] border border-slate-50 group-hover:block bg-white shadow-lg rounded p-2 z-10">
                    {reytingSort.map((item:any,ind:number) => <li key={item.id} onClick={() => setReytingIndex(ind)} className="whitespace-nowrap p-1 hover:text-blue-500 cursor-pointer">
                      {item.title}
                    </li>)}
                </ul>
            </div>
          </div> 
        </div>
      </div>
      <div className="max-lg:flex hidden justify-between">
        <div className="flex items-end gap-2">
          <p className="text-3xl max-[400px]:text-xl font-semibold">Casual</p>
          <p className="flex max-[400px]:text-[14px] text-slate-500">Showing 1-10 of 100 Products</p>
        </div>
        <Button  onClick={() => setOpenFilter(true)} className="w-8 h-8 bg-slate-100 rounded-full text-black">
        <SlidersVertical/>
        </Button>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 justify-between gap-4 mt-4">
        {cazualCardInfo.map((item:cardItemsType) => <CazualCard key={item.id} item={item} />)}
      </ul>
      <hr className="my-4" />
      <Pagination>
      <PaginationContent className="justify-between pb-4 w-full">

        <PaginationItem>
          <PaginationPrevious className="border" href="#" />
        </PaginationItem>

        <div className="flex">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" isActive>2</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem className="max-[350px]:hidden">
            <PaginationLink href="#">8</PaginationLink>
          </PaginationItem>

          <PaginationItem className="max-[350px]:hidden">
            <PaginationLink href="#">9</PaginationLink>
          </PaginationItem>
        </div>

        <PaginationItem>
          <PaginationNext className="border" href="#" />
        </PaginationItem>
        
      </PaginationContent>
    </Pagination>
    </div>
  )
}

export default SelectCazual

