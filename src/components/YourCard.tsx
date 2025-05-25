import { ArrowRight, ChevronRight, Tag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { toast } from "sonner";

interface CartItem {
  id: number;
  image: string;
  title: string;
  size: string;
  color: string;
  newPrice: number;
  oldPrice: number;
  salePercent: number;
  count: number;
}

const YourCard = () => {
  const [code, setCode] = useState<string>("");
  const [cartItems, setCartItems] = useState<CartItem[] | null>(null);
  const shopCards = JSON.parse(localStorage.getItem('data') || "[]")
  
  if (!cartItems) setCartItems(shopCards);

  // cardni localstoragedan va shop dan savatdan olib tashlash uchun delete
  const ShopCardDelete = (id:number) => {
    if (!cartItems) return;
    const filtered = cartItems.filter(item => item.id !== id);
    setCartItems(filtered); 
    localStorage.setItem("data", JSON.stringify(filtered)); 
  }
// count sanogini oshiruvchi
  const increment = (handleId: number) => {
    if (!cartItems) return;
    const updated = cartItems.map((item) =>
      item.id === handleId ? { ...item, count: item.count + 1 } : item
    );
    setCartItems(updated);
  };

// count sanogini tushuruvchi
  const decrement = (handleId: number) => {
    if (!cartItems) return;
    const updated = cartItems.map((item) =>
      item.id === handleId && item.count > 1 ? { ...item, count: item.count - 1 } : item
    );
    setCartItems(updated);
  };

  // narxni shopingda hisoblash 
  const discount = cartItems?.reduce((acc, item) => {
  const hasDiscount = item.oldPrice && item.oldPrice > item.newPrice;
  const discountValue = hasDiscount ? (item.oldPrice - item.newPrice) * item.count : 0;
  return acc + discountValue;}, 0) || 0;
  const subtotal = cartItems?.reduce((acc, item) => acc + item.newPrice * item.count, 0) || 0;
  const delivery = 15;
  const [promoCode,setPromoCode] = useState<number>(0)
  // umumiy summa total orqali keladi
  const total = subtotal + delivery - promoCode ;

  const [checkPay,_setCheckPay] = useState<boolean>(false)

  // agar pul tolansa raxmat tolanmasa warning chiqadi
  const goToPay = () => {
    if (checkPay) {
        toast.success(`${total} - pay thank you`)
    }else{
      toast.warning(`no checked pay ${total}$ . pay with payMe Click or more`)
    }
  }
  // promocode bonus pul taqdim etish uchun code va price
  const applyCode = () => {
      if (code == 'Muhammadamin') {
        setPromoCode(155)
      }
  }
  // har gal promocode ishlatilganda alert orqalai har gal taqdim etish uchun
useEffect(() => {
    if (promoCode > 0) {
      toast.success(`Promocode - ${code} success! You got $${promoCode} sale.`);
    }
  }, [promoCode, code]);
  return (
    <>
      <hr />
      <nav className="text-sm text-gray-500 flex items-center gap-1 mt-3 mb-6">
        <Link to="/" className="hover:underline text-gray-600">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/cazual" className="hover:underline text-gray-600">cazual</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/cazual/1" className="hover:underline text-gray-600">card info</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black">T-shirts</span>
      </nav>
      <p className="lg:text-5xl text-3xl font-extrabold">YOUR CART</p>
      <div className="grid w-full gap-4 mt-5 !pb-[80px] grid-cols-12">
        <ul className="col-span-12 md:col-span-7 lg:col-span-7 self-start border rounded-2xl max-[500px]:p-2 p-4">
          {cartItems?.map((item: CartItem, ind: number) => (
            <AnimatedSection key={item.id} directions={["left"]}><div >
              <li className="flex">
                <div className="border rounded-lg overflow-hidden max-[500px]:w-[100px] max-[500px]:h-[100px] w-[124px] h-[124px]">
                  <img className="w-full h-full object-contain" src={item.image} alt="cardImg" />
                </div>
                <div className="ms-4 flex-1">
                  <p className="text-xl max-[500px]:text-sm flex justify-between lg:h-[36px] font-bold">
                    {item.title}
                    <Button className="!bg-white cursor-pointer border-none !p-0 shadow-none" onClick={() => ShopCardDelete(item.id)}><Trash2 color="red"  className="max-[500px]:!w-4 cursor-pointer" /></Button>
                  </p>
                  <p className="max-[500px]:text-[13px]">Size: <span className="ms-1 text-slate-600">{item.size}</span></p>
                  <p className="max-[500px]:text-[13px]">Color: <span className="ms-1 text-slate-600">{item.color}</span></p>
                  <div className="max-[500px]:text-xl text-2xl flex justify-between items-end font-semibold mt-1">
                    <div className="flex items-center">{item.newPrice && <p>${item.newPrice}</p>}</div>
                    <div className="flex max-[500px]:font-normal max-[500px]:text-sm items-center border bg-slate-200 rounded-full max-[500px]:h-[30px] h-[36px]">
                      <button onClick={() => decrement(item.id)} className="max-[500px]:px-2 px-3 -mt-1.5 cursor-pointer text-3xl">-</button>
                      <span className="max-[500px]:w-[26px] w-[35px] text-center">{item.count}</span>
                      <button onClick={() => increment(item.id)} className="max-[500px]:px-2 px-3 -mt-1.5 cursor-pointer text-3xl">+</button>
                    </div>
                  </div>
                </div>
              </li>
              {ind !== cartItems.length - 1 && <hr className="max-[500px]:my-2 my-4" />}
            </div></AnimatedSection>
          ))}
          {!cartItems?.length && <p className="text-center">empty</p>}
        </ul>
        <div className="col-span-12 md:col-span-5 lg:col-span-5">
          <AnimatedSection directions={["bottom"]}>
          <div className=" self-start border rounded-2xl p-4">
            <p className="text-2xl mb-4 font-bold">Order Summary</p>
          <div className="flex mb-4 justify-between items-center">
            <p className="text-slate-500 text-xl">Subtotal</p>
            <p className="text-xl font-semibold">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex mb-4 justify-between items-center">
            <p className="text-slate-500 text-xl">Discount (-20%)</p>
            <p className="text-xl text-red-500 font-semibold">-${discount.toFixed(2)}</p>
          </div>
          <div className="flex mb-4 justify-between items-center">
            <p className="text-slate-500 text-xl">Delivery Fee</p>
            <p className="text-xl font-semibold">${delivery}</p>
          </div>
          <hr className="my-4" />
          <div className="flex mb-4 justify-between items-center">
            <p className="text-slate-500 text-xl">Total</p>
            <p className="text-xl font-semibold">${total.toFixed(2)}</p>
          </div>
          <div className="flex my-4">
            <div className="bg-slate-200 flex-1 me-2 relative rounded-full">
              <Input onChange={(e) => setCode(e.target.value)} value={code} className="!text-[17px] rounded-full !ps-10 max-[480px]:h-[40px] h-[48px]" placeholder="Add promo code" />
              <Tag className="absolute left-3 max-[480px]:top-2 top-3.5 !w-[20px]" />
            </div>
            <Button onClick={applyCode} className="max-[480px]:h-[40px] h-[48px] cursor-pointer rounded-full px-8">Apply</Button>
          </div>
          <Button onClick={goToPay} className="max-[480px]:h-[45px] h-[58px] cursor-pointer rounded-full text-md w-full px-8">
            Go to Checkout <ArrowRight className="!w-5 !h-5" />
          </Button>
          </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default YourCard;
