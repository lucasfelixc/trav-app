import styled from 'styled-components';

interface containerProps {
  background: string;
}

export const Container = styled.div<containerProps>`
  width: 100vw;
  height: 100vh;

  background-image: url(${(props) => props.background});
  background-size: cover;
`;

export const BlurBackground = styled.div`
  width: 100vw;
  height: 100vh;

  @supports (backdrop-filter: blur(2px)) or
    (--webkit-backdrop-filter: blur(2px)) {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    --webkit-backdrop-filter: blur(2px);
  }
`;

export const Wrapper = styled.div`
  .forwardButton {
    margin: 1rem 0 0 2rem;
  }
`;

export const ContentTitle = styled.div`
  max-width: 60%;

  display: flex;
  flex-direction: column;

  padding: 2rem 0 0 2rem;
`;

export const TitleFirstPart = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
`;

export const TitleSecondPart = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
`;
