import * as Styled from "./styles";

const Project = ({ image, name, info }) => {
  return (
    <Styled.Container>
      <Styled.Image
        src={require(`../../assets/images/${image}`).default}
        alt={`project ${name}`}
      />

      <Styled.Caption>
        <h3>{name}</h3>
        <p>{info}</p>
      </Styled.Caption>
    </Styled.Container>
  );
};

export default Project;
