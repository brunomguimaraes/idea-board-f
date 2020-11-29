import React from 'react';
import Pic0 from 'assets/photos/0.jpeg';
import Pic1 from 'assets/photos/1.jpeg';
import Pic2 from 'assets/photos/2.jpeg';
import Pic3 from 'assets/photos/3.jpeg';
import Pic4 from 'assets/photos/4.jpeg';
import Pic5 from 'assets/photos/5.jpeg';
import Pic6 from 'assets/photos/6.jpeg';
import Pic7 from 'assets/photos/7.jpeg';
import Pic8 from 'assets/photos/8.jpeg';

import { ImageSection } from './style';

type RandomPictureProps = {
  idx: number;
};

const RandomPicture = ({ idx }: RandomPictureProps) => {
  const imgArr = [Pic0, Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8];
  return (
    <ImageSection>
      {Number.isInteger(idx) ? (
        <img src={imgArr[idx]} alt="0" />
      ) : (
        <span>Banco de imagem esgotado</span>
      )}
    </ImageSection>
  );
};

export default RandomPicture;
