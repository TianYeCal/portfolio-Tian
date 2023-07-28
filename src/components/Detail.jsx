import styled from "styled-components";
import Project from "./Project";

const Detail = () => {
  return (
    <Wrapper>
      <section className="intro">
        <h2 className="title">welcome!</h2>
        <p className="desc">
          Hi! I'm a front-end developer based in Calgary. Bachelor of Computer
          Science, a strong foundation in HTML, CSS, JavaScript and React. I am
          enthusiastic about the opportunity to contribute my skills and passion
          to your esteemed organization. an easier person, also a boxing lover.
        </p>
        <div className="underline"></div>
      </section>
      <Project />
      <section className="contact">
        <h3 className="title">Get in touch</h3>
        <p className="desc">
          Do you have a job opportunity or idea you'd like to discuss? please
          feel free to contact me via email at fieldbeixin@gmail.com or by phone
          at 587-968-2732. I'd love to hear from you.😉
        </p>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  padding: 10rem 0;
  padding-left: 45%;
  padding-right: 5rem;
  .intro {
    letter-spacing: 0.5px;
    margin-bottom: 3rem;
  }
  .title {
    text-align: left;
    line-height: 1.5;
    font-size: 28px;
    margin-bottom: 2rem;
    color: var(--grey-500);
    font-weight: 700;
  }
  .desc {
    padding-bottom: 3rem;
    border-bottom: 1px var(--grey-500) solid;
    line-height: 1.5;
    color: var(--grey-500);
  }
  .desc:last-child {
    border-bottom: none;
  }
  .contact {
    margin-top: 3rem;
  }
  @media (max-width: 768px) {
    padding: 3rem;
    padding-bottom: 10rem;
  }
`;
export default Detail;
