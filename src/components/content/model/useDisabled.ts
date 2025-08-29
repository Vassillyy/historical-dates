import {useRef, useState, useEffect} from 'react'
import {type Swiper as SwiperRef} from 'swiper'

export const useDisabled = (index: number, maxIndex: number) => {
  const swiperRef = useRef<SwiperRef | null>(null)
  const [isDisabledLeft, setIsDisabledLeft] = useState<boolean>(false)
  const [isDisabledRight, setIsDisabledRight] = useState<boolean>(false)

  /** При изменении активного индекса из стора показываем нужный контент */
  useEffect(() => {
    if (swiperRef.current) {
      setIsDisabledLeft(true)
      setIsDisabledRight(true)
      swiperRef.current.slideTo(index)
    }

    let timerLeft = setTimeout(() => {
      setIsDisabledLeft(false)
    }, 1000)

    let timerRight = setTimeout(() => {
      setIsDisabledRight(false)
    }, 1000)

    if (index === maxIndex) clearTimeout(timerLeft)
    if (index === 0) clearTimeout(timerRight)

    return () => {
      clearTimeout(timerLeft)
      clearTimeout(timerRight)
    }
  }, [index])

  return {swiperRef, isDisabledLeft, isDisabledRight}
}
