import React from 'react';
import withRoot from '../withRoot';
import MainLayout from '../layout/MainLayout'
import Banner from '../components/PageHome/Banner'
import ProductList from '../components/PageHome/ProductList'
import Offer from '../components/PageHome/Offer'
import Gallery from '../components/PageHome/Gallery'
import WhyChooseUS from '../components/PageHome/WhyChooseUS'
import Massage from '../components/PageHome/Massage'


const Home = () => {
  return (
    <MainLayout>
      <Banner/>
      <ProductList/>
      <Offer/>
      <Gallery/>
      <WhyChooseUS/>
      <Massage/> 
    </MainLayout>
  )
}

export default withRoot(Home)


