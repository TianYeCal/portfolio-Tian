import styled from "styled-components";

import { useFetchProjects } from "../fetchProjects";
const Project = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) return;
  return (
    <Wrapper>
      <h4 className="title">My projects</h4>
      <div className="projects">
        {projects.map((project) => {
          const { title, image, url, id } = project;
          return (
            <div key={id} className="project">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} className="img" />
              </a>
              <p className="img-desc">{title}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  border-bottom: 1px var(--grey-400) solid;
  .title {
    text-align: left;
    line-height: 1.5;
    font-size: 28px;
    margin-bottom: 2rem;
    color: var(--grey-500);
  }
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 3rem;

    img {
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      height: 80%;
    }
    .img-desc {
      color: var(--grey-500);
      font-size: 18px;
    }
  }
  .project {
    transition: all ease-in-out 0.2s;
  }
  .project:hover {
    transform: scale(1.1);
  }
  @media (max-width: 412px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;
export default Project;
