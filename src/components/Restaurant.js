import React from "react"
import tw from "tailwind.macro"
import styled from "@emotion/styled"

import MdStar from "react-ionicons/lib/MdStar"
import MdPin from "react-ionicons/lib/MdPin"

// TODO: Add star for half ratings, add timing data

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
    <img css={tw`w-full max-h-full`} src={image} alt={name} />
    <div css={tw`p-6`}>
      <h4 css={tw`font-semibold text-lg leading-snug truncate`}>{name}</h4>
      <div css={tw`text-gray-600 text-sm`}>
        <div css={tw`flex`}>
          {/* <MdPin css={tw`-ml-1 h-5 w-5 fill-current text-gray-600`} /> */}
          {address}
        </div>
      </div>
      <div css={tw``}>
        {cost} <span css={tw`text-gray-600 text-sm`}>/ 2</span>
      </div>
      <div css={tw`flex items-end justify-between`}>
        <div css={tw`w-7/12 text-gray-600 font-semibold truncate`}>
          {cuisine}
        </div>
        <div css={tw`flex mt-2`}>
          {Array.apply(null, { length: 5 }).map((e, i) => {
            const filled = i < rating
            let style
            if (filled) {
              style = tw`h-5 w-5 fill-current text-teal-500`
            } else style = tw`h-5 w-5 fill-current text-gray-400`
            return <MdStar key={i} css={style} />
          })}
        </div>
      </div>
    </div>
  </RestaurantWrapper>
)

// Styled components

// const RestaurantWrapper = tw.div`
//   bg-white
//   rounded-lg
//   overflow-hidden
//   border
// `

const RestaurantWrapper = styled.div`
  ${tw`bg-white
  rounded-lg
  overflow-hidden
  border`}
  img {
    max-height: 265px;
    object-fit: cover;
    object-position: center;
  }
`

export default Restaurant
