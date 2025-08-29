import styled from 'styled-components'

export const HorizontalLine = styled.div<{from: number; to: number}>`
  position: absolute;
  top: 480px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(66, 86, 122, 0.1);
  transform: translateY(-50%);
  z-index: 1;
  font-weight: bold;

  &::before,
  &::after {
    content: '';
    position: absolute;
    font-size: 200px;
    line-height: 1;
    top: -100px;
    pointer-events: none;
    z-index: 1;
  }

  &::before {
    content: '${(props) => props.from}';
    right: calc(50% + 40px);
    color: #ef5da8;
  }

  &::after {
    content: '${(props) => props.to}';
    left: calc(50% + 40px);
    color: #5d5fef;
  }

  @media (max-width: 320px) {
    background-color: #c7cdd9;
    top: 280px;
    margin-left: 20px;
    margin-right: 20px;
    max-width: 280px;

    &::before {
      right: calc(5px);
      font-size: 56px;
    }

    &::after {
      left: calc(5px);
      font-size: 56px;
    }
  }
`

export const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
  background-color: rgba(66, 86, 122, 0.1);
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: 320px) {
    display: none;
  }
`
