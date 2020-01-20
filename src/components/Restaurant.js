import React from "react"
import styled from "styled-components"

// TODO: Convert to use gatsby-image

const Restaurant = ({ name, image, address, timing, cost, cuisine }) => (
  <RestaurantWrapper>
    <ImageWrapper>
      <img src={image} alt="restaurant" />
    </ImageWrapper>
    <RestaurantDetails>
      <h2>{name}</h2>
      <div>{address}</div>
      <div>{timing}</div>
      <div>{cost}</div>
      <div>{cuisine}</div>
    </RestaurantDetails>
  </RestaurantWrapper>
)

// Styled Components
const RestaurantWrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
`

const ImageWrapper = styled.div`
  /* padding: 5px; */
  display: flex;
  justify-content: center;

  img {
    height: 200px;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`

const RestaurantDetails = styled.div``

export default Restaurant
