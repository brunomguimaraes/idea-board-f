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
import Pic9 from 'assets/photos/9.jpeg';
import Pic10 from 'assets/photos/10.jpg';
import Pic11 from 'assets/photos/11.jpeg';
import Pic12 from 'assets/photos/12.jpeg';
import Pic13 from 'assets/photos/13.jpeg';

import { ImageSection } from './style';

type RandomPictureProps = {
  idx: number;
};

const RandomPicture = ({ idx }: RandomPictureProps) => {
  const imgArr = [
    Pic0,
    Pic1,
    Pic2,
    Pic3,
    Pic4,
    Pic5,
    Pic6,
    Pic7,
    Pic8,
    Pic9,
    Pic10,
    Pic11,
    Pic12,
    Pic13,
  ];
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
