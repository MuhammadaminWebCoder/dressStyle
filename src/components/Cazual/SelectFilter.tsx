import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@radix-ui/react-accordion";
import { Check, SlidersVertical, X } from "lucide-react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import useAppStore from "@/store";
import { AnimatedSection } from "../AnimatedSection";

type SizeType = | "XX-Small" | "X-Small" | "Small" | "Medium" | "Large" | "X-Large" | "XX-Large" | "3X-Large" | "4X-Large";

type ColorType = | "green" | "red" | "yellow" | "orange" | "cyan" | "blue" | "purple" | "pink" | "white" | "black";

  export interface setDataFilter {
    sizeDress:string
    range:[number,number]
    check:string
    cazual:string
  }
type CazualType = "T-shirts" | "Shorts" | "Shirts" | "Hoodie" | "Jeans";

const SelectFilter: React.FC<{ setFilterData: (filters: setDataFilter) => void }> = ({setFilterData}) => {
  const dressSizeArr: SizeType[] = [ "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"
  ];


const colorOptions: ColorType[] = [ "green", "red", "yellow", "orange", "cyan", "blue", "purple", "pink", "white", "black"
];


const colorMap: Record<ColorType, string> = {
  green: "bg-green-500 border-green-600",
  red: "bg-red-500 border-red-600",
  yellow: "bg-yellow-400 border-yellow-500",
  orange: "bg-orange-500 border-orange-600",
  cyan: "bg-cyan-400 border-cyan-600",
  blue: "bg-blue-600 border-blue-700",
  purple: "bg-purple-600 border-purple-700",
  pink: "bg-pink-500 border-pink-600",
  white: "bg-white border-gray-300",
  black: "bg-black border-black"
};


  const accordionCazual: { id: number; title: CazualType; buttonCazual: string }[] = [
    { id: 1, title: "T-shirts", buttonCazual: "T-shirts to filter" },
    { id: 2, title: "Shorts", buttonCazual: "Shorts to filter" },
    { id: 3, title: "Shirts", buttonCazual: "Shirts to filter" },
    { id: 4, title: "Hoodie", buttonCazual: "Hoodie to filter" },
    { id: 5, title: "Jeans", buttonCazual: "Jeans to filter" }
  ];

  const [sizeDress, setSize] = useState<SizeType>("XX-Small");
  const [range, setRange] = useState<[number, number]>([10, 90]);
  const [check, setCheck] = useState<ColorType>("green");
  const [cazual, setCazual] = useState<CazualType>("T-shirts");

  // filter qiymatlarini statega olib otish uchun click fn
  const filterApply = () => {
    setFilterData({ sizeDress, range, check, cazual });
    setOpenFilter(false)
  };

  // zustand uchun state
  const openFilter = useAppStore((state) => state.openFilter);
  const setOpenFilter = useAppStore((state) => state.setOpenFilter);

  return (
    <AnimatedSection directions={["left"]} extraClass={`col-span-3 ${openFilter ? "block" : "max-lg:hidden"} left-0 z-10 bg-white -top-12 max-lg:absolute self-start p-4 rounded-2xl border`}>
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Filters</p>
        {openFilter ? (
          <Button
            onClick={() => setOpenFilter(false)}
            className="bg-white p-0 text-black border-0 shadow-none"
          >
            <X className="scale-150" />
          </Button>
        ) : (
          <SlidersVertical color="grey" />
        )}
      </div>

      <hr className="my-4" />

      <Accordion className="my-4" type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="group flex justify-between w-full items-center">
      Casual Options
      <ChevronDownIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
    </AccordionTrigger>
    <AccordionContent>
      {accordionCazual.map((item, ind) => (
        <Button
          key={ind}
          onClick={() => setCazual(item.title)}
          className={`cursor-pointer my-1 w-full ${
            cazual === item.title
              ? 'bg-black text-white'
              : '!bg-white text-black'
          }`}
        >
          {item.buttonCazual}
        </Button>
      ))}
    </AccordionContent>
  </AccordionItem>
</Accordion>


      <hr className="my-4" />

      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="group flex justify-between text-2xl font-semibold w-full items-center">
            Price
            <ChevronDownIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-full my-4">
              <Slider
                defaultValue={[10, 90]}
                min={0}
                max={300}
                step={1}
                className="cursor-pointer"
                onValueChange={(value) => setRange(value as [number, number])}
              />
              <div className="mt-2">${range[0]} - ${range[1]}</div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <hr className="my-4" />

      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="group flex justify-between w-full  text-2xl font-semibold items-center">
            Colors
            <ChevronDownIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-5 mt-5 gap-3">
              {colorOptions.map((color, i) => (
                <div
                  onClick={() => setCheck(color)}
                  key={i}
                  className={`${colorMap[color]} border-2 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer`}
                >
                  {check === color && (
                    <Check
                      className={`text-white ${
                        color === "white" ? "!text-black" : ""
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <hr className="my-4" />

      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="group flex justify-between w-full items-center text-2xl font-semibold">
            Size
            <ChevronDownIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap mt-5 gap-3">
              {dressSizeArr.map((size, i) => (
                <Button
                  onClick={() => setSize(size)}
                  key={i}
                  variant={size === sizeDress ? "default" : "outline"}
                  className="!px-5 h-[40px] rounded-full text-sm"
                >
                  {size}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button onClick={filterApply} className="h-[48px] cursor-pointer w-full rounded-full mt-4">
        Apply Filter
      </Button>
    </AnimatedSection>
  );
};

export default SelectFilter;
