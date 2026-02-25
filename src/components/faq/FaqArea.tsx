
'use client'
import React, { useState } from 'react';


interface DataType {
  id: string;
  question: string;
  ans: string;
}
const faq_data: DataType[] = [
  {
    id: "One",
    question: `What is the design process for branding?`,
    ans: `Our branding process is structured and collaborative. We start with research to understand your business, audience, and competitors. Then we develop a strategy, create mood boards, design logos and visual identity elements, and finalize brand guidelines. Every step is reviewed with you to ensure your brand is consistent, memorable, and aligned with your goals.`,
   },
  {
    id: "Two",
    question: `What services does your agency offer?`,
   ans:`We offer a full suite of digital growth and creative services, including:
  Social Media Marketing
  PPC & Paid Ads 
  SEO (Search Engine Optimization)
  Web & Mobile App Development
  Graphic Design & Video Editing
  Lead Conversion & Appointment Booking
  E-commerce Management (Amazon, Etsy, eBay, TikTok Shop)
  We focus on services that drive measurable results for your business.
`, 
  },
  {
    id: "Three",
    question: `How do you approach a new project?`,
    ans:`Every project begins with discovery. We analyze your business, competitors, and target audience. Then we define clear objectives, create a strategy, and map out the deliverables. Once approved, we execute with a focus on quality, timelines, and measurable results. Communication is key we keep you updated at every step.`,
  },
  {
    id: "Four",
    question: `How do you handle revisions or changes to a project?`,
    ans:`We include a structured revision process in every project. You can provide feedback at defined stages, and we’ll make adjustments accordingly. Our goal is to ensure your vision is accurately reflected, without causing delays or compromising quality. Major changes outside the scope are discussed transparently before implementation.`,
  },
  {
    id: "Five",
    question: `How do you determine pricing for your services?`,
    ans:`Pricing depends on the scope, complexity, and deliverables of each project. We provide transparent, custom quotes after understanding your needs. There are no hidden fees only clear pricing tailored to the value we deliver.`,
  },
  {
    id: "Six",
    question: `Do you offer any long-term support or maintenance for your projects?`,
    ans:`Yes! We offer ongoing support and maintenance packages to ensure your website, apps, or marketing campaigns stay optimized, up-to-date, and performing at their best. This includes updates, troubleshooting, and performance monitoring to keep your systems running smoothly.`,  
  },
]

const FaqArea = ({ compact = false }: { compact?: boolean }) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <>
      {compact ? null : <div className="cs_height_219 cs_height_lg_120"></div>}

      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <div className="mb-3 anim_text_writting">FAQ</div>
            <h2 className="cs_section_title anim_text_writting">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
      </div>

      {compact ? <div className="cs_height_40 cs_height_lg_30"></div> : <div className="cs_height_100 cs_height_lg_60"></div>}

      <div className="container">
        <div className="cs_accordeon anim_div_ShowDowns">
          {faq_data.map((item, i) =>
            <div key={i} 
            onClick={() => toggleAccordion(i)}
            className={`cs_accordion_item cs_color_1 ${i === activeIndex ? 'active cs_icon' : ''}`}>
              <div className="cs_accordion_header">
                <p className="cs_accordion_title cs_m0" id={`heading${item.id}`}>
                  {item.question}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="30" style={{ transform: i === activeIndex ? 'rotate(-90deg)' : 'none' }}>
                  <path style={{ fill: `#f4f4f2` }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right" />
                </svg>
              </div>

              <div className={`cs_accordion_body ${i === activeIndex ? '' : 'd-none'}`}>
                {item.ans}
              </div>
            </div>
          )} 

        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default FaqArea;
