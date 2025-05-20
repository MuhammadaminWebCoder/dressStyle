import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"
import { Check, SlidersVertical, X } from "lucide-react"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import React, { useState } from "react"
import { Button } from "../ui/button"
import { Slider } from "../ui/slider"
import useAppStore from "../../store"

const SelectFilter: React.FC<{ setFilterData: (filters: any) => void }> = ({ setFilterData }) => {
    const colorsSelect = [
        'bg-[#3d3b33]',
        'bg-[#2e3e4f]',
        'bg-[#2c7dbf]',
        'bg-[#3d3b33]',
        'bg-[#2e3e4f]',
        'bg-[#2c7dbf]',
        'bg-[#3d3b33]',
        'bg-[#2e3e4f]',
        'bg-[#2c7dbf]',
        'bg-[#2c7dbf]',
      ]
      const [sizeDress,setSize] = useState<number>(1)
      const [range, setRange] = useState([10, 90])
      const [check,setCheck] = useState<number>(0)

      const filterApply = () => {
        setFilterData({sizeDress,range,check})
      }

      const dressSize = (selectDressId:number):void => {
        setSize(selectDressId)
      }
    
      const selectedColor = (checked: number): void => {
          setCheck(checked)
          }
      const dressSizeArr = [
          "Small",
          "Medium",
          "Large",
          "XX - Large"
      ]
     const openFilter = useAppStore((state) => state.openFilter);
     const setOpenFilter = useAppStore((state) => state.setOpenFilter);
  return (
    <div className={`col-span-3 ${openFilter == true ? 'block' : 'max-lg:hidden'} left-0 z-10 bg-white -top-12 max-lg:absolute self-start p-4 rounded-2xl border`}>
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Filters</p>
        {openFilter == true ? <Button onClick={() => setOpenFilter(false)} className="bg-white p-0 text-black border-0 shadow-none"><X className="scale-150"/></Button> : <SlidersVertical color="grey"/>}
      </div>
      <hr className="my-4" />
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="group flex justify-between w-full items-center">T-shirts <ChevronDownIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />    </AccordionTrigger>
                <AccordionContent>  Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
        </Accordion>
      <hr className="my-4" />
      <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger className="group flex justify-between text-2xl font-semibold w-full items-center">Price <ChevronDownIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />    </AccordionTrigger>
                <AccordionContent>
                <div className="w-full my-4">
                  <Slider
                    defaultValue={[10, 90]}
                    min={0}
                    max={200}
                    step={1}
                    className="cursor-pointer"
                    onValueChange={(value) => setRange(value)}
                  />
                  <div className="mt-2">${range[0]} - ${range[1]}</div>
                </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <hr className="my-4" />
        <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger className="group flex justify-between w-full  text-2xl font-semibold items-center">Colors <ChevronDownIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />    </AccordionTrigger>
                <AccordionContent>
                    <div className="grid grid-cols-5 mt-5 gap-3">
                        {colorsSelect.map((color:string, i:number) => (
                            <div onClick={() => selectedColor(i)} key={i} className={`${color} w-10 h-10 flex items-center justify-center rounded-full cursor-pointer`}>
                            {check == i && <Check className="text-white"/>}
                            </div>
                        ))}
                    </div>
          </AccordionContent>
            </AccordionItem>
        </Accordion>
        <hr className="my-4" />
        <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger className="group flex justify-between w-full items-center text-2xl font-semibold">Size <ChevronDownIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />    </AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-wrap mt-5 gap-3">
                    {dressSizeArr.map((size, i) => (
                        <Button onClick={() => dressSize(i)} key={i} variant={i === sizeDress ? "default" : "outline"} className="!px-5 h-[40px] rounded-full text-sm">
                        {size}
                        </Button>
                    ))}
                    </div>
          </AccordionContent>
            </AccordionItem>
        </Accordion>
        <Button onClick={filterApply} className="h-[48px] cursor-pointer w-full rounded-full mt-4">Apply Filter</Button>
    </div>
  )
}

export default SelectFilter




