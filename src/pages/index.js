import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
// import Restaurant from "../components/Restaurant"
import Restaurant from "../components/Restaurant1"

const IndexPage = () => (
  <Layout>
    <Restaurants>
      <Restaurant
        name="Domino's Pizza"
        image="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&q=60"
        address="PTT, High Grounds, Bengaluru"
        timing="10 am - 10 pm"
        cost="Rs. 200"
        cuisine="North Indian, South Indian"
        rating="4"
      />
    </Restaurants>
  </Layout>
)

// Styled Components

const Restaurants = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-gap: 5rem;
`

export default IndexPage
