import NewCards from "../../components/NewCards"
import Brands from "../../components/Brands"
import Hero from "../../components/Hero"
import StyleDress from "../../components/StyleDress"
import OwlCards from "../../components/OwlCards"
// import { cardItemsType } from "../../types/CardBox"
// import cardImg from '../../assets/image/CardImage.png'

const Home = () => {
  const { cardItems, isLoading, isError } = useCategories();

  // const cardItems:cardItemsType[] = [
  //     {
  //       id:1,
  //       image: cardImg,
  //       title:'T-shirt with tape details',
  //       rate:'4.5',
  //       newPrice:120,
  //       oldPrice:null,
  //       salePercent:null,
  //     },
  //     {
  //       id:2,
  //       image: cardImg,
  //       title:'skinniy fit jeans',
  //       rate:'3.5',
  //       newPrice:240,
  //       oldPrice:260,
  //       salePercent:20,
  //     },
  //     {
  //       id:3,
  //       image: cardImg,
  //       title:'checed shirt',
  //       rate:'4.5',
  //       newPrice:180,
  //       oldPrice:null,
  //       salePercent:null,
  //     },
  //     {
  //       id:4,
  //       image: cardImg,
  //       title:'sleve striped T-shirt',
  //       rate:'4.5',
  //       newPrice:130,
  //       oldPrice:160,
  //       salePercent:30,
  //     },
  
  //   ]
  return (
    <div>
      <Hero/>
      <Brands/>
      <NewCards title={'NEW ARRIVALS'} cardItems={cardItems}/>
      <hr />
      <NewCards title={'NEW ARRIVALS'} cardItems={cardItems}/>
      <StyleDress/>
      <OwlCards/>
    </div>
  )
}

export default Home
