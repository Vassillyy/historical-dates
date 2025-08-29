import {useState, useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import {useAppSelector} from '@/store/index'
import {HorizontalLine, VerticalLine} from './styled'
import {getElements} from './model/getElements'

export const Dates = () => {
  const {index} = useAppSelector((state) => state.selection)
  const {firstElement, lastElement} = getElements(index)

  const prevDisplayedDateFromRef = useRef<number>(firstElement.date)
  const [displayedDateFrom, setDisplayedDateFrom] = useState<number>(
    firstElement.date
  )

  const prevDisplayedDateToRef = useRef<number>(lastElement.date)
  const [displayedDateTo, setDisplayedDateTo] = useState<number>(
    lastElement.date
  )

  /** Анимирует изменение дат */
  const animateDate = () => {
    const startDateFrom: number = prevDisplayedDateFromRef.current
    const endDateFrom: number = firstElement.date

    gsap.to(
      {d: startDateFrom},
      {
        duration: 1,
        d: endDateFrom,
        roundProps: 'd',
        ease: 'linear',
        onUpdate: function () {
          setDisplayedDateFrom(Math.round(this.targets()[0].d))
        },
        onComplete: () => {
          prevDisplayedDateFromRef.current = endDateFrom
        }
      }
    )

    const startDateTo: number = prevDisplayedDateToRef.current
    const endDateTo: number = lastElement.date

    gsap.to(
      {d: startDateTo},
      {
        duration: 1,
        d: endDateTo,
        roundProps: 'd',
        ease: 'linear',
        onUpdate: function () {
          setDisplayedDateTo(Math.round(this.targets()[0].d))
        },
        onComplete: () => {
          prevDisplayedDateToRef.current = endDateTo
        }
      }
    )
  }

  useEffect(() => {
    animateDate()
  }, [index])

  return (
    <>
      <HorizontalLine from={displayedDateFrom} to={displayedDateTo} />
      <VerticalLine />
    </>
  )
}
