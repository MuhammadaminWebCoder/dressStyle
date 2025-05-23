import React, { useEffect, useState } from "react";
import { Star, ChevronRight, Check, SlidersVertical, Ellipsis } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { TabsContent } from "@radix-ui/react-tabs";
import { Testimonial } from "../OwlCards";
import NewCards from "../NewCards";
import { cardItemsType } from "../../types/CardBox";
import getCards from "../../services/getCards";
import { PATH } from "../../hooks/getPath";
import { AnimatedSection } from "../AnimatedSection";
export interface SelectedCard {
  id?: number | string;
  title?: string;
  color: string;
  size: string;
  newPrice?: number;
  oldPrice?: number;
  salePercent?: number;
  count: number;
  image?: string;
};

export const CardInfo: React.FC = () => {
  const { id } = useParams();
  const { data = []} = getCards();
  const CardData = data.find((item: cardItemsType) => String(item.id) === id);
 
  const [count,setCount] = useState<number>(1)
  const [imageSlideId,setImageSlideId] = useState<number>(0)
  const selectedColor = (checked: string): void => {
    setCheck(checked)
  }
  const dressSize = (selectDress:string):void => {
    setSize(selectDress)
  }
 const [check, setCheck] = useState<string>("");
const [sizeDress, setSize] = useState<string>("");

useEffect(() => {
  if (CardData) {
    setCheck(CardData.color[0] || "");
    setSize(CardData.size[0] || "");
  }
}, [CardData]);

  const navigate = useNavigate()

  const selectedCard = {
    id: CardData?.id,
    title: CardData?.title,
    color: check,
    size: sizeDress,
    newPrice: CardData?.newPrice,
    oldPrice: CardData?.oldPrice,
    salePercent: CardData?.salePercent,
    count: count,
    image: CardData?.image,
  };
  const existingData = JSON.parse(localStorage.getItem('data') || '[]');

 const handleAddCard = () => {
   
   const unicData = existingData.some((item:SelectedCard) => 
    item.id === selectedCard.id && item.title === selectedCard.title
  )
  if (!unicData) {
      toast.success("Product added to cart", {
        description: `Size: ${sizeDress}, Color: Variant ${check}`,
       });

      existingData.push(selectedCard);

      localStorage.setItem('data', JSON.stringify(existingData));
      setTimeout(() => navigate(PATH.shoping), 500);
    }
    else{
       toast.warning("This product is already in cart");
    }
};
 interface SlideArr {
    id: number;
    image: string;
}
  const slideArr = [
    {
      id:1,
      image:CardData?.image,
    },
    {
      id:2,
      image:CardData?.image1,
    },
    {
      id:3,
      image:CardData?.image2,
    },
  ]
  
  const [openMoreComment,setOpenMoreComment] = useState<boolean>(false)
  const [openMoreCard2,setOpenMoreCard2] = useState<boolean>(false)
  
  const topCards: cardItemsType[] = data.filter((item:cardItemsType) => item.degree === 'top')

  const cardComment = openMoreComment ? CardData?.productComents : CardData?.productComents?.slice(0, 4)
  const visibleItems2 = openMoreCard2 ? topCards : topCards.slice(0, 4)

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
                    {slideArr?.map((item:SlideArr,i:number) => (
                      <AnimatedSection key={i} onClick={() => setImageSlideId(i)} directions={["left"]}  extraClass="rounded-xl border overflow-hidden hover:border-2 hover:border-blue-600 w-full h-full ">
                        <img className="h-full w-full object-cover" src={item.image} alt="showCarucelImg" />
                      </AnimatedSection>
                    ))}
                </div>
                <AnimatedSection extraClass={`rounded-xl border min-[560px]:ms-3 max-[560px]:w-full max-[560px]:order-1 overflow-hidden flex items-center w-[444px] h-full`} directions={["bottom"]}>
                    <img className="h-full object-cover w-full" src={slideArr[imageSlideId].image} alt="showCarucelImg" />
                </AnimatedSection>
            </div>

        <AnimatedSection directions={["right"]}><div className="space-y-4">
          <h1 className="text-4xl max-[540px]:text-2xl font-extrabold">
            {CardData?.title}
          </h1>
          <div className="flex items-center gap-2">
            {[...Array(CardData?.rate)].map((_, i) => (
              <Star key={i} className="max-[540px]:w-4 max-[540px]:h-4 w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <Star className="max-[540px]:w-4 max-[540px]:h-4 w-5 h-5 text-yellow-400" />
            <span className="text-sm text-gray-600">{CardData?.rate}/5</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="max-[540px]:text-2xl text-4xl font-bold text-black">{CardData?.newPrice}$</span>
            {CardData?.oldPrice && <span className="max-[540px]:text-2xl text-4xl font-semibold line-through text-gray-400">{CardData?.oldPrice}$</span>}
            {CardData?.salePercent && <span className="text-red-500 bg-red-200 rounded-2xl max-[540px]:py-0 px-2 py-1.5 text-sm">{CardData?.salePercent}%</span>}
          </div>

          <p className="text-gray-600 text-sm">{CardData?.description}</p>
          <hr />
          <div>
            <p className="text-lg text-slate-500 mb-2">Select Colors</p>
            <div className="flex gap-3">
              {CardData?.color?.map((color:string, i:number) => (
                <div onClick={() => selectedColor(color)} key={i} style={{backgroundColor: color}} className={`border w-10 h-10 flex items-center justify-center rounded-full cursor-pointer`}>
                  {check == color && <Check className={`text-white ${color === "white" ? "!text-black" : ""}`}/>}
                </div>
              ))}
            </div>
          </div>
          <hr />

          <div>
            <p className="text-lg text-slate-500 mb-2">Choose Size</p>
            <div className="flex flex-wrap gap-2">
              {CardData?.size.map((size:string, i:number) => (
                <Button onClick={() => dressSize(size)} key={i} variant={size === sizeDress ? "default" : "outline"} className="!px-7 max-[480px]:h-[40px] cursor-pointer h-[50px] rounded-full text-md">
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
            <Button onClick={handleAddCard} className="rounded-full cursor-pointer flex-1  max-[480px]:h-[40px] h-[50px]">Add to Cart</Button>
          </div>
        </div></AnimatedSection>
      </div>
      <div className="container py-12">
      <div className="w-full">
      <Tabs defaultValue="tab1" className="w-full">
        <TabsList className="w-full grid grid-cols-12 bg-transparent">
          <TabsTrigger value="tab1" className="!shadow-none max-[480px]:col-span-5 col-span-4 max-[560px]:text-[14px] text-[20px] py-3 cursor-pointer border-b-slate-200 text-slate-400 data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-b-black rounded-none">Product Details</TabsTrigger>
          <TabsTrigger value="tab2" className="!shadow-none max-[480px]:col-span-5 col-span-4 max-[560px]:text-[14px] text-[20px] py-3 cursor-pointer border-b-slate-200 text-slate-400 data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-b-black rounded-none">Rating & Reviews</TabsTrigger>
          <TabsTrigger value="tab3" className="!shadow-none max-[480px]:col-span-2 col-span-4 max-[560px]:text-[14px] text-[20px] py-3 cursor-pointer border-b-slate-200 text-slate-400 data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-b-black rounded-none">FAQs</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="py-4 mt-4 flex items-center justify-between">
              <div className="flex items-center"><p className="max-[480px]:text-lg text-2xl font-semibold">All Reviews</p> <p className="text-slate-500 ps-2 pt-1">({CardData?.productComents?.length})</p></div>
              <div className="flex items-center gap-2">
                <Button className="!bg-white w-[48px] h-[48px] max-[480px]:w-[38px] max-[480px]:h-[38px] rounded-full text-black"><SlidersVertical/></Button>
                <Button className="!bg-white  h-[48px] max-[560px]:hidden px-6 rounded-full text-black">Latest</Button>
                <Button className="rounded-full max-[480px]:text-sm max-[480px]:px-3 px-6 h-[48px] max-[480px]:h-[38px]">Write a Review</Button>
              </div>
          </div>
          <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-4">
          {cardComment?.map((t:Testimonial) => (
            <AnimatedSection key={t.id} directions={["bottom"]}>
              <div className="border border-gray-200 rounded-xl p-6 h-full bg-white shadow-sm flex justify-between">
              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star fill="currentColor"  key={i} className={`w-5 h-5 ${i < t.rate ? "text-yellow-400" : "text-gray-300"}`} />
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-xl">{t.title}</span>
                  {t.check && (
                    <span className="inline-flex items-center">
                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"><Check className="!w-[13px] text-white"/></span>
                  </span>
                  )}
                </div>
                <p className="text-slate-600 h-[80px] text-md flex-grow line-clamp-3">{t.description}</p>
                <p className="text-slate-700 font-semibold text-md mt-1">{t.date}</p>
              </div>
              <div className="ms-4">
                <Ellipsis className="w-[40px]"/>
              </div>
            </div>
            </AnimatedSection>
          ))}
          </div>
          {cardComment?.length >= 4 && <Button onClick={() => setOpenMoreComment(true)} className={`!px-7 !bg-white mt-8 text-black h-[50px] flex mx-auto rounded-full text-md ${openMoreComment == true && 'hidden'}`}>
              Load More Reviews
          </Button>}

          {/* ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ */}
          <section className={`new_arrivals max-sm:px-4 py-6 md:py-12 `}>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center">{'YOU MIGHT ALSO LIKE'}</h1>
        <ul className="container gap-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-between min-[480px]:!pt-10 pt-4">
        {visibleItems2.map((item:cardItemsType,ind:number)=> <NewCards key={ind} item={item}/>)}
        </ul>
        <Button onClick={() => setOpenMoreCard2(true)} className={`max-sm:w-full w-[170px] lg:w-[200px] h-[40px] lg:h-[48px] bg-white border rounded-full text-black mx-auto flex mt-7 duration-300 hover:text-white ${topCards.length <= 4 && 'hidden'} ${openMoreCard2 && 'hidden'}`}>View All</Button>
      </section>

        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4 text-center text-2xl font-bold mt-4"> no Reyting no reviwes</div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4 text-center text-2xl font-bold mt-4">no Faqs</div>
        </TabsContent>
      </Tabs>
    </div>
      </div>
    </div>
  );
};
