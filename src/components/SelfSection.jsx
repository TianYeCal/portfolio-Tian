import styled from "styled-components";
import avatar from "../images/avatar.jpg";
import Footer from "./Footer";
const SelfSection = () => {
  return (
    <Wrapper className="self-section">
      <div className="profile-container">
        <div className="avatar-container">
          <img src={avatar} alt="avatar img" className="img" />
        </div>
        <p>
          <span>I am Tian,</span> a frontend developer,living with passion,
          always ready for adventures.
        </p>
      </div>
      <Footer className="footer" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  color: var(--grey-700);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  text-align: right;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;

  .profile-container {
    height: 40%;
    width: 70%;
    position: relative;
    .avatar-container {
      position: absolute;
      top: 0;
      right: 0;
    }
    .img {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
    }
    p {
      margin-top: 4rem;
      line-height: 1.5rem;
      letter-spacing: 0.05rem;
      color: var(--grey-200);
      span {
        font-weight: 700;
        color: white;
      }
    }
  }
  @media (max-width: 736px) {
    position: static;
    width: 100%;
    min-height: 40vh;
    text-align: center;
    padding: 2rem;
    .profile-container {
      height: 40%;
      width: 70%;
      position: relative;
      .avatar-container {
        position: static;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        /* margin-top: 2rem; */
        line-height: 1.5rem;
        letter-spacing: 0.05rem;
        margin-top: 2rem;
      }
    }
  }
`;
export default SelfSection;
