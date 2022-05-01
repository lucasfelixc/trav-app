import styled from 'styled-components';

interface WrapperProps {
  backgroundImage: string;
}

export const Container = styled.div``;
export const Wrapper = styled.div<WrapperProps>`
  width: 3.25rem;
  height: 3.25rem;

  border-radius: 50%;

  background: url(${(props) => props.backgroundImage}) no-repeat;
  background-size: cover;
`;
