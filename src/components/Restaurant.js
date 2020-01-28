import React from "react"
import tw from "tailwind.macro"
import styled from "@emotion/styled"

import MdStar from "react-ionicons/lib/MdStar"
import MdOpen from "react-ionicons/lib/MdOpen"

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
      <div css={tw`truncate text-gray-600 hover:text-blue-600`}>
        <a
          href={`https://www.google.com/maps/search/${name} ${address}?hl=en&source=opensearch`}
          target="_blank"
          rel="noopener noreferrer"
          css={tw`text-gray-600 text-sm hover:text-blue-600`}
        >
          {address}
        </a>
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
    height: 265px;
    object-fit: cover;
    object-position: center;
  }
`

export default Restaurant
