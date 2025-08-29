import {useRef, useEffect, useState} from 'react'
import {type Swiper as SwiperRef} from 'swiper'
import {gsap} from 'gsap'
import {useAppDispatch, useAppSelector} from '@/store/index'
import {changeIndex} from '@/store/changeIndexSlice'
import {data} from '@/data/data'
import {LargeCircle, WrapperCircleWithNumber, CircleWithNumber} from './styled'

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [rotation, setRotation] = useState<number>(0)
  const [isRotating, setIsRotating] = useState<boolean>(false)
  const swiperRef = useRef<SwiperRef | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const activeRef = useRef<HTMLDivElement | null>(null)

  const dispatch = useAppDispatch()
  const {index} = useAppSelector((state) => state.selection)

  /** Начальный угол вращения, в градусах. Используется для определения стартовой позиции элементов */
  const startAngle: number = -45
  /** Шаг угла между элементами на круге, зависит от количества элементов */
  const angleStep: number = 360 / data.length
  /** Радиус круга, расстояние от центра до каждого элемента */
  const radius: number = 265

  /** Запускает анимацию вращения круга */
  const startRotation = (targetAngle: number) => {
    let currentRotation: number = 0

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        rotation: `+=${targetAngle * angleStep}`,
        duration: 1,
        ease: 'power1.inOut',
        transformOrigin: '50% 50%',
        onUpdate: () => {
          const rotationProperty: number | string = gsap.getProperty(
            containerRef.current,
            'rotation'
          )
          currentRotation =
            typeof rotationProperty === 'number'
              ? rotationProperty
              : parseFloat(rotationProperty || '0')
        },
        onComplete: () => {
          setRotation(currentRotation)
          setIsRotating(false)
        }
      })
    }
  }

  /** Меняет активный индекс элемента и запускает вращение */
  const changeActiveIndex = (index: number) => {
    if (index === activeIndex) return

    let diff: number = index - activeIndex
    if (diff > data.length / 2) diff -= data.length
    else if (diff < -data.length / 2) diff += data.length

    if (swiperRef.current) {
      swiperRef.current.slideTo(index)
    }

    dispatch(changeIndex(index))
    setIsRotating(true)
    startRotation(diff)
    setActiveIndex(index)
  }

  /** Анимация круга */
  useEffect(() => {
    if (isRotating) {
      gsap.to(activeRef.current, {
        scale: 0.4,
        opacity: 1,
        duration: 0.5,
        ease: 'power1.inOut'
      })
    } else {
      gsap.to(activeRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: 'power1.inOut'
      })
    }
  }, [isRotating])

  /** Меняем активный индекс при каких либо изменений из стора */
  useEffect(() => {
    changeActiveIndex(index)
  }, [index])

  return (
    <LargeCircle ref={containerRef}>
      {data.map((item, index) => {
        const angle: number = startAngle - index * angleStep
        const x: number = radius * Math.cos((angle * Math.PI) / 180)
        const y: number = radius * Math.sin((angle * Math.PI) / 180)

        return (
          <WrapperCircleWithNumber
            key={index}
            posX={x}
            posY={y}
            text={item.title}
            isActive={index === activeIndex}
            rotation={rotation}
            isRotating={isRotating}
          >
            <CircleWithNumber
              key={index}
              value={index + 1}
              ref={index === activeIndex ? activeRef : null}
              isActive={index === activeIndex}
              isRotating={isRotating}
              rotation={rotation}
              onClick={() => changeActiveIndex(index)}
            />
          </WrapperCircleWithNumber>
        )
      })}
    </LargeCircle>
  )
}
