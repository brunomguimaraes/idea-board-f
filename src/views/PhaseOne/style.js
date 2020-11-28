import styled from 'styled-components';
import styleConstants from 'utils/constants/style';

const { black } = styleConstants;

export const Grid = styled.div`
  padding-top: 5%;
  width: 70vw;
  margin: auto;
  display: grid;
  column-gap: 8px;
  row-gap: 16px;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: auto 60% auto auto;
  grid-template-areas: 
  ". header ."
  "imagebutton image imagelist"
  ". description ."
  ". footer .";
  justify-items: center;
}
`;

export const ImageSection = styled.div`
  grid-area: image;
  max-width: 50vw;
  margin: auto;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;

export const BigDescription = styled.input`
  grid-area: header;
  border: 2px solid ${black};
  width: 400px;
  height: 80px;
  padding: 8px;
  border-radius: 8px;
`;

export const SmallDescription = styled.input`
  grid-area: description;
  border: 2px solid ${black};
  width: 240px;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
`;

export const SmallDescriptionFooter = styled.input`
  grid-area: footer;
  border: 2px solid ${black};
  width: 240px;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
`;

export const AddButton = styled.button`
  grid-area: footer;
  justify-self: end;
  box-shadow: inset 0px 1px 0px 0px #caefab;
  background: linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);
  background-color: #77d42a;
  border-radius: 6px;
  border: 1px solid #268a16;
  display: inline-block;
  cursor: pointer;
  color: #306108;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #aade7c;

  &:hover {
    background: linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);
    background-color: #5cb811;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export default Grid;
