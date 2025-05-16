// TestimonialCarousel.tsx
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { StarIcon } from "../assets/icons"

export type Testimonial = {
  id: number
  name: string
  verified: boolean
  rating: number
  text: string
  date?:string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    verified: true,
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shopico.",
  },
  {
    id: 2,
    name: "Alex K.",
    verified: true,
    rating: 4,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopico.",
  },
  {
    id: 3,
    name: "James L.",
    verified: true,
    rating: 5,
    text: "I'm thrilled to have stumbled upon Shopico. The selection of clothes is on-point with the latest trends.",
  },
  {
    id: 4,
    name: "Moody J.",
    verified: true,
    rating: 4,
    text: "The quality of their products is exceptional. Each piece feels premium.",
  },
]

export default function TestimonialCarousel() {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="container py-10 max-sm:px-4 md:py-24">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">OUR HAPPY CUSTOMERS</h2>
        <div className="flex items-center gap-2">
          <button ref={prevRef} aria-label="Previous" className="p-2 border rounded-full hover:bg-gray-100">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button ref={nextRef} aria-label="Next" className="p-2 border rounded-full hover:bg-gray-100">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="border border-gray-200 rounded-xl p-6 h-[190px] bg-white shadow-sm flex flex-col">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={`w-5 h-5 ${i < t.rating ? "text-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-base">{t.name}</span>
                {t.verified && (
                  <span className="inline-flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"><Check className="!w-[13px] text-white"/></span>
                </span>
                )}
              </div>
              <p className="text-gray-700 text-sm flex-grow">{t.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}


