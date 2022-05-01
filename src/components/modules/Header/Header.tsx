import { IconPerfil } from '~/components';

import { Container, WrapperText, Headline, Subheading } from './Header.style';

interface IProps {
  imagePerfil: StaticImageData;
  userName: string;
}

const Header: React.FC<IProps> = ({ imagePerfil, userName }) => {
  return (
    <Container>
      <WrapperText>
        <Headline>Olá, {userName}</Headline>
        <Subheading>Explore o lindo mundo!</Subheading>
      </WrapperText>
      <IconPerfil imageUrl={imagePerfil} />
    </Container>
  );
};

export default Header;
