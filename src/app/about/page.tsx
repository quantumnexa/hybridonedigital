
'use client'

import React, { useState } from 'react';
import About from '@/components/about/About';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import BannerAbout from '@/components/brand/BannerAbout';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import Gellary from '@/components/gellary/Gellary';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import Testimonial from '@/components/testimonial/Testimonial';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne'; 
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Service from '@/components/service/Service';

// export const metadata = {
//   title: "About Vixan - Digital Agency Next js Template",
// };

const index = () => { 

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BannerAbout />
            <div className="cs_height_150 cs_height_lg_42"></div>
            {/* <VideoHomeOne style_2={true}  /> */}
            <FunFactHomeOne />
            <About />
            <BrandHomeOne />
            {/* <TeamHomeTwo style_2={true} style_3={true} />
            <AwardsHomeOne style_2={true} /> */}
             <Service />
           <AboutHomeFour />
            {/* <Gellary style_2={true} /> */}
            
            
          </main>
          <FooterOne />
        </div>
      </div>
 
    </Wrapper>
  );
};

export default index;
