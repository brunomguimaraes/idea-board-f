import React from 'react';
import Pic from 'assets/photos/5638732.jpeg';

import {
  BigDescription,
  SmallDescription,
  SmallDescriptionFooter,
  AddButton,
  ImageSection,
  Grid,
} from './style';

const PhaseOne = () => {
  return (
    <Grid>
      <BigDescription placeholder="descrição do problema" />
      <ImageSection>
        <img src={Pic} alt="5638732" />
      </ImageSection>
      <SmallDescription placeholder="descrição da imagem" />
      <SmallDescriptionFooter placeholder="Ideias que surgem a partir da imagem" />
      <AddButton>+</AddButton>
    </Grid>
  );
};

export default PhaseOne;
