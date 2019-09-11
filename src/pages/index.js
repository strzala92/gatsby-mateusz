import React, { Component }  from "react"

import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

class IndexPage extends Component {
  render(){
    const data = this.props.data;
    return(
  <Layout>
   <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div  key={node.slug}>
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
  </Layout>
    )
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query {    
      allWordpressPost(sort: {fields: [date]}) {
        edges {
          node {
            title
            excerpt
            slug
          }
        }
      }
    }
`