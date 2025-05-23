  import { ChevronDown, SlidersVertical } from "lucide-react"
  import React, { useEffect, useState } from "react"
  import CazualCard from "./CazualCard"
  import { cardItemsType } from "../../types/CardBox"
  import {Pagination,PaginationContent,PaginationItem,PaginationLink,PaginationNext,PaginationPrevious,} from "../../components/ui/pagination"
  import { Button } from "../ui/button"
  import useAppStore from "../../store"
  import getCards from "../../services/getCards"

  const SelectCazual:React.FC<{filterData:any}> = ({filterData}) => {
    const reytingSort:any = [
      {
        id:1,
        title:'Most Popular',
        resurce:'top'
      },
      {
        id:2,
        title:'Old Popular',
        resurce:'old'
      },
      {
        id:3,
        title:'New Popular',
        resurce:'new'
      },
    ]

    const { data:cazualCardInfo, isLoading, isError } = getCards();
    const useSearch = useAppStore(state => state.searchValue);
    const [reytingIndex,setReytingIndex] = useState<number>(0)
    const setOpenFilter = useAppStore((state) => state.setOpenFilter);
    
    const [filterType, setFilterType] = useState<'search' | 'filter' | 'none'>('none');

useEffect(() => {
  if (useSearch) setFilterType('search');
  else if (filterData.check || filterData.sizeDress || filterData.range || filterData.cazual) setFilterType('filter');
  else setFilterType('none');
}, [useSearch, filterData]);

const fill = cazualCardInfo.filter((item: any) => {
  const degreeMatch = !reytingSort[reytingIndex]?.resurce || reytingSort[reytingIndex]?.resurce?.toLowerCase() === item.degree?.toLowerCase();

  if (filterType === 'search') {
    return item.title.toLowerCase().includes(useSearch.toLowerCase());
  }
  

  if (filterType === 'filter') {
    const matchCheck = !filterData.check || item.color.includes(filterData.check);
    const matchSize = !filterData.sizeDress || item.size.includes(filterData.sizeDress);
    const matchRange = !filterData.range || (item.newPrice >= filterData.range[0] && item.newPrice <= filterData.range[1]);
    const matchCazual = !filterData.cazual || item.cazual === filterData.cazual;

    return matchCheck && matchSize && matchRange && matchCazual && degreeMatch;
  }

  else if (reytingSort[reytingIndex]?.resurce) {
    return degreeMatch;
  }

  return false;
});


    

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(fill.length / itemsPerPage);
    const paginatedItems = fill.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    return (
      <div className='col-span-12  lg:col-span-9'>
        <div className="hidden lg:flex justify-between items-center">
          <p className="text-3xl font-semibold">Casual</p>
          <div className="flex text-slate-500">
            Showing {totalPages}-{paginatedItems.length} of {cazualCardInfo.length} Products
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
        <ul className="grid grid-cols-2 md:grid-cols-3 justify-between gap-4 mt-4">{paginatedItems.map((item:cardItemsType) => <CazualCard key={item.id} item={item} />)}</ul>
        {paginatedItems.length === 0 && (
        <p className="text-center my-3">
          Card productlar topilmadi yoki xatolik yuz berdi
        </p>
      )}

      {fill.length > itemsPerPage && (
        <>
          <hr className="my-4" />
          <Pagination>
            <PaginationContent className="justify-between flex-wrap gap-1 pb-4 w-full">
              <PaginationItem>
                <PaginationPrevious
                  className="border cursor-pointer"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                />
              </PaginationItem>

              <div className="flex">{Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === i + 1}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(i + 1);
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}</div>

              <PaginationItem>
                <PaginationNext
                  className="border cursor-pointer"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      )}
    </div>
  );
};

export default SelectCazual;
