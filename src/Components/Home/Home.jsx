import React from 'react';
import './Home.css';
import Nav from '../Nav/Nav';
import Carosoual from '../Crasoual/Carosoual';
import HomItem from './HomItem';
import HomeCard from './HomeCard';
import Footer from '../Footer/Footer';
export default function Home() {
  return (
    <>
    <Nav/>
    <Carosoual/>
    <HomItem/>
    <HomeCard/>
    <Footer/>

    </>
  )
}
