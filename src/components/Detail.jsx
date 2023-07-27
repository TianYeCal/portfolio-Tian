import styled from "styled-components";
import Project from "./Project";

const Detail = () => {
  return (
    <Wrapper>
      <section className="intro">
        <h2 className="title">welcome!</h2>
        <p className="desc">
          Hi! I'm a front-end developer based in Calgary, Canada. I completed
          Bachelor of Computer Science in Beijing, and learned new knowledge
          about front-end development. I build websites mainly with React. I
          have a passion for all things about technology, easier person, also a
          boxing lover.
        </p>
        <div className="underline"></div>
      </section>
      <Project />
      <section className="contact">
        <h3 className="title">Get in touch</h3>
        <p className="desc">
          Do you have a job opportunity or idea you'd like to discuss? Feel free
          to reach me at fieldbeixin@gmail.com.You can also find me On Github,
          and Linkedin. Of course text and call are always welcomed, My phone
          number is 587-968-2732.
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
