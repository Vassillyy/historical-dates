import styled, {css} from 'styled-components'

const activeCircle = css`
  width: 56px;
  height: 56px;
  font-size: 20px;
  background-color: white;
  color: #42567a;
  z-index: 3;
  flex-shrink: 0;
  cursor: pointer;
`

export const LargeCircle = styled.div`
  width: 530px;
  height: 530px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.2);
  position: relative;
  flex-shrink: 0;
  z-index: 3;

  @media (max-width: 320px) {
    display: none;
  }
`

export const WrapperCircleWithNumber = styled.div<{
  posX: number
  posY: number
  text: string
  isActive: boolean
  rotation: number
  isRotating: boolean
}>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: calc(50% + ${(props) => props.posX}px);
  top: calc(50% + ${(props) => props.posY}px);
  transform: translate(-50%, -50%) rotate(${(props) => -props.rotation}deg);
  flex-shrink: 0;

  &::after {
    content: '${(props) => props.text}';
    transform: translate(-50%, -50%);
    display: ${(props) =>
      props.isActive && !props.isRotating ? 'block' : 'none'};
    position: absolute;
    bottom: 40px;
    left: 60px;
    font-size: 20px;
    color: #42567a;
  }

  &:hover::after {
    display: ${(props) => (!props.isRotating ? 'block' : 'none')};
  }

  @media (max-width: 320px) {
    display: none;
  }
`

export const CircleWithNumber = styled.div<{
  value: number
  isActive: boolean
  isRotating: boolean
  rotation: number
}>`
  border-radius: 50%;
  border: 1px solid rgb(66, 86, 122);
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: rgb(66, 86, 122);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  z-index: 3;

  &::after {
    content: '${(props) => props.value}';
    font-style: italic;
    color: #42567a;
    font-weight: normal;
    display: ${(props) =>
      props.isActive && !props.isRotating ? 'block' : 'none'};
  }

  &:hover::after {
    display: ${(props) => (!props.isRotating ? 'block' : 'none')};
  }

  ${WrapperCircleWithNumber}:hover & {
    ${activeCircle}
  }

  ${(props) =>
    props.isActive &&
    `
    ${activeCircle}
  `}
`
