import { Star } from "lucide-react"
import { Link } from "react-router-dom"
import React from 'react'
import { AnimatedSection } from "../AnimatedSection"
import { cardItemsType } from "@/types/CardBox"

const CazualCard: React.FC<{item:cardItemsType}> = ({item}) => {
  return (
    <AnimatedSection directions={["bottom"]}><li>
        <div className="flex">
            <Link to={`/cazual/${item.id}`} className="image mx-auto w-full max-[390px]:!h-[130px] max-[472px]:!h-[180px] max-sm:h-[245px] max-sm:w-[220px]  md:h-[181px] lg:h-[245px] xl:h-[300px] h-[300px]  cardArriveEmote relative overflow-hidden border rounded-xl">
                <div className='absolute priceOpened z-10 duration-300 w-full h-full -top-full bg-[#00000080] flex items-center justify-center'>
                <div className='absolute text-white top-[30%]'>
                    {item.newPrice && <i className="text-3xl  font-bold text-white">${item.newPrice}</i>}
                    {item.oldPrice && <i className="text-gray-400 font-bold line-through">${item.oldPrice}</i>}
                    {item.salePercent && <p className="text-center bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{item.salePercent}% </p>}
                </div>
                </div>
                <img className='cardHoverScale mx-auto object-cover h-full transition-all duration-300' src={item.image} alt="card img" />
            </Link>
        </div>
        <div className="py-4 min-[500px]:px-4 space-y-3">
        <h2 className="min-[500px]:text-xl text-md line-clamp-1 font-semibold">{item.title}</h2>

        <div className="flex items-center space-x-1 text-yellow-500">
            {Array.from({ length: Math.floor(Number(item.rate)) }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
            ))}
            {Number(item.rate) % 1 !== 0 && (
            <Star size={16} fill="currentColor" className="opacity-50" />
            )}
            <span className="text-sm text-gray-600 ml-2">{item.rate}/5</span>
        </div>
        <div className="flex flex-wrap max-[400px]:justify-center items-center space-x-2">
        {item.newPrice && <span className="min-[500px]:text-2xl text-lg font-bold text-black">${item.newPrice}</span>}
        {item.oldPrice && <span className="text-gray-400 min-[500px]:text-2xl text-lg line-through">${item.oldPrice}</span>}
        {item.salePercent && <span className="text-sm bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{item.salePercent}% </span>}
        </div>
        </div>
    </li></AnimatedSection>
  )
}

export default CazualCard
