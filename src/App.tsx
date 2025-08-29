import {Title, Slider, Dates, Content} from '@/components'
import {GlobalStyles} from './GlobalStyles'
import {AppContainer} from './styled'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Title />
        <Dates />
        <Slider />
        <Content />
      </AppContainer>
    </>
  )
}
