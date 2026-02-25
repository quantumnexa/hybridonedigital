
import React from 'react';
import Link from 'next/link';


interface DataType {
  id: string;
  title: string;
  description: string;
}
const service_data: DataType[] = [
  {
    id: 'one',
    title: "Strategy",
    description: `Market research, ICP & messaging. Channel mix planning, budget allocation, KPI framework and growth forecast.`,
  },
  {
    id: 'Two',
    title: "Creative & Funnel",
    description: `Offer, ad creatives and landing pages. High‑converting funnels, tracking plan, and email/SMS automation flows.`,
  },
  {
    id: 'Three',
    title: "Campaign Execution",
    description: `Launch across Meta/Google/LinkedIn/TikTok. Audience building, bidding strategies, and rapid experimentation.`,
  },
  {
    id: 'Four',
    title: "Optimization & Scale",
    description: `A/B testing, CRO and creative iteration. ROAS/CAC tracking, budget reallocation, and scaling winners responsibly.`,
  },
]
const Service = () => {
  return (
    <>
      <div className="cs_height_115 cs_height_lg_60"></div>
      <section>
        <div className="cs_primary_bg">
          <div className="cs_height_135 cs_height_lg_70"></div>
          <div className="container">
            <div className="cs_section_heading_hr cs_style_1 cs_color_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">
                    Our Working Process
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>

            <div className="cs_height_100 cs_height_lg_70"></div>
            <div className="anim_div_ShowLeftSide">
              <div className="cs_work cs_work_1">
                <div className="cs_card_work cs_style_1 cs_color_1">
                  {service_data.map((item, i) => (
                    <div key={i} className="cs_card">
                      <div className="cs_card cs_style_1">
                        <div className="cs_posagation">
                          <div className="cs_work_style_1"></div>
                          <div className="cs_work_style_2"></div>
                        </div>
                        <div className="cs_stroke_number">
                          <span>{item.id}</span>
                        </div>
                      </div>

                      <h6 className="cs_work_title">{item.title}</h6>
                      <p className="cs_work_subtitle">
                        {item.description}
                      </p>
                    </div>

                  ))}

                </div>
              </div>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="container">
            <div className="text-center cs_btn_anim">
              <Link href="/contact" className="cs_btn cs_style_1 cs_color_1">
                <span>Contact Us</span>
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z" fill="currentColor" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="cs_height_150 cs_height_lg_60"></div>
        </div>
      </section>
    </>
  );
};

export default Service;
