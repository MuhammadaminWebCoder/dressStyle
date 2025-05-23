import { BrandLogo1, BrandLogo2, BrandLogo3, BrandLogo4, BrandLogo5 } from "../assets/icons"
import { AnimatedSection } from "./AnimatedSection"


const Brands = () => {
  return (
    <section id="brands" className="brand bg-black">
      <div className="container flex gap-5 justify-center md:justify-between items-center p-3 flex-wrap md:h-[122px]">
          <AnimatedSection delay={0.1} directions={["bottom"]}><a className='h-[40px] flex items-center' href="https://brands.com"><BrandLogo1 extraClass={'max-lg:w-[100px] hover:scale-110 duration-300'}/></a></AnimatedSection>
          <AnimatedSection delay={0.2} directions={["bottom"]}><a className='h-[40px] flex items-center' href="https://brands.com"><BrandLogo2 extraClass={'max-lg:w-[70px] hover:scale-110 duration-300'}/></a></AnimatedSection>
          <AnimatedSection delay={0.3} directions={["bottom"]}><a className='h-[40px] flex items-center' href="https://brands.com"><BrandLogo3 extraClass={'max-lg:w-[100px] hover:scale-110 duration-300'}/></a></AnimatedSection>
          <AnimatedSection delay={0.4} directions={["bottom"]}><a className='h-[40px] flex items-center' href="https://brands.com"><BrandLogo4 extraClass={'max-lg:w-[100px] hover:scale-110 duration-300'}/></a></AnimatedSection>
          <AnimatedSection delay={0.5} directions={["bottom"]}><a className='h-[40px] flex items-center' href="https://brands.com"><BrandLogo5 extraClass={'max-lg:w-[100px] hover:scale-110 duration-300'}/></a></AnimatedSection>
          </div>
    </section>
  )
}

export default Brands
