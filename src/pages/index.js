import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import axios from "axios"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Restaurant from "../components/Restaurant"
import restaurants1 from "../tempData/bangalore"

// TODO: Add stars/rating from API
// TODO: Add pagination after some no. of restaurants

const IndexPage = ({ data }) => {
  const [restaurants, setRestaurants] = useState([])

  // useEffect(() => {
  //   const fetchData = async city => {
  //     try {
  //       const result = await axios(
  //         `${process.env.GATSBY_API_URL}/restaurants/${city}`
  //       )
  //       // setData(result.data);
  //       console.log(result.data.restaurants)
  //       setRestaurants(result.data.restaurants)
  //     } catch (e) {
  //       console.error("Error in getRestaurants", e)
  //     }
  //   }
  //   fetchData("bangalore")
  // }, [])

  useEffect(() => {
    setRestaurants(data.allChennaiJson.nodes)
  }, [data.allChennaiJson.nodes])

  console.log(data.allChennaiJson.nodes)

  return (
    <Layout>
      <Restaurants>
        {restaurants.map((restaurant, id) => (
          <Restaurant
            key={id}
            name={restaurant.name}
            image={restaurant.image}
            address={restaurant.address}
            timing={restaurant.timing}
            cost={restaurant.cost}
            cuisine={restaurant.cuisine}
            rating="4"
          />
        ))}
      </Restaurants>
    </Layout>
  )
}

// Styled Components

const Restaurants = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-gap: 5rem;
`

export const query = graphql`
  {
    allChennaiJson {
      nodes {
        name
        address
        image
        cuisine
        cost
        timing
      }
    }
  }
`

export default IndexPage
