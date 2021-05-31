import styled from "styled-components";
import { device } from "../../styles/medias";

export const Container = styled.figure``;

export const Image = styled.img`
  width: 100%;
  max-height: 20rem;
  padding: 2em;
  background-color: #dbecff;
  margin-bottom: 2rem;
`;

export const Caption = styled.figcaption`
  text-align: center;

  @media ${device.laptop} {
    text-align: left;
  }

  h3 {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.6rem;

    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.4rem;
  }
`;
