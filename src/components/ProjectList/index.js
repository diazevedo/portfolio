import Project from "../Project";

import * as Styled from "./styles";

import { projects } from "../../data/projects";

const ProjectList = () => {
  return (
    <Styled.Container>
      {projects.map(({ id, name, image, description }) => (
        <li>
          <Project key={id} name={name} image={image} info={description} />
        </li>
      ))}
    </Styled.Container>
  );
};
export default ProjectList;
