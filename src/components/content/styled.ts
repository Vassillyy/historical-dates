import styled from 'styled-components'
import {Swiper} from 'swiper/react'

export const MainContainer = styled.div`
  height: 135px;
  width: 100%;
  position: relative;
  margin-bottom: 104px;
`

export const Slide = styled.div`
  height: 100%;
  overflow: hidden;
  width: fit-content;
  display: flex;
  gap: 80px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 90px;
  min-width: 320px;
  max-width: 400px;
  flex-shrink: 0;
`

export const Date = styled.div`
  font-size: 25px;
  color: #3877ee;
`

export const Description = styled.div`
  font-size: 20px;
  color: #42567a;
`

export const SwiperComponent = styled(Swiper)`
  height: 100%;
  width: 100%;
`

export const ContainerManagement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: -144px;
`

export const NumbersText = styled.div`
  font-size: 14px;
  color: #42567a;
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
`

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);
  background-color: transparent;
  position: relative;
  cursor: pointer;

  &:disabled {
    border: 1px solid rgba(66, 86, 122, 0.2);
  }
`
export const SmallButton = styled.button<{
  isRight?: boolean
  isVisibility: boolean
}>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  background-color: transparent;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  visibility: ${(props) => (props.isVisibility ? 'visible' : 'hidden')};

  ${(props) =>
    props.isRight
      ? `
    right: -30px;
    transform: translate(50%, -50%);
  `
      : `
    left: -30px;
    transform: translate(-50%, -50%);
  `}
`
