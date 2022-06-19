// Styles
import styled from 'styled-components'
// Global Styles
import { GlobalStyle } from './styles/globalStyle'
// Components
import { Attribution } from './components/Attribution/Attribution'
import { Header } from './components/Header/Header'
import { TravelCards } from './components/TravelCards/TravelCards'
// Data
import travelData from './data/data'

const MainWrapper = styled.div`
  margin-block: 5vh;
  margin-inline: auto;
  max-width: 550px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TravelCardsWrapper = styled.div`
  height: 65vh;

  display: flex;
  flex-direction: column;
  gap: 18px;
  
  overflow-y: auto;
  scrollbar-gutter: stable both-edges;
`

function App() {
  const travelCardsElem = travelData.map(tcardData => {
    return <TravelCards key={tcardData.id} {...tcardData} />
  })
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Header />
        <TravelCardsWrapper>{travelCardsElem}</TravelCardsWrapper>
        <Attribution />
      </MainWrapper>
    </>
  )
}

export default App
