import { ArrowRight, ChevronRight, Tag, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"
import CardImage from '../assets/image/CardImage.png'
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const YourCard = () => {
    interface CartItem {
        id: number;
        image: string;
        title: string;
        size: string;
        color: string;
        price: number;
        count: number;
      }
      const [code,setCode] = useState<string>('')
    const shopCards:CartItem[] = [
        {
            id:1,
            image:CardImage,
            title:'Gradient Graphic T-shirt',
            size:'Large',
            color:'White',
            price:145,
            count:1,
        },
        {
            id:2,
            image:CardImage,
            title:'Gradient Graphic T-shirt',
            size:'Large',
            color:'White',
            price:145,
            count:1,
        },
        {
            id:3,
            image:CardImage,
            title:'Gradient Graphic T-shirt',
            size:'Large',
            color:'White',
            price:145,
            count:1,
        },
    
    ]
    const lastIndex = shopCards.length - 1
    
      const priceCount = {
        subtotal: 565,
        discount: 113,
        delivery: 15,
        total:0
      };
      const increment = (handleId:number) => {
        
      }
      const decrement = (handleId:number) => {
        
      }
      priceCount.total = priceCount.subtotal + priceCount.delivery - priceCount.discount;
  return (
    <>
      <hr />
      <nav className="text-sm text-gray-500 flex items-center gap-1 mt-3 mb-6">
        <Link to="/" className="hover:underline text-gray-600">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/shop" className="hover:underline text-gray-600">Shop</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/shop/men" className="hover:underline text-gray-600">Men</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black">T-shirts</span>
      </nav>
      <p className="lg:text-5xl text-3xl font-extrabold">YOUR CART</p>
    <div className="grid w-full gap-4 mt-5 !pb-[80px] grid-cols-12">
        <ul className="col-span-12 md:col-span-7 lg:col-span-7 self-start border rounded-2xl max-[500px]:p-2 p-4">
            {shopCards.map((item:CartItem,ind:number)=> (
                <div key={ind}>
                    <li className="flex">
                            <div><img className="rounded-lg max-[500px]:w-[100px] max-[500px]:h-[100px] w-[124px] h-[124px]" src={item.image} alt="cardImg" /></div>
                            <div className="ms-4 flex-1">
                                <p className="text-xl max-[500px]:text-sm flex justify-between lg:h-[40px] font-bold">{item.title} <Trash2 color="red" className="max-[500px]:!w-4 cursor-pointer"/></p>
                                <p className="max-[500px]:text-[13px]">Size: <span className="ms-1 text-slate-600">{item.size}</span></p>
                                <p className="max-[500px]:text-[13px]">Color: <span className="ms-1 text-slate-600">{item.color}</span></p>
                                <div className="max-[500px]:text-xl  text-2xl flex justify-between items-end font-semibold mt-1">${item.price} <div className="flex max-[500px]:font-normal max-[500px]:text-sm items-center border bg-slate-200 rounded-full max-[500px]:h-[30px] h-[40px]">
                                <button onClick={() => increment(item.id)} className="max-[500px]:px-2 px-3 -mt-1.5 cursor-pointer text-3xl">-</button>
                                <span className="max-[500px]:w-[26px] w-[35px] text-center">{item.count}</span>
                                <button onClick={() => decrement(item.id)} className="max-[500px]:px-2 px-3 -mt-1.5 cursor-pointer text-3xl">+</button>
                            </div></div>
                            </div>
                    </li>
                    {ind !== lastIndex && <hr className="max-[500px]:my-2 my-4" />}
                </div>
            ))}
        </ul>
        <div className="col-span-12 md:col-span-5 lg:col-span-5 self-start border rounded-2xl p-4">
            <p className="text-2xl mb-4 font-bold">Order Summary</p>
            <div className="flex mb-4 justify-between items-center"><p className="text-slate-500 text-xl">Subtotal</p> <p className="text-xl font-semibold">${priceCount.subtotal}</p></div>
            <div className="flex mb-4 justify-between items-center"><p className="text-slate-500 text-xl">Discount (-20%)</p> <p className="text-xl text-red-500 font-semibold">-${priceCount.discount}</p></div>
            <div className="flex mb-4 justify-between items-center"><p className="text-slate-500 text-xl">Delivery Fee</p> <p className="text-xl font-semibold">${priceCount.delivery}</p></div>
            <hr className="my-4" />
            <div className="flex mb-4 justify-between items-center"><p className="text-slate-500 text-xl">Total</p> <p className="text-xl font-semibold">${priceCount.total}</p></div>
            <div className="flex my-4">
                <div className="bg-slate-200 flex-1 me-2 relative rounded-full">
                  <Input onChange={(e) => setCode(e.target.value)} value={code} className="!text-[17px] rounded-full !ps-10 max-[480px]:h-[40px] h-[48px] " placeholder="Add promo code"/>
                  <Tag className="absolute left-3 max-[480px]:top-2 top-3.5 !w-[20px] "/>
                </div>
                <Button className="max-[480px]:h-[40px] h-[48px] rounded-full px-8">Apply</Button>
            </div>
            <Button className="max-[480px]:h-[45px] h-[58px] rounded-full text-md w-full px-8">Go to Checkout <ArrowRight className="!w-5 !h-5"  /></Button>
        </div>
    </div>
    </>
  )
}

export default YourCard
