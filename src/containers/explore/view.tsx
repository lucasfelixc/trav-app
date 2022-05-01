import Perfil from '~/assets/images/perfil.png';
import { Header, SearchBar } from '~/components';

import { Container } from './view.style';

const View: React.FC = () => {
  return (
    <Container>
      <Header imagePerfil={Perfil} userName={'Lucas'} />
      <SearchBar />
    </Container>
  );
};

export default View;
