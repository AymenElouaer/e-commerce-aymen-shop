import React from 'react'
import product from '../sanity_shop/schemas/product'
import { Cart, Product, Footer, FooterBanner, HeroBanner, Layout, NavBar } from '../components'
import { client } from '../lib/client';

const Home = ({ products, bannerData, footerBanner }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>top products</p>
      </div>
      <div className='products-container'>
        {products?.map(
          (product) => <Product key={product._id} product={product} />
        )}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const banner = '*[_type == "banner"]';
  const bannerData = await client.fetch(banner);

  return {
    props: { products, bannerData }
  }
}
export default Home
