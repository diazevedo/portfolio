import styled from "styled-components";
import { device } from "../../styles/medias";

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4rem;

  @media ${device.tablet} {
    font-size: 4.8rem;
    line-height: 5.6rem;
  }

  @media ${device.laptop} {
    font-size: 5.6rem;
    line-height: 8rem;
  }
`;

export default Title;
