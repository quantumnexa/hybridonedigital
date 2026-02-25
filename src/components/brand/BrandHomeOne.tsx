'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


type DataType = StaticImageData[];
import brand_thumb_1 from "@/assets/img/brand-1-1.png"
import brand_thumb_2 from "@/assets/img/brand-1-2.png"
import brand_thumb_3 from "@/assets/img/brand-1-3.png"
import brand_thumb_4 from "@/assets/img/brand-1-4.png"
import brand_thumb_5 from "@/assets/img/brand-1-5.png"
import brand_thumb_6 from "@/assets/img/brand-1-6.png"
const brand_data: DataType = [
  brand_thumb_1,
  brand_thumb_2,
  brand_thumb_3,
  brand_thumb_4,
  brand_thumb_5,
  brand_thumb_6,
]

import brand_thumb_7 from "@/assets/img/brand-1-7.png"
import brand_thumb_8 from "@/assets/img/brand-1-8.png"
import brand_thumb_9 from "@/assets/img/brand-1-9.png"
import brand_thumb_10 from "@/assets/img/brand-1-10.png"
import brand_thumb_11 from "@/assets/img/brand-1-11.png"
import brand_thumb_12 from "@/assets/img/brand-1-12.png"
// import brand_thumb_1 from "@/assets/img/brand-1-1.png"
// import brand_thumb_2 from "@/assets/img/brand-1-2.png"
// import brand_thumb_3 from "@/assets/img/brand-1-3.png"
// import brand_thumb_4 from "@/assets/img/brand-1-4.png"
// import brand_thumb_5 from "@/assets/img/brand-1-5.png"
// import brand_thumb_6 from "@/assets/img/brand-1-6.png"
// import brand_thumb_7 from "@/assets/img/brand-1-7.png"
// import brand_thumb_8 from "@/assets/img/brand-1-8.png"
// import brand_thumb_9 from "@/assets/img/brand-1-9.png"
// import brand_thumb_10 from "@/assets/img/brand-1-10.png"
// import brand_thumb_11 from "@/assets/img/brand-1-11.png"
// import brand_thumb_12 from "@/assets/img/brand-1-12.png"


const brand_thumb_data: DataType = [
  brand_thumb_7,
  brand_thumb_8,
  brand_thumb_9,
  brand_thumb_10,
  brand_thumb_11,
  brand_thumb_12,
]


const BrandHomeOne = ({ style_2 }: any) => {
  return (
    <> 
      
      {style_2 ?
        <>
          <div className="cs_height_150 cs_height_lg_60"></div>
          <p className="text-center cs_font_18 cs_normal">
            130+ Our Client & Partner We Are Working Together
          </p>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </>
        :
        <div className="cs_height_140 cs_height_lg_70"></div>
      }
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_2">
          <div className="cs_section_heading_text">
            <div className="cs_section_subtitle anim_div_ShowZoom">
              Clients & Partners
            </div>
            <h2 className="cs_section_title anim_heading_title">
              Brands We’ve Worked With
            </h2>
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_60"></div>
      </div>
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_45 cs_height_lg_45"></div>
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_60"></div>
      <div className="container">
        <div className="text-center cs_btn_anim">
          <Link href="/contact" className="cs_btn cs_style_1">
            <span>Contact Us</span>
            <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z" fill="currentColor" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="cs_height_140 cs_height_lg_70"></div>
    </>
  );
};

export default BrandHomeOne;
