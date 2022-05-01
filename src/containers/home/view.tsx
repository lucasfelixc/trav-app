import Link from 'next/link';

import { ForwardButton } from '~/components';
import { BACKGROUND_HOME } from '~/config/env';

import {
  Container,
  BlurBackground,
  Wrapper,
  TitleFirstPart,
  TitleSecondPart,
  ContentTitle,
} from './view.style';

const View: React.FC = () => {
  return (
    <Container background={BACKGROUND_HOME}>
      <BlurBackground>
        <Wrapper>
          <ContentTitle>
            <TitleFirstPart>Vamos fazer</TitleFirstPart>
            <TitleSecondPart>as férias dos seus sonhos</TitleSecondPart>
          </ContentTitle>
          <Link href="/explorar">
            <div>
              <ForwardButton className="forwardButton" />
            </div>
          </Link>
        </Wrapper>
      </BlurBackground>
    </Container>
  );
};

export default View;
