import styled from "styled-components";

export const Container = styled.section`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Title = styled.h4`
  width: 100%;

  font-weight: 400;
  font-size: 1.4rem;
  text-align: center;
  text-transform: uppercase;

  margin-bottom: 5rem;
  position: relative;

  &::after {
    content: "";
    width: 4rem;
    height: 2px;
    display: block;
    position: absolute;

    left: 50%;
    bottom: -2rem;
    transform: translateX(-50%);
    background-color: #f4b942;
  }
`;

export const Text = styled.p`
  font-size: 1.8rem;
  margin-bottom: 6rem;
  font-weight: 400;
  line-height: 2.9rem;

  @media (min-width: 768px) {
    max-width: 45%;
  }
`;
