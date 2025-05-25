import { Input } from "@/components/ui/input"
import { Logo, PayApple, PayGoogle, PayMaster, PayPal, PayVisa } from '@/assets/icons/index'
import { Link } from "react-router-dom"
import { Facebook, Github, Instagram, MailIcon, Twitter } from "lucide-react"
import { footerColsType, iconsPathFooter } from "@/types/footerCols"
import { AnimatedSection } from "@/components/AnimatedSection"

const Footer = () => {
  const footerCols: footerColsType[] = [
    {
      id: 1,
      title: <Logo />,
      description: 'We have clothes that suit your style and which you’re proud to wear. From women to men.',
      icons: [
        { id: 1, item: <Twitter className="!w-[15px]" /> },
        { id: 2, item: <Facebook className="!w-[15px]" /> },
        { id: 3, item: <Instagram className="!w-[15px]" /> },
        { id: 4, item: <Github className="!w-[15px]" /> },
      ],
    },
    {
      id: 2,
      title: 'Company',
      pathAndText: [
        { id: 1, path: '/about', pathText: 'About' },
        { id: 2, path: '/features', pathText: 'Features' },
        { id: 3, path: '/works', pathText: 'Works' },
        { id: 4, path: '/career', pathText: 'Career' },
      ],
    },
    {
      id: 3,
      title: 'Help',
      pathAndText: [
        { id: 1, path: '/support', pathText: 'Customer Support' },
        { id: 2, path: '/delivery', pathText: 'Delivery Details' },
        { id: 3, path: '/terms', pathText: 'Terms & Conditions' },
        { id: 4, path: '/privacy', pathText: 'Privacy Policy' },
      ],
    },
    {
      id: 4,
      title: 'faq',
      pathAndText: [
        { id: 1, path: '/ebooks', pathText: 'Free eBooks' },
        { id: 2, path: '/tutorials', pathText: ' Tutorial' },
        { id: 3, path: '/blog', pathText: 'How to - Blog' },
        { id: 4, path: '/youtube', pathText: ' Playlist' },
      ],
    },
    {
      id: 5,
      title: 'Resources',
      pathAndText: [
        { id: 1, path: '/ebooks', pathText: 'Free eBooks' },
        { id: 2, path: '/tutorials', pathText: 'Development Tutorial' },
        { id: 3, path: '/blog', pathText: 'How to - Blog' },
        { id: 4, path: '/youtube', pathText: 'Youtube Playlist' },
      ],
    },
  ]

  return (
    <section className="footer relative bg-[#F0F0F0]  pb-10 mt-20 pt-20 max-sm:mt-30">
      <AnimatedSection extraClass="subscribe px-4 max-sm:w-[480px] max-[480px]:!w-full absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2" directions={["bottom"]}>
        <div>
        <div className="container sm:flex justify-between bg-black text-white rounded-2xl p-4 min-[480px]:px-12 min-[480px]:py-8">
          <strong className="text-3xl lg:text-5xl pe-4 w-[300px] md:w-[600px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</strong>
          <div className="min-sm:w-[200px] max-sm:mt-4 md:w-[349px] flex flex-col justify-center space-y-3 text-black">
            <div className="relative">
              <MailIcon className="absolute !w-[17px] top-1.5 left-3"/>
              <Input className="rounded-full bg-white !ps-10 pe-3" placeholder="Enter your email address" />
            </div>
            <button className="rounded-full bg-white py-1.5 text-center  w-full font-semibold">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
      </AnimatedSection>
      
      <AnimatedSection  directions={["left"]}><ul className="footerPaths py-14 max-[416px]:!pt-20 container max-sm:px-4 max-md:space-y-4 grid grid-cols-12 min-[400px]:grid-cols-6 px-2 md:grid-cols-12 sm:gap-8 ">
        {footerCols.map((item: footerColsType) => (
          <li key={item.id} className={item.id == 1 ? `col-span-12 min-[400px]:col-span-4` : `col-span-6 min-[400px]:col-span-2`}>
            {typeof item.title === 'string' ? <h4 className="font-bold mb-2">{item.title}</h4> : item.title}
            {item.description && <p className="leading-7 text-slate-400 mb-4 me-4">{item.description}</p>}
            
            {item.pathAndText && (
              <ul className="space-y-2">
                {item.pathAndText.map(link => (
                  <li key={link.id}>
                    <a href={link.path} className="text-slate-600 hover:underline">{link.pathText}</a>
                  </li>
                ))}
              </ul>
            )}

            {item.icons && (
              <ul className="flex items-center gap-3 mt-4">
                {item.icons.map((icon: iconsPathFooter) => (
                  <li key={icon.id} className="border rounded-full w-[30px] h-[30px] hover:bg-black hover:text-white bg-white flex items-center justify-center">
                    {icon.item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul></AnimatedSection>

      <hr className="container" />
      <div className="flex md:flex-row flex-col justify-between container items-center ">
        <p className="text-slate-400">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex flex-wrap max-sm:justify-center sm:gap-4">
          <Link to="/"><PayVisa /></Link>
          <Link to="/"><PayMaster /></Link>
          <Link to="/"><PayPal /></Link>
          <Link to="/"><PayApple /></Link>
          <Link to="/"><PayGoogle /></Link>
        </div>
      </div>
    </section>
  )
}

export default Footer
