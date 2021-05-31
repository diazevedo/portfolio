import * as Styled from "./styles";

const Project = ({ image, name, info, url }) => {
  return (
    <Styled.Container>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Styled.Image
          src={require(`../../assets/images/${image}`).default}
          alt={`project ${name}`}
        />
      </a>

      <Styled.Caption>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>{name}</h3>
        </a>
        <p>{info}</p>
      </Styled.Caption>
    </Styled.Container>
  );
};

export default Project;
