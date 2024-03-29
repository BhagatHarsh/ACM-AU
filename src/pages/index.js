import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/carousel"
import Navbar from "../components/navbar"
import CardsUI from "../components/cardsUI"
import Footer from "../components/footer"
import { inject } from '@vercel/analytics';
import About from "../components/About"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const siteUrl = data.site.siteMetadata.siteUrl
  inject();
  return (
    <Layout>
      <Navbar />
      <Carousel />
    
      <div style={{ height: '30px', background: '#f8f8f8' }}></div>
      <CardsUI siteUrl={siteUrl} />
      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage