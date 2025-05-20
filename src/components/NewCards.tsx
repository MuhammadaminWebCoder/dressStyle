import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react'
import { cardItemsType } from '../types/CardBox'
import { AnimatedSection } from './AnimatedSection'
const NewCards:React.FC<{item:cardItemsType}> = ({item}) => {
  return (
    <AnimatedSection  directions={["bottom"]}>
      <li>
        <div className="flex max-sm:justify-center">
            <Link to={`/cazual/${item.id}`} className="image w-full cardArriveEmote relative overflow-hidden rounded-xl">
              <div className='absolute priceOpened z-10 duration-300 w-full h-full -top-full bg-[#00000080] flex items-center justify-center'>
                <div className='absolute text-white top-[30%]'>
                  {item.newPrice && <i className="text-3xl font-bold text-white">${item.newPrice}</i>}
                  {item.oldPrice && <i className="text-gray-400 line-through">${item.oldPrice}</i>}
                  {item.salePercent && <p className="text-center bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{item.salePercent}% </p>}
                </div>  
              </div>
              <img className='cardHoverScale w-full transition-all duration-300' src={item.image} alt="card img" />
            </Link>
        </div>
        <div className="p-4 space-y-3 flex flex-col max-sm:items-center">
        <h2 className="max-[400px]:text-sm text-lg lg:text-xl line-clamp-1 font-semibold">{item.title}</h2>

        <div className="flex items-center space-x-1 text-yellow-500">
          {Array.from({ length: Math.floor(Number(item.rate)) }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
          {Number(item.rate) % 1 !== 0 && (
            <Star size={16} fill="currentColor" className="opacity-50" />
          )}
          <span className="text-sm text-gray-600 ml-2">{item.rate}/5</span>
        </div>
      <div className="flex items-center space-x-2">
        {item.newPrice && <span className=" max-[400px]:text-lg text-xl lg:text-2xl font-bold text-black">${item.newPrice}</span>}
        {item.oldPrice && <span className="max-[400px]:text-lg text-gray-400 text-xl lg:text-2xl line-through">${item.oldPrice}</span>}
        {item.salePercent && <span className="text-sm bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{item.salePercent}% </span>}
      </div>
        </div>
        </li>

    </AnimatedSection>
        
  )
}

export default NewCards
