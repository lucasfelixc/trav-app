import { Container, Wrapper } from './IndexPerfil.style';

interface IProps {
  imageUrl: StaticImageData;
}

const IconPerfil: React.FC<IProps> = ({ imageUrl }) => {
  return (
    <Container>
      <Wrapper backgroundImage={imageUrl.src} />
    </Container>
  );
};

export default IconPerfil;
