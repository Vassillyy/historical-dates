import styled from 'styled-components'

export const ComponentTitle = styled.div`
  position: absolute;
  top: 170px;
  left: 0;
  padding-left: 78px;
  border-left: 5px solid transparent;
  border-image: linear-gradient(to bottom, #3877ee 0%, #ef5da8 100%) 1;
  color: #42567a;
  font-weight: bold;
  font-size: 56px;

  @media (max-width: 320px) {
    top: 59px;
    left: 20px;
    border-left: none;
    padding-left: 0;
    font-size: 20px;
  }
`
