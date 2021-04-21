import React from "react"
import { graphql, PageProps } from "gatsby"
import { PostQuery } from "../../graphql-types"
import { Layout } from "../components/layout"
import Seo from "../components/seo"
import * as S from "../components/post/styled"

const BlogPost: React.FC<PageProps<PostQuery>> = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { date, description, title },
      timeToRead,
    },
  },
}) => (
  <Layout>
    <Seo title={title} />
    <S.PostHeader>
      <S.PostDate>
        {date} • {timeToRead} min de leitura
      </S.PostDate>
      <S.PostTitle>{title}</S.PostTitle>
      <S.PostDescription>{description}</S.PostDescription>
    </S.PostHeader>
    <S.MainContent>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </S.MainContent>
  </Layout>
)

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
