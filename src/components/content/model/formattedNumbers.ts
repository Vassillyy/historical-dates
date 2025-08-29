import type {DataType} from '@/data/DataType'

/** Форматируем числа */
export const formattedNumbers = (data: DataType[], index: number): string => {
  const formattedIndex: string = index < 9 ? `0${index}` : `${index}`
  const totalCount: string =
    data.length < 9 ? `0${data.length}` : `${data.length}`

  return `${formattedIndex}/${totalCount}`
}
