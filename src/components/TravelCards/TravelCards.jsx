import styled from 'styled-components'

const TravelCard = styled.div`
  max-width: 470px;

  padding-bottom: 18px;
  border-bottom: 1px solid #f5f5f5;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 19px;
`
const TravelImg = styled.div`
  width: 128px;
  height: 168px;

  display: flex;
  justify-content: center;

  & > .card--img {
    max-width: 100%;
    border-radius: 5px;
  }
`
const TravelContent = styled.div`
  font-size: 10px;

  & > img {
    width: 10px;
  }

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > .travelLocation {
    letter-spacing: 0.17em;
    margin-inline: 4px;
  }

  & > div > .gmapsLink {
    color: #918e9b;
    text-decoration: underline;
  }

  & > h1 {
    font-size: 25px;
    margin-top: 4px;
  }

  & > h4 {
    margin-top: 7px;
  }

  & > p {
    line-height: 150%;
    width: 326px;
    margin-top: 9px;
  }
`

export const TravelCards = props => {
  return (
    <TravelCard>
      <TravelImg>
        <img src={props.imageUrl} alt='' className='card--img' />
      </TravelImg>
      <TravelContent>
        <div>
          <img src='/public/images/map-pointer.png' alt='' />
          <span className='travelLocation'>{props.title}</span>
          <span className='gmapsLink'>
            <a
              href={props.googleMapsUrl}
              target={'_blank'}>
              View on Google Maps
            </a>
          </span>
        </div>
        <h1>{props.location}</h1>
        <h4>
          {props.startDate} - {props.endDate}
        </h4>
        <p>{props.description}</p>
      </TravelContent>
    </TravelCard>
  )
}
