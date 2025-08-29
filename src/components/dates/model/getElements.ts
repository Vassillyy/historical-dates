import type {Item} from '@/data/DataType'
import {data} from '@/data/data'

/** Получаем первый и последний элемент с датами */
export const getElements = (index: number) => {
  const activeItem = data[index]
  const firstElement: Item = activeItem.items.at(1)!
  const lastElement: Item = activeItem.items.at(-1)!

  return {firstElement, lastElement, index}
}
