
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo.svg';
import Link from 'next/link';

const BannerAbout = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div> 
      <section
      >
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_text">
            <div className="cs_section_subtitle">About Us</div>
            <h2 className="cs_section_title anim_text_writting">
              Strategy, Creative & Engineering <br /> Unified to Build, Market & Scale <br /> Measurable Growth
            </h2>
            <div className="cs_btn_anim" style={{ marginTop: '28px' }}>
              <Link href="/contact" className="cs_btn cs_style_1">
                <span>Contact Us</span>
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z" fill="currentColor" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="cs_section_heading_right">
            <div className="cs_animated_badge">
              <div className="rounded_text rotating">
                <svg viewBox="0 0 200 200">
                  <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                    transform="translate(100,100)" fill="none" strokeWidth="0"></path>
                  <g fontSize="22.1px">
                    <text textAnchor="start">
                      <textPath className="coloring" href="#textPath" startOffset="0%">
                        Hybrid One Digital-Digital Marketing Agency-&nbsp;
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
              <div className="position-absolute cs_ceneter_text">
                <Image src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default BannerAbout;
