import React from "react"
import styled from "styled-components"

// TODO: Convert to use gatsby-image

const Restaurant = () => (
  <RestaurantWrapper>
    <ImageWrapper>
      <img
        src="https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
        alt="restaurant"
      />
    </ImageWrapper>
    <h2>Domino's pizza</h2>
    <div>PTT, High Grounds, Vasanth Nagar</div>
    <div>10 am - 10pm</div>
    <div>Rs. 200 for 2</div>
    <div>North Indian, Chinese, South Indian</div>
  </RestaurantWrapper>
)

// Styled Components
const RestaurantWrapper = styled.div`
  border: 1px solid black;
  /* background: linear-gradient(135deg, #ce9ffc 0%, #7367f0 100%); */
`

const ImageWrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;

  img {
    height: 200px;
    width: 400px;
    /* text-align: center; */
    object-fit: cover;
  }
`

export default Restaurant
