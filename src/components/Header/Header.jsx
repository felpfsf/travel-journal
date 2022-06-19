import styled from 'styled-components'

const HeaderContainer = styled.div`
  background-color: #f55a5a;

  height: 55px;
  width: 550px;

  margin-bottom: 100px;

  border-radius: 10px 10px 0 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  & > p {
    color: #fff;
  }

`

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={`/public/images/logo.png`} alt='' />
      <p>my travel journal</p>
    </HeaderContainer>
  )
}
