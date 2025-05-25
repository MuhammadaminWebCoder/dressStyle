import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { PATH } from "../hooks/getPath"
import { useEffect, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

const stats = [
  { label: "International Brands" },
  { label: "Happy Customers" },
  { label: "Available Products" },
];
  
const Hero = () => {
    //  1 tta stateni 2 yoki 3 hil maqsadda foydalanish uchun
    const [counts, setCounts] = useState(() =>  stats.map(() => 0));
  
    // randomniy sonlar beriladi 
    const targets = useState(() => 
      stats.map(() => Math.floor(Math.random() * 100) + 100)
    )[0];
  
    // 1 martta sanoq ishlashi uchun
    useEffect(() => {
      const intervals = stats.map((_, i) => {
        return setInterval(() => {
          setCounts(prev => {
            const updated = [...prev];
            if (updated[i] < targets[i]) {
              updated[i] += 1;
            } else {
              clearInterval(intervals[i]);
            }
            return updated;
          });
        }, 2);
      });
  
      return () => intervals.forEach(clearInterval);
    }, []);


  return (
    <section className="Hero bg-[#F2F0F1]">
      <div className="container max-lg:px-4 py-8 md:py-14 flex">
            <AnimatedSection  directions={["left"]}>
            <div className="md:w-[330px] w-full lg:w-[596px]">
                <h1 className="lg:text-[64px] text-[36px] lg:leading-20 font-extrabold mb-4">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-slate-400 text-[14px] mb-7">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <Link to={PATH.cazual}><Button className="lg:w-[210px] max-[400px]:w-full p-4 lg:py-7 lg:text-lg rounded-full">Shop Now</Button></Link>
                <div className="flex flex-wrap  max-[400px]:justify-center h-fit mt-8">
                  {stats.map((item, idx) => (  
                    <div key={idx} className="flex items-center">
                      <div>
                        <p className="lg:text-5xl text-3xl mb-2 font-semibold">{counts[idx]}+</p>
                        <p className="text-slate-400 max-[400px]:text-[10px] text-[14px]">{item.label}</p>
                      </div>
                      {idx < stats.length - 1 && (
                        <span className="block lg:h-[80px] mx-2 lg:mx-8 bg-slate-300"></span>
                      )}
                    </div>
                  ))}
                </div>
            </div>
            </AnimatedSection>
      </div>
    </section>
  )
}

export default Hero
