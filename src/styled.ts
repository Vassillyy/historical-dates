import styled from 'styled-components'

export const AppContainer = styled.div`
  position: relative;
  height: 100%;
  padding-right: 80px;
  padding-left: 80px;
  padding-top: 215px;
  border-right: 1px solid rgba(66, 86, 122, 0.1);
  border-left: 1px solid rgba(66, 86, 122, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 96px;

  @media (max-width: 320px) {
    padding-top: 0;
    padding-right: 20px;
    padding-left: 20px;
    border-right: none;
    border-left: none;
  }
`
