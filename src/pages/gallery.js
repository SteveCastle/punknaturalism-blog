import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image"
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container content">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h1 className="has-text-weight-bold is-size-2">
                    Photos
                  </h1>
                </div>
                {posts.map(({ node: post }) => (
                  <div className="content" key={post.id}>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      <Img fluid={post.frontmatter.previewImage.childImageSharp.fluid} objectFit="cover"/>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query GalleryQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "image-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            previewImage {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
              }
            }
            }
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
