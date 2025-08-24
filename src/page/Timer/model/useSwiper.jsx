import { useRef } from 'react'

const useSwiper = () => {
  const swiperRef = useRef(null)

  const slideTo = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index)
    }
  }

  return {
    swiperRef,
    slideTo
  }
}

export default useSwiper