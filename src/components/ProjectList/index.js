import Project from "../Project";

import * as Styled from "./styles";

import { projects } from "../../data/projects";

const ProjectList = () => {
  return (
    <Styled.Container>
      {projects.map(({ id, url, name, image, description }) => (
        <li key={id}>
          <Project name={name} image={image} info={description} url={url} />
        </li>
      ))}
    </Styled.Container>
  );
};
export default ProjectList;
