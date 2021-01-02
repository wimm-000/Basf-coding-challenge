import React from "react";
import { ReactComponent as WhatsappIcon } from "../../assets/images/whatsapp.svg";
import { ReactComponent as MailIcon } from "../../assets/images/email.svg";
import { ReactComponent as LinikedinIcon } from "../../assets/images/linkedin.svg";

export default function SocialLinks() {
  return (
    <ul className="social-links">
      <li className="social-links--whatspp">
        <a
          target="_blank"
          href="https://wa.link/zt478f"
          aria-label="whatsapp"
          title="whatsapp"
        >
          <WhatsappIcon />
        </a>
      </li>
      <li className="social-links--email">
        <a
          target="_blank"
          href="mailto:andres.ibarra.jensen@gmail.com?subject=Greetings, just wanting to get in touch&body="
          aria-label="email"
          title="email"
        >
          <MailIcon />
        </a>
      </li>
      <li className="social-links--linkedin">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/andr%C3%A9s-ibarra-jensen-27a50043/"
          aria-label="linkedin"
          title="linkedin"
        >
          <LinikedinIcon />
        </a>
      </li>
    </ul>
  );
}
