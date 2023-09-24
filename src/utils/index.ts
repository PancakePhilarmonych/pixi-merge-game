import * as PIXI from 'pixi.js';

import redOne from '../assets/sprites/blocks/red_one.png';
import redTwo from '../assets/sprites/blocks/red_two.png';
import redThree from '../assets/sprites/blocks/red_three.png';
import yellowOne from '../assets/sprites/blocks/yellow_one.png';
import yellowTwo from '../assets/sprites/blocks/yellow_two.png';
import yellowThree from '../assets/sprites/blocks/yellow_three.png';
import blueOne from '../assets/sprites/blocks/blue_one.png';
import blueTwo from '../assets/sprites/blocks/blue_two.png';
import blueThree from '../assets/sprites/blocks/blue_three.png';
import empty from '../assets/sprites/blocks/empty.png';


export enum Colors {
  RED,
  RED_TWO,
  RED_THREE,
  YELLOW,
  YELLOW_TWO,
  YELLOW_THREE,
  BLUE,
  BLUE_TWO,
  BLUE_THREE,
  EMPTY,
}

export const getSpriteByColor: Record<Colors, PIXI.Texture> = {
  [Colors.RED]: PIXI.Texture.from(redOne),
  [Colors.RED_TWO]: PIXI.Texture.from(redTwo),
  [Colors.RED_THREE]: PIXI.Texture.from(redThree),
  [Colors.YELLOW]: PIXI.Texture.from(yellowOne),
  [Colors.YELLOW_TWO]: PIXI.Texture.from(yellowTwo),
  [Colors.YELLOW_THREE]: PIXI.Texture.from(yellowThree),
  [Colors.BLUE]: PIXI.Texture.from(blueOne),
  [Colors.BLUE_TWO]: PIXI.Texture.from(blueTwo),
  [Colors.BLUE_THREE]: PIXI.Texture.from(blueThree),
  [Colors.EMPTY]: PIXI.Texture.from(empty),
}
