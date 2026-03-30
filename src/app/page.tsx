
'use client'

import React, { useState } from 'react';
import HeaderRounded from '@/layouts/headers/HeaderRounded';
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
import Link from 'next/link';


// export const metadata = {
//   title: "Vixan - Digital Agency Next js Template",
// };


const index = () => { 

  return (
    <Wrapper>
      <HeaderRounded />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div>
              <section>
              <div className="cs_hero cs_style1 cs_center cs_parallax cs_white" style={{ marginTop: '100px', minHeight: 'calc(100vh - 40px)' }}>
                <div
                  className="cs_hero_bg cs_bg cs_parallax_bg cs_hero_bg_full_width"
                  style={{
                    backgroundImage: 'url(/assets/img/hero-img.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
                <div className="container">
                  <div className="cs_hero_text" style={{ color: 'var(--common-color-white)' }}>
                   
                    <div className="cs_height_20 cs_height_lg_20"></div>
                    <div className="cs_section_heading cs_style_1">
                      <div className="cs_section_heading_text">
                        <div className="cs_section_subtitle" style={{ color: 'var(--common-color-white)' }}>Hybrid One Digital</div>
                      </div>
                    </div>
                    <div className="cs_height_20 cs_height_lg_20"></div>
                    <h1 className="cs_hero_title"  style={{ color: 'var(--common-color-white)' }}>Scale Your <span style={{ color: 'var(--accent-color)' }}> Business </span> With <span style={{ color: 'var(--accent-color)' }}> Data-Driven</span> Marketing.</h1>
                    <div className="cs_height_40 cs_height_lg_30"></div>
                    <div className="cs_hero_btn_wrap" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <div className="cs_round_btn_wrap">
                        <Link href="/portfolio" className="cs_hero_btn cs_round_btn btn-item">
                          <span></span>
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
            
            <div className="cs_height_100"></div>            
            <FunFactHomeOne />                
            {/* <MarqueeAreaHomeOne /> */}
            
            <AboutHomeOne />
            
            <ServiceHomeOne />
           {/* <PortfolioHomeOne />
           <AwardsHomeOne /> */}
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
