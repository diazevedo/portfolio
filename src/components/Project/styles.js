import styled from "styled-components";
import { device } from "../../styles/medias";

export const Container = styled.figure`
  a {
    display: block;
    margin-bottom: 2rem;
    text-decoration: none;
    color: inherit;
  }

  h3 {
    margin-bottom: 1.2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 20rem;
  padding: 2em;
  background-color: #f4b942;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-20px);
  }
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
  }

  p {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;
