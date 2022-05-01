interface IProps {
  className?: string;
}

import Image from 'next/image';

import ChevronRight from '~/assets/icons/chevron-right.svg';

import { Container } from './ForwardButton.style';

const ForwardButton: React.FC<IProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Image src={ChevronRight} alt="Avançar" width={23} height={23} />
    </Container>
  );
};

export default ForwardButton;
