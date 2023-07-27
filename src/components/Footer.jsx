import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="social-links">
          <a
            href="https://github.com/TianYeCal"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <AiFillGithub />
          </a>
          <a
            href="https://www.instagram.com/rebel.tian/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/ye-tian-8a8a9124b/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="mailto: fieldbeixin@gmail.com"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineEmail />
          </a>
        </div>
        <div className="copyright">&copy;Power by: React, Contentful</div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  width: 70%;
  height: 10rem;
  position: relative;
  margin-top: 8rem;
  .container {
    margin: 0 auto;
    .social-links {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      position: absolute;
      top: 0;
      right: 0;
      color: var(--grey-200);
    }
    .copyright {
      margin-top: 3rem;
      color: var(--grey-200);
    }
  }
  .link {
    font-size: 32px;
    color: var(--grey-200);
  }
  .link:hover {
    color: #49bf9d;
  }
  @media (max-width: 736px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 3rem 0;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .social-links {
        position: static;
        margin: 0 auto;

        margin-bottom: 1rem;
        color: var(--grey-200);
      }
      .copyright {
        text-align: center;
        margin-top: 1rem;
      }
    }
  }
`;
export default Footer;
