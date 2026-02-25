
'use client'

import React, { useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
import MarqueeAreaHomeOne from '@/components/brand/MarqueeAreaHomeOne';
import PortfolioHomeOne from '@/components/portfolio/PortfolioHomeOne';
import Testimonial from '@/components/testimonial/Testimonial';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import SubscribeHomeOne from '@/components/subscribe/SubscribeHomeOne';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Wrapper from '@/layouts/Wrapper'; 
import AboutUs from '@/components/about/AboutUs';
import FaqArea from '@/components/faq/FaqArea';


// export const metadata = {
//   title: "Vixan - Digital Agency Next js Template",
// };


const index = () => { 

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div style={{ borderBottom: '2px solid var(--accent-color)' }}>
              <HeroHomeOne />
            </div>
            <div className="cs_height_100"></div>            
            <FunFactHomeOne />                
            {/* <MarqueeAreaHomeOne /> */}
            
            <AboutHomeOne />
            
            <ServiceHomeOne />
            <PortfolioHomeOne />
            {/* <AwardsHomeOne /> */}
            <Testimonial />
                 
            <FaqArea compact={true} />
            
            <BlogHomeOne />
             <AboutUs style_2={true} />
            <BrandHomeOne style_2={false} />
          </main>
          <FooterOne />
        </div>
      </div> 
    </Wrapper>
  );
};

export default index;
