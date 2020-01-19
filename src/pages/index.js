import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Restaurant from "../components/Restaurant"

const IndexPage = () => (
  <Layout>
    <Restaurants>
      <div>
        <img src="https://picsum.photos/200" alt="" />
        <Restaurant />
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="" />
        <Restaurant />
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="" />
        <Restaurant />
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="" />
        <Restaurant />
      </div>
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
