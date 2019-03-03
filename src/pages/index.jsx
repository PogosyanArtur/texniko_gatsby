import React from 'react';
import withRoot from '../withRoot';
import MainLayout from 'layout/MainLayout'
import PageHome from 'components/PageHome'
import Gallery from 'components/Gallery'

const Home = () => {
  return (
    <MainLayout>
      <PageHome.Banner/>
      <PageHome.ProductList/>
      <PageHome.Offer/>
      <Gallery/>
      <PageHome.WhyChooseUs/>
      <PageHome.Massage/> 
    </MainLayout>
  )
}

export default withRoot(Home)


