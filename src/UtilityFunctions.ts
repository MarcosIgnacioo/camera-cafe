import { TILE_WIDTH } from "./Globals";

export function worldToScreen(num: number) {
  return Math.round(num * TILE_WIDTH);
}

export function screenToWorld(num: number) {
  return Math.round(num / TILE_WIDTH);
}

export function worldToTile(num: number) {
  return Math.abs(Math.ceil(num / TILE_WIDTH))
}

export function c_is_better(num: number) {
  return (num % 2 == 0) ? 1 : 2;
}
export function rgb() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
