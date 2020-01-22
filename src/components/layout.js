/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "normalize.css"
// import styled, { createGlobalStyle } from "styled-components"
// import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import tw from "tailwind.macro"

// Add Header

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          html {
            -webkit-font-smoothing: antialiased;
            background-color: lightgray;
            color: #1a202c;
          }
        `}
      />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// // Styled components

// const GlobalStyle = styled.Global`
//   @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");
//   html {
//     --purple: #b066ff;
//     --blue: #203447;
//     --lightblue: #1f4662;
//     --blue2: #1c2f40;
//     --yellow: #ffc600;
//     --pink: #eb4471;
//     --vape: #d7d7d7;
//     /* background: var(--blue); */
//     /* color: var(--vape); */
//     font-family: "Open Sans", sans-serif;
//     font-weight: 100;
//     font-size: 10px;
//   }
//   body {
//     font-size: 2rem;
//     overflow-y: scroll;
//   }
// `

export default Layout
