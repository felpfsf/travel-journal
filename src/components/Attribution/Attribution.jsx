import styled from "styled-components"

const AttributionWrapper = styled.div`
font-size: 12px;
margin-block: 16px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 4px;
`

export const Attribution = () => {
  return (
    <AttributionWrapper>
      <span>Coded by <a href="https://github.com/felpfsf" target="_blank" rel="noopener noreferrer">Felipe F.</a></span>
      <span>Solo Project 2 - Freecodecamp.org React Course</span>
    </AttributionWrapper>
  )
}
