import NewCards from "../../components/NewCards"
import Brands from "../../components/Brands"
import Hero from "../../components/Hero"
import StyleDress from "../../components/StyleDress"
import {OwlCards} from "../../components/OwlCards"
import getCards from "../../services/getCards"
import { useState } from "react"
import { cardItemsType } from "../../types/CardBox"
import { Button } from "../../components/ui/button"

const Home = () => {
  const { data } = getCards();
  const [openMoreCard1,setOpenMoreCard1] = useState<boolean>(false)
  const [openMoreCard2,setOpenMoreCard2] = useState<boolean>(false)
  
   const newCards: cardItemsType[] = data.filter((item:cardItemsType) => item.degree === 'new')
  const topCards: cardItemsType[] = data.filter((item:cardItemsType) => item.degree === 'top')

  const visibleItems1 = openMoreCard1 ? newCards : newCards.slice(0, 4)
  const visibleItems2 = openMoreCard2 ? topCards : topCards.slice(0, 4)
  return (
    <div>
      <Hero/>
      <Brands/>
      <section id="arrivals" className={`new_arrivals max-sm:px-4 py-6 md:py-12 `}>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center">{'NEW ARRIVALS'}</h1>
        <ul className="container gap-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-between min-[480px]:!pt-10 pt-4">
        {visibleItems1.map((item:cardItemsType,ind:number)=> <NewCards key={ind} item={item}/>)}
        </ul>
        <Button onClick={() => setOpenMoreCard1(true)} className={`max-sm:w-full w-[170px] lg:w-[200px] h-[40px] lg:h-[48px] bg-white border rounded-full text-black mx-auto flex mt-7 duration-300 hover:text-white ${openMoreCard1 && 'hidden'}`}>View All</Button>
      </section>
      <hr />
      <section id="sale" className={`new_arrivals max-sm:px-4 py-6 md:py-12 `}>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center">{'TOP SELLING'}</h1>
        <ul className="container gap-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-between min-[480px]:!pt-10 pt-4">
        {visibleItems2.map((item:cardItemsType,ind:number)=> <NewCards key={ind} item={item}/>)}
        </ul>
        <Button onClick={() => setOpenMoreCard2(true)} className={`max-sm:w-full w-[170px] lg:w-[200px] h-[40px] lg:h-[48px] bg-white border rounded-full text-black mx-auto flex mt-7 duration-300 hover:text-white ${topCards.length <= 4 && 'hidden'} ${openMoreCard2 && 'hidden'}`}>View All</Button>
      </section>
      <StyleDress/>
      <OwlCards data={data} />
    </div>
  )
}

export default Home
