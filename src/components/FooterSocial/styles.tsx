import styled from "styled-components";
import Media from "../../styles/media";
import Theme from "../../styles/theme";

export const SocialMediaContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  gap: 1rem;

  ${Media.mobile} {
    align-self: flex-start;
  }

  .icon {
    &:hover {
      cursor: pointer;
    }

    &:hover path {
      fill: ${Theme.colors.orange};
    }
  }
`