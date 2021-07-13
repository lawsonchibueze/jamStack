/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./header"
import Footer from "./footer"

const useStyles = makeStyles(theme => ({
  spacer: {
    marginBottom: "5rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2rem",
    },
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query GetCategories {
      allStrapiCategory {
        edges {
          node {
            name
            strapiId
          }
        }
      }
    }
  `)

  return (
    <>
      <Header categories={data.allStrapiCategory.edges} />
      <div style = {{marginBottom: "10rem"}} />
      <main >{children}</main>
      <Footer />
    </>
  )
}

export default Layout

// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.com/docs/use-static-query/
//  */
// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { makeStyles } from "@material-ui/core/styles"

// import Header from "./header"
// import Footer from "./footer"

// const useStyles = makeStyles(theme => ({
//   spacer: {
//     marginBottom: "5rem",
//     [theme.breakpoints.down("md")]: {
//       marginBottom: "2rem",
//     },
//   },
// }))

// const Layout = ({ children }) => {
// 	const classes = useStyles()
// 	const data = useStaticQuery(graphql`
// 		query MyQuery {
// 			allStrapiCategory {
// 				edges {
// 					node {
// 						name
// 						strapiId
// 					}
// 				}
// 			}
// 		}
// 	`);
	

// 	return (
// 		<div>
// 			{/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
// 			<Header categories={data.allStrapiCategory.edges} />
// 			<div style={ {marginBottom:"10rem"}} />
			
// 				<main>{children}</main>
				
			
// 			<Footer />
// 		</div>
// 	);
// };

// // Layout.propTypes = {
// // 	children: PropTypes.node.isRequired
// // };

// export default Layout;
