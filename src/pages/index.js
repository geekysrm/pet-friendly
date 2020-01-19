import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Restaurants>
      <div>
        <img src="https://picsum.photos/200" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="" />
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
