import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

const Restaurant = ({
  name,
  image,
  address,
  timing,
  cost,
  cuisine,
  rating,
}) => (
  <RestaurantWrapper>
    <img src={image} alt={name} />
    <div
      css={css`
        ${tw`p-6`}
      `}
    >
      <h4
        css={css`
          ${tw`font-semibold text-lg truncate`}
        `}
      >
        {name}
      </h4>
      <div
        css={css`
          ${tw`text-gray-600 text-sm`}
        `}
      >
        {address}
      </div>
      <div
        css={css`
          ${tw``}
        `}
      >
        {cost}{" "}
        <span
          css={css`
            ${tw`text-gray-600 text-sm`}
          `}
        >
          / 2
        </span>
      </div>
      <div
        css={css`
          ${tw`mt-4 text-teal-600 font-semibold`}
        `}
      >
        {rating}/5 stars
      </div>
    </div>
  </RestaurantWrapper>
)

// Styled Components:
const RestaurantWrapper = styled.div`
  ${tw`
  bg-white
  rounded-lg
  overflow-hidden
  border
`}
`

export default Restaurant
