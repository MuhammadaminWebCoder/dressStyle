import React, { useState } from "react";
import { Star, ChevronRight, Check, SlidersVertical, Ellipsis } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import carouselsImg1 from '../../assets/image/ShowCaroucel1.png'
import carouselsImg2 from '../../assets/image/ShowCaroucel2.png'
import carouselsImg3 from '../../assets/image/ShowCaroucel3.png'
import { toast, Toaster } from "sonner";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { TabsContent } from "@radix-ui/react-tabs";
import { Testimonial } from "../OwlCards";
import NewCards from "../NewCards";
import cardImg from '../../assets/image/CardImage.png'
import { cardItemsType } from "../../types/CardBox";

export const CardInfo: React.FC = () => {

  const colorsSelect = [
    'bg-[#3d3b33]',
    'bg-[#2e3e4f]',
    'bg-[#2c7dbf]'
  ]
  const dressSizeArr = [
    "Small",
    "Medium",
    "Large",
    "X-Large"
  ]
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Samantha D.",
      verified: true,
      rating: 4,
      text: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
      date:'Posted on August 14, 2023'
    },
    {
      id: 2,
      name: "Alex K.",
      verified: true,
      rating: 4,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopico.",
      date:'Posted on August 14, 2023'
    },
    {
      id: 3,
      name: "James L.",
      verified: true,
      rating: 5,
      text: "I'm thrilled to have stumbled upon Shopico. The selection of clothes is on-point with the latest trends.",
      date:'Posted on August 14, 2023'
    },
    {
      id: 4,
      name: "Moody J.",
      verified: true,
      rating: 4,
      text: "The quality of their products is exceptional. Each piece feels premium.",
      date:'Posted on August 14, 2023'
    },
  ]
  const [check,setCheck] = useState<number>(0)
  const [sizeDress,setSize] = useState<number>(1)
  const [count,setCount] = useState<number>(1)
  const [imageSlideId,setImageSlideId] = useState<number>(1)
 const selectedColor = (checked: number): void => {
    setCheck(checked)
  }
  const dressSize = (selectDressId:number):void => {
    setSize(selectDressId)
  }
  const handleAddCard = () => {
    toast.success("Product added to cart", {description: `Size: ${dressSizeArr[1]}, Color: Variant ${check + 1}`
    });
  }
  const slideArr = [
    {
      id:1,
      image:carouselsImg1,
    },
    {
      id:2,
      image:carouselsImg2,
    },
    {
      id:3,
      image:carouselsImg3,
    },
  ]
  const cardItems:cardItemsType[] = [
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
  return (
    <div className="container max-sm:px-4">
      <Toaster richColors position="top-right" />
      <nav className="text-sm text-gray-500 flex items-center gap-1 mb-6">
        <Link to="/" className="hover:underline text-gray-600">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/cazual" className="hover:underline text-gray-600">cazual</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black">T-shirts</span>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="imgShowCards max-[560px]:flex-col md:h-[430px] lg:h-[530px] flex">
                <div className="gap-4 max-[560px]:h-[120px] max-[560px]:mt-4 grid min-[560px]:w-[162px] grid-rows-3 max-[560px]:order-2 max-[560px]:flex">
                    {slideArr.map((item:any,i:number) => (
                      <div onClick={ () => setImageSlideId(i)} key={i} className="rounded-xl overflow-hidden hover:border-2 border-blue-600 w-full h-full ">
                        <img src={item.image} alt="showCarucelImg" />
                      </div>
                    ))}
                </div>
                <div className="rounded-xl min-[560px]:ms-3 max-[560px]:w-full max-[560px]:order-1 overflow-hidden flex items-center w-[444px] h-full">
                <img className="h-full object-cover w-full" src={slideArr[imageSlideId].image} alt="showCarucelImg" />
            </div>
            </div>

        <div className="space-y-4">
          <h1 className="text-4xl max-[540px]:text-2xl font-extrabold">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>
          <div className="flex items-center gap-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="max-[540px]:w-4 max-[540px]:h-4 w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <Star className="max-[540px]:w-4 max-[540px]:h-4 w-5 h-5 text-yellow-400" />
            <span className="text-sm text-gray-600">4.5/5</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="max-[540px]:text-2xl text-4xl font-bold text-black">$260</span>
            <span className="max-[540px]:text-2xl text-4xl font-semibold line-through text-gray-400">$300</span>
            <span className="text-red-500 bg-red-200 rounded-2xl max-[540px]:py-0 px-2 py-1.5 text-sm">-40%</span>
          </div>

          <p className="text-gray-600 text-sm">
            This graphic t-shirt which is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style.
          </p>

          <hr />
          <div>
            <p className="text-lg text-slate-500 mb-2">Select Colors</p>
            <div className="flex gap-3">
              {colorsSelect.map((color:string, i:number) => (
                <div onClick={() => selectedColor(i)} key={i} className={`${color} w-10 h-10 flex items-center justify-center rounded-full cursor-pointer`}>
                  {check == i && <Check className="text-white"/>}
                </div>
              ))}
            </div>
          </div>
          <hr />

          <div>
            <p className="text-lg text-slate-500 mb-2">Choose Size</p>
            <div className="flex flex-wrap gap-2">
              {dressSizeArr.map((size, i) => (
                <Button onClick={() => dressSize(i)} key={i} variant={i === sizeDress ? "default" : "outline"} className="!px-7 max-[480px]:h-[40px]  h-[50px] rounded-full text-md">
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <hr />

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border bg-slate-200 rounded-full  max-[480px]:h-[40px] h-[50px]">
              <button onClick={() => setCount(count > 1 ? count - 1 : 1)} className="max-[480px]:px-3 px-6 cursor-pointer text-3xl">-</button>
              <span className="max-[480px]:w-[30px] w-[50px] text-center">{count}</span>
              <button onClick={() => setCount(count + 1)} className="max-[480px]:px-3 px-6 cursor-pointer text-3xl">+</button>
            </div>
            <Button onClick={handleAddCard} className="rounded-full flex-1  max-[480px]:h-[40px] h-[50px]">Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className="container py-12">
      <div className="w-full">
      <Tabs defaultValue="tab1" className="w-full">
        <TabsList className="w-full grid grid-cols-12 bg-transparent">
          <TabsTrigger value="tab1" className="!shadow-none max-[480px]:col-span-5 col-span-4 max-[560px]:text-[14px] text-[20px] py-3 cursor-pointer border-b-slate-200 text-slate-400 data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-b-black rounded-none">Product Details</TabsTrigger>
          <TabsTrigger value="tab2" className="!shadow-none max-[480px]:col-span-5 col-span-4 max-[560px]:text-[14px] text-[20px] py-3 cursor-pointer border-b-slate-200 text-slate-400 data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-b-black rounded-none">Rating & Reviews</TabsTrigger>
          <TabsTrigger value="tab3" className="!shadow-none max-[480px]:col-span-2 col-span-4 max-[560px]:text-[14px] text-[20px] py-3 cursor-pointer border-b-slate-200 text-slate-400 data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-b-black rounded-none">FAQs</TabsTrigger>
        </TabsList>

        <TabsContent value="tab2">
          <div className="p-4 mt-4">Tab 1 content</div>
        </TabsContent>
        <TabsContent value="tab1">
          <div className="py-4 mt-4 flex items-center justify-between">
              <div className="flex items-center"><p className="max-[480px]:text-lg text-2xl font-semibold">All Reviews</p> <p className="text-slate-500 ps-2 pt-1">(451)</p></div>
              <div className="flex items-center gap-2">
                <Button className="!bg-white w-[48px] h-[48px] max-[480px]:w-[38px] max-[480px]:h-[38px] rounded-full text-black"><SlidersVertical/></Button>
                <Button className="!bg-white  h-[48px] max-[560px]:hidden px-6 rounded-full text-black">Latest</Button>
                <Button className="rounded-full max-[480px]:text-sm max-[480px]:px-3 px-6 h-[48px] max-[480px]:h-[38px]">Write a Review</Button>
              </div>
          </div>
          <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <div className="border border-gray-200 rounded-xl p-6 h-full bg-white shadow-sm flex justify-between">
              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star fill="currentColor"  key={i} className={`w-5 h-5 ${i < t.rating ? "text-yellow-400" : "text-gray-300"}`} />
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-xl">{t.name}</span>
                  {t.verified && (
                    <span className="inline-flex items-center">
                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"><Check className="!w-[13px] text-white"/></span>
                  </span>
                  )}
                </div>
                <p className="text-slate-600 h-[80px] text-md flex-grow line-clamp-3">{t.text}</p>
                <p className="text-slate-700 font-semibold text-md mt-1">{t.date}</p>
              </div>
              <div className="ms-4">
                <Ellipsis className="w-[40px]"/>
              </div>
            </div>
          ))}
          </div>
          <Button className="!px-7 !bg-white mt-8 text-black h-[50px] flex mx-auto rounded-full text-md">
              Load More Reviews
          </Button>

          {/* ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ */}
          {/* extraclass px-0 */}
          <NewCards containerClass={'!px-0'} title={'NEW ARRIVALS'} cardItems={cardItems}/>

        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4 mt-4">Tab 3 content</div>
        </TabsContent>
      </Tabs>
    </div>
      </div>
    </div>
  );
};
