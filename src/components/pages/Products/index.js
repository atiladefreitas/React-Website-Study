import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo } from './data';


function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;
