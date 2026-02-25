import Link from "next/link";


// hero social links home three
interface HDataType {
  id: number;
  link: string;
  title: string;
  svg: React.ReactNode;
}
const hero_link_home_three: HDataType[] = [
  {
    id: 1,
    link: "https://www.facebook.com",
    title: "Facebook",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H8.898V12h1.54V9.797c0-1.52 1.266-2.753 2.826-2.753h2.01V9.5h-1.44c-.566 0-1.026.46-1.026 1.026V12h2.38l-.38 2.89h-2v7.0C18.343 21.128 22 16.991 22 12z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 2,
    link: "https://www.linkedin.com",
    title: "Linkedin",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.983 3.5a2.5 2.5 0 110 5.001 2.5 2.5 0 010-5.001zM3.5 9h3v12h-3V9zm6.5 0h2.889v1.636h.041c.403-.764 1.388-1.568 2.857-1.568C17.893 9.068 20 10.438 20 13.589V21h-3v-6.329c0-1.508-.54-2.538-1.889-2.538-1.03 0-1.644.693-1.914 1.362-.099.241-.124.577-.124.915V21h-3V9z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 3,
    link: "https://www.instagram.com",
    title: "Instagram",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 4a5 5 0 100 10 5 5 0 000-10zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" fill="currentColor"/>
      </svg>
    ),
  },

]
export const SocialLinks = () => {
  return (
    <>
      {hero_link_home_three.map((h_item, h_index) => (
        <Link
          key={h_index}
          href={h_item.link}
          className="cs_center"
          target="_blank"
          aria-label={h_item.title}>
          {h_item.svg}
        </Link>
      ))}
    </>
  )

}


// copy right text 
type copy_right_text_type = {
  copy_right: React.ReactElement;
}

const copy_right_text: copy_right_text_type = {
  copy_right: <>
    Copyright 2025 Hybrid One Digital, All Right reserved
  </>
}

const { copy_right } = copy_right_text
export const CopyRight = () => {
  return (
    <> {copy_right}</>
  )
}
