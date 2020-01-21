import React from "react"
// import styled from "styled-components"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

// TODO: Convert to use gatsby-image

const Restaurant = ({ name, image, address, timing, cost, cuisine }) => (
  <RestaurantWrapper>
    <ImageWrapper>
      <img src={image} alt="restaurant" />
    </ImageWrapper>
    <RestaurantDetails>
      <h2>{name}</h2>
      <div className="address">{address}</div>
      <div className="timing">{timing}</div>
      <div className="cost">{cost}</div>
      <div className="cuisine">{cuisine}</div>
    </RestaurantDetails>
    {/* <Button>Submit</Button> */}
  </RestaurantWrapper>
)

// Styled Components
const RestaurantWrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  position: relative;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 200px;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`

// const Button = tw.button`
//    bg-blue-700 text-white p-2 rounded
// `

const RestaurantDetails = styled.div`
  h2 {
    padding-left: 8px;
  }
`

export default Restaurant
