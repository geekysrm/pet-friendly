import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Restaurant from "../components/Restaurant"

const IndexPage = () => (
  <Layout>
    <Restaurants>
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
    </Restaurants>
  </Layout>
)

// Styled Components

const Restaurants = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 5rem;
`

export default IndexPage
