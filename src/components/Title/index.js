import styled from "styled-components";
import { device } from "../../styles/medias";

const Title = styled.h2`
  font-size: 5.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 6.25rem;
  }

  @media ${device.laptop} {
    font-size: 7.25rem;
  }

  span {
    display: block;
    margin-top: 3rem;
    font-size: 4rem;
    line-height: 1.2em;

    @media ${device.tablet} {
      font-size: 5rem;
    }

    @media ${device.laptop} {
      font-size: 6rem;
    }
  }
`;

export default Title;
