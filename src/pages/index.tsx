import * as React from "react"
import { Layout } from "../components/layout"
import { PostItem } from "../components/PostItem"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { PostListQuery } from "../../graphql-types"

const PostList = graphql`
  query PostList {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery<PostListQuery>(PostList)
  const posts = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(post => (
        <PostItem
          slug="/about/"
          category={post.node.frontmatter.category}
          date={post.node.frontmatter.date}
          timeToRead={post.node.timeToRead}
          title={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          background={post.node.frontmatter.background}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
