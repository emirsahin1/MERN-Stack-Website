import styled, { css } from 'styled-components';
import {device} from "../../device-sizes"

export const Image = styled.img`
    flex-grow: 0;
    flex-shrink: 0;
    min-height: 100%;
    min-width: 900px;
    width: 100%;
    height: auto;
    position: absolute;
    transition: all 0.25s ease-in;
`
export const SlideshowContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    overflow: hidden;
    background-color: rgb(29, 29, 29);

    @media ${device.mobile} {
        height: 43vh;
    }
`

export const CircleContainer = styled.div`
  display: flex;
  position: absolute;
  top: 90%;
`

export const Circle = styled.div`
  --circle-size: 13px;
  border-radius: 100%;
  width: var(--circle-size);
  height: var(--circle-size);
  border-style: solid;
  border-width: 3px;
  margin: 0 6px;
  opacity: 0.4;
  background-color: rgb(102, 86, 121);
  border-color: rgb(43, 43, 43);
  transition: all 0.2s ease-in;
  cursor: pointer;

  @media ${device.mobile} {
    width: 3vh;
    height: 3vh;
    max-width: var(--circle-size);
    max-height: var(--circle-size);
  }
`

export const SlideArrow = styled.svg`
  --arrow-size: 40px;
  --arrow-location: 4%;
  position: absolute;
  top: calc(50% - (var(--arrow-size) / 2));
  width: var(--arrow-size);
  height: var(--arrow-size);
  opacity: 0.3;
  cursor: pointer;
  transition: all 0.14s ease-in;
  ${props => {if(props.left){
        return css`
        left: calc(var(--arrow-location) - var(--arrow-size) + 20px);
        transform: rotate(180deg);
      `}
    else{
        return css`
        right: calc(var(--arrow-location) - var(--arrow-size) + 20px);
        `}
        }
    }

  &:hover{
    opacity: 1;
  }

  @media ${device.mobile} {
    --arrow-location: 9%;
    --arrow-size: calc(10% + 10px);
  }

`