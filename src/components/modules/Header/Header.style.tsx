import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;
  margin: 1rem 0;
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Headline = styled.h2`
  color: ${(props) => props.theme.colors.grayDark};
  font-weight: 700;
`;

export const Subheading = styled.span`
  color: ${(props) => props.theme.colors.gray400};
  font-weight: 700;
`;
