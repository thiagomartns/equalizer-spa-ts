import styled from "styled-components";
import Media from '../../styles/media';

export const FooterContainer = styled.div`
  margin-top: 10rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  padding: 2rem 0;

  ${Media.mobile} {
    flex-direction: column;
    gap: 2.5rem;
    padding: 0 0 3rem 1rem;
  }
`