import React from "react"
import tw from "tailwind.macro"

import MdStar from "react-ionicons/lib/MdStar"

// TODO: Add star for half ratings

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
    <div css={tw`p-6`}>
      <h4 css={tw`font-semibold text-lg leading-tight truncate`}>{name}</h4>
      <div css={tw`text-gray-600 text-sm`}>{address}</div>
      <div css={tw``}>
        {cost} <span css={tw`text-gray-600 text-sm`}>/ 2</span>
      </div>
      <div css={tw`flex mt-4`}>
        {Array.apply(null, { length: 5 }).map((e, i) => {
          const filled = i < rating
          let style
          console.log(filled)
          if (filled) {
            style = tw`h-5 w-5 fill-current text-teal-500`
          } else style = tw`h-5 w-5 fill-current text-gray-300`
          return <MdStar key={i} css={style} />
        })}
        {/* <span css={tw`text-teal-600 font-semibold`}>{rating}/5 stars</span> */}
      </div>
    </div>
  </RestaurantWrapper>
)

// Styled components

const RestaurantWrapper = tw.div`
  bg-white
  rounded-lg
  overflow-hidden
  border
`

export default Restaurant
