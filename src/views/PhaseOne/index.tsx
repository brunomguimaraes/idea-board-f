import React, { useState } from 'react';

import RandomPicture from 'components/RandomPicture';
import Timer from 'react-compound-timer/build/components/Timer/Timer';
import {
  BigDescription,
  SmallDescription,
  SmallDescriptionFooter,
  AddButton,
  NewImageButton,
  IdeasList,
  TimerBox,
  Grid,
} from './style';

type Idea = {
  description: string;
};

const IMG_ARR_LENGTH = 9;

const PhaseOne = () => {
  const emptyIdea = {
    description: '',
  };
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [newIdea, setNewIdea] = useState(emptyIdea);
  const [arr, setArr] = useState(Array.from(Array(IMG_ARR_LENGTH).keys()));

  const initialRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * (IMG_ARR_LENGTH + 1));
    const randomNumber = arr[randomIndex];
    arr.splice(randomIndex, 1);
    setArr(arr);
    return randomNumber;
  };

  const [currIdx, setCurrIdx] = useState(initialRandomImage);

  const createIdea = (idea: Idea) => {
    if (idea.description === '') {
      return;
    }
    setIdeas((oldIdeas) => [...oldIdeas, idea]);
    setNewIdea(emptyIdea);
  };

  const createOnNewIdeaChange = (field: string) => {
    return (e: any) => {
      setNewIdea({
        ...newIdea,
        [field]: e.target.value,
      });
    };
  };

  const changeImgIdx = () => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomNumber = arr[randomIndex];
    arr.splice(randomIndex, 1);
    setArr(arr);
    setCurrIdx(randomNumber);
    document.getElementById('reset-button')?.click();
  };

  return (
    <Grid>
      <BigDescription placeholder="descrição do problema" />
      <TimerBox>
        <Timer>
          {({ reset }: any) => (
            <>
              <div>
                <Timer.Seconds />
              </div>
              <br />
              <div>
                <NewImageButton id="reset-button" onClick={reset}>
                  Reset Timer
                </NewImageButton>
              </div>
            </>
          )}
        </Timer>
      </TimerBox>
      <NewImageButton onClick={() => changeImgIdx()}>Mudar Imagem</NewImageButton>
      <RandomPicture idx={currIdx} />
      <IdeasList>
        {ideas.map((idea) => (
          <li>{idea.description}</li>
        ))}
      </IdeasList>
      <SmallDescription placeholder="descrição da imagem" />
      <SmallDescriptionFooter
        value={newIdea.description}
        onChange={createOnNewIdeaChange('description')}
        placeholder="Ideias que surgem a partir da imagem"
      />
      <AddButton onClick={() => createIdea(newIdea)}>+</AddButton>
    </Grid>
  );
};

export default PhaseOne;
