import styled from 'styled-components';

export const Container = styled.button`
  width: 4.2rem;
  height: 4.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 1.25rem;

  @supports (backdrop-filter: blur(10px)) or
    (--webkit-backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    --webkit-backdrop-filter: blur(10px);
  }

  background: linear-gradient(
    180deg,
    rgba(135, 217, 246, 0.6) 0%,
    rgba(130, 216, 239, 0.6) 100%
  );

  box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
`;
