import {useRef, useEffect, useState} from 'react'
import {SwiperSlide} from 'swiper/react'
import {Navigation, EffectFade} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import {useAppSelector, useAppDispatch} from '@/store/index'
import {changeIndex} from '@/store/changeIndexSlice'
import {data} from '@/data/data'
import {formattedNumbers} from './model/formattedNumbers'
import {Arrow} from './Arrow'
import {useDisabled} from './model/useDisabled'
import {
  MainContainer,
  SmallButton,
  SwiperComponent,
  Slide,
  Column,
  Description,
  ContainerManagement,
  NumbersText,
  ContainerButtons,
  Button,
  Date
} from './styled'

export const Content = () => {
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([])
  const [showScrollLeft, setShowScrollLeft] = useState(false)
  const [showScrollRight, setShowScrollRight] = useState(false)

  const dispatch = useAppDispatch()
  const {index} = useAppSelector((state) => state.selection)

  const {swiperRef, isDisabledLeft, isDisabledRight} = useDisabled(
    index,
    data.length - 1
  )

  /** Пролистываем к следующему айтему */
  const swipeItem = (direction: 'next' | 'prev') => {
    if (direction === 'next') swiperRef.current?.slideNext()
    else swiperRef.current?.slidePrev()

    if (swiperRef.current) {
      dispatch(changeIndex(swiperRef.current.activeIndex))
    }
  }

  /** Горизонтальный скролл */
  const scrollItems = (direction: 'next' | 'prev') => {
    const el = scrollRefs.current[0]

    if (el) {
      if (direction === 'next') el.scrollBy({left: 400, behavior: 'smooth'})
      else el.scrollBy({left: -400, behavior: 'smooth'})

      checkScrollButtons()
    }
  }

  const checkScrollButtons = () => {
    const el = scrollRefs.current[0]
    if (el) {
      setShowScrollLeft(el.scrollLeft > 0)
      setShowScrollRight(el.scrollWidth - el.clientWidth - el.scrollLeft > 1)
    }
  }

  useEffect(() => {
    const el = scrollRefs.current[0]
    if (el) {
      const handleScroll = () => {
        checkScrollButtons()
      }

      el.addEventListener('scroll', handleScroll)

      checkScrollButtons()

      return () => {
        el.removeEventListener('scroll', handleScroll)
      }
    }
  }, [index])

  return (
    <MainContainer>
      <SmallButton
        isRight
        isVisibility={showScrollRight}
        onClick={() => scrollItems('next')}
      >
        <Arrow isRight isSmall />
      </SmallButton>
      <SmallButton
        isVisibility={showScrollLeft}
        onClick={() => scrollItems('prev')}
      >
        <Arrow isSmall />
      </SmallButton>
      <SwiperComponent
        effect="fade"
        fadeEffect={{crossFade: true}}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, EffectFade]}
        slidesPerView={1}
        initialSlide={0}
      >
        {data.map((element, index) => (
          <SwiperSlide key={index}>
            <Slide ref={(el) => (scrollRefs.current[index] = el)}>
              {element.items.map((el, ind) => {
                return (
                  <Column key={ind}>
                    <Date>{el.date}</Date>
                    <Description>{el.description}</Description>
                  </Column>
                )
              })}
            </Slide>
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <ContainerManagement>
        <NumbersText>{formattedNumbers(data, index + 1)}</NumbersText>
        <ContainerButtons>
          <Button disabled={isDisabledLeft} onClick={() => swipeItem('next')}>
            <Arrow isDisabled={isDisabledLeft} />
          </Button>
          <Button disabled={isDisabledRight} onClick={() => swipeItem('prev')}>
            <Arrow isRight isDisabled={isDisabledRight} />
          </Button>
        </ContainerButtons>
      </ContainerManagement>
    </MainContainer>
  )
}
