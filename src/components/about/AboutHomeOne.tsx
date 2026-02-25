'use client'
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}[]

const about_slider: DataType[] = [
  {
    img: "/assets/img/about-1.jpeg",
    sub_title: "Predictable Growth",
    title: `We Turn Marketing Into Revenue.`,
    des: `Most businesses spend thousands on ads, social media, and campaigns yet results stay unpredictable. We help companies move beyond random tactics by building structured, revenue-focused marketing systems. Every decision is data-driven, every strategy is designed to scale, and every dollar you spend is aimed at measurable growth. We don’t just generate traffic, we turn it into real, predictable revenue for your business.`,
  },
  {
    img: "/assets/img/about-5.jpeg",
    sub_title: "Convert Leads",
    title: `Traffic Means Nothing Without Conversion.`,
    des: `Getting visitors to your website is easy. Turning them into paying customers is the challenge. That’s where we come in. By combining high-converting funnels, compelling creatives, and backend automation like email and SMS follow-ups, we create a seamless system that converts prospects at every stage of the buyer journey. With us, your marketing spend stops being wasted  and starts producing consistent, measurable returns.`,
  },
  {
    img: "/assets/img/about-4.jpeg",
    sub_title: "Measurable Results",
    title: `Built to Scale. Designed to Perform.`,
    des: `Growth isn’t luck. It’s strategy, testing, and execution. Every system we design is optimized for performance, from KPIs and reporting to continuous conversion optimization. Whether you’re a local business or a growing eCommerce brand, our focus is on building scalable systems that deliver results month after month. No fluff, no vanity metrics just growth you can measure and rely on.`,
  },
]

const AboutHomeOne = () => {
  return (
    <>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        pagination={{
          el: ".cs_pagination",
          clickable: true,
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> 
             ${' / '}
             <span class="${totalClass}"></span>`;
          },

        }}
        className="cs_slider cs_slider_2">
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_about cs_style_1">
              <div className="cs_about_bg cs_bg" style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="container">
                <div className="cs_about_text">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text" >
                      <div className="cs_section_subtitle">{item.sub_title}</div>
                      <h2 className="cs_section_title">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <div className="cs_height_40 cs_height_lg_30"></div>
                  <p className="cs_m0">
                    {item.des}
                  </p>
                  <div className="cs_height_40 cs_height_lg_30"></div>
                  <div className="cs_section_heading_right cs_btn_anim">
                    <Link href="/contact" className="cs_btn cs_style_1">
                      <span>Contact Us</span>
                      <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                          fill="currentColor" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">

              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_prev">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_next">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutHomeOne;
