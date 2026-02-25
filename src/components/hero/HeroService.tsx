
import React from 'react';
import Link from 'next/link';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';


interface DataType {
  id: number;
  title: string;
  description: string;
}

const banner_data:DataType[] = [
  {
    id: 1,
    title: `Social Media Marketing`,
    description: `We create engaging campaigns on Facebook, Instagram, TikTok, and LinkedIn that attract, nurture, and convert your audience into loyal customers.`
  },
  {
    id: 2,
    title: `PPC (Pay per click)`,
    description: `Targeted campaigns on Google, Bing, and social platforms designed to drive clicks, traffic, and measurable ROI for your business.`
  },
  {
    id: 3,
    title: `SEO (Search Engine Optimization)`,
    description: `We optimize your website to rank higher on Google and other search engines, drive organic traffic, and attract qualified leads ready to convert.`
  },
  {
    id: 4,
    title: `Sales & Appointments`,
    description: `We connect with your leads via calls or chat, answer queries, and book appointments — ensuring no lead goes cold.`
  },
   {
    id: 5,
    title: `Web Development`,
    description: `High-converting, responsive websites tailored for your business — optimized for speed, user experience, and lead generation.`
  },
  {
    id: 6,
    title: `Graphic Design`,
    description: `Creative visuals, branding assets, and ad creatives that capture attention and drive engagement across all platforms.`
  },
  {
    id: 7,
    title: `Video Editing`,
    description: `Professional video content for ads, social media, and promotions — designed to boost engagement and conversions.`
  },
  {
    id: 8,
    title: `Mobile Application Development`,
    description: `Custom mobile apps for iOS and Android that enhance customer experience, engagement, and retention.`
  },
  {
    id: 9,
    title: `TikTok Shop`,
    description: `Set up, manage, and optimize your TikTok Shop to reach a massive audience and drive sales directly from the platform.`
  },
  {
    id: 10,
    title: `Amazon / Etsy / eBay`,
    description: `We help you list, optimize, and manage your products on top marketplaces, increasing visibility, sales, and revenue.`
  },
]

const HeroService = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section className="position-relative">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle">Our Services</div>
              <h2 className="cs_section_title anim_word_writting">
                Unified Digital Services to Build, Market & Scale Measurable Growth
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
          </div>
           
          <div className="cs_height_135 cs_height_lg_70"></div>
          <FunFactHomeOne />
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_1_list">
            {banner_data.map((item, i) =>
              <div key={i} className={`cs_card cs_style_1 anim_div_ShowDowns ${i % 2 === 0 ? 'cs_color_1' : ''}`}>
                <div className="cs_card_left">
                  <div className="cs_card_number cs_primary_font" style={{ backgroundImage: `url('${i % 2 === 0 ? '/assets/img/hero_img.jpg' : '/assets/img/hero_img_1.jpg'}')` }}>
                    {(i + 1) < 10 ? `0${i + 1}` : `${i + 1}`}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href="/service-details">{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle">{item.description}</div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <Link href="/service-details" className="cs_card_link">
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            )} 

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroService;
