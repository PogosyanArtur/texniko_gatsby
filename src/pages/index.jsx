import React from 'react';
import withRoot from '../withRoot';
import MainLayout from 'layout/MainLayout'
import PageHome from 'components/PageHome'

const Home = () => {
  return (
    <MainLayout>
      <PageHome.Banner/>
      <PageHome.ProductList/>
      <PageHome.Offer/>
      <PageHome.Gallery/>
      <PageHome.WhyChooseUs/>
      <PageHome.Massage/> 
    </MainLayout>
  )
}

export default withRoot(Home)


