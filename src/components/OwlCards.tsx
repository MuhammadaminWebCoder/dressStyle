import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { StarIcon } from "../assets/icons"
import { cardItemsType } from "@/types/CardBox"
import { AnimatedSection } from "./AnimatedSection"

export type Testimonial = {
  id: number
  title?: string
  rate: number
  check: boolean
  date?: string
  description: string
}

export const OwlCards: React.FC<{ data: cardItemsType[] }> = ({ data }) => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    <AnimatedSection  directions={["left"]}><div className="container py-10 max-sm:px-4 md:py-24">
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
        loop={true}
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
        {data?.map((item) => item.productComents?.map((t: Testimonial) => (
            <SwiperSlide key={t.id}>
              <div className="border border-gray-200 rounded-xl p-6 h-[190px] bg-white shadow-sm flex flex-col">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${i < t.rate ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-base">{t.title}</span>
                  {t.check && (
                    <span className="inline-flex items-center">
                      <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="!w-[13px] text-white" />
                      </span>
                    </span>
                  )}
                </div>
                <p className="text-gray-700 text-sm flex-grow">{t.description}</p>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
    </AnimatedSection>
  )
}
