// for (let x = player_tile_x - tile_radius_x;
//   x < player_tile_x + tile_radius_x; x++) {
//   for (let y = player_tile_y - tile_radius_y;
//     y < player_tile_y + tile_radius_y; y++) {
//          = TILE_WIDTH * x;
//          = TILE_WIDTH * y;
//         Color c = GetColor(0xa8dce3);
//         Color font_color = RAYWHITE;
//     if ((x + (y % 2 == 0)) % 2 == 0) {
//       font_color = BLACK;
//       DrawRectangle(pos_x, pos_y, TILE_WIDTH, TILE_WIDTH, c);
//     }
//   }
// }
//
// todo screentoworld
// todo worldtoscreen
//
//
//
//
// for (let i = offsetX; i < startX + TILE_RADIUS; i++) {
//   for (let j = offsetY; j < startY + TILE_RADIUS; j++) {
//     if ((i + (c_is_better(j))) % 2 == 0) {
//       drawingCanvas.drawRect(i * TILE_WIDTH, j * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT, "pink");
//     }
//     y++;
//     if (map[i] != undefined && map[i][j] == 1) {
//       drawingCanvas.drawRect(i * TILE_WIDTH, j * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT, "black");
//     }
//
// if (map[i] != undefined && map[i][j] == 2) {
//       drawingCanvas.drawRect(i * TILE_WIDTH, j * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT, "blue");
//     }
//
//     if (map[i] != undefined && map[i][j] == 4) {
//       drawingCanvas.drawRect(i * TILE_WIDTH, j * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT, "red");
//     }
//   }
//   x++;
// }
// hacer de los items otra clase porque oop is fucking fucking shitittt pero funciona para mi mentecita de fokita

import { map, TILE_WIDTH, player, drawingCanvas, burgerEnt } from "./Globals";
import { worldToScreen } from "./UtilityFunctions";

// const startX = screenToWorld(player.x);
// const startY = screenToWorld(player.y);
// let offsetX = (startX - TILE_RADIUS < 0) ? 0 : startX - TILE_RADIUS;
// let offsetY = (startY - TILE_RADIUS < 0) ? 0 : startY - TILE_RADIUS;
// let x = 0;
// let y = 0;
//
// for (let i = 0; i < scaledCanvasWidth / TILE_WIDTH; i++) {
//   if (offsetX + 1 < map[0].length) {
//     offsetX = 0;
//   }
//   for (let j = 0; j < scaledCanvasHeight / TILE_WIDTH; j++) {
//     if (map[offsetX] == undefined) {
//       console.log(offsetX);
//     }
//     if (map[offsetX] != undefined && map[offsetX][offsetY] == 0) {
//       drawingCanvas.drawRect(i * TILE_WIDTH, j * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT, "pink");
//     } else if (map[offsetX] != undefined && map[offsetX][offsetY] == 1) {
//       drawingCanvas.drawRect(i * TILE_WIDTH, j * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT, "green");
//     } else if (map[offsetX] == undefined) {
//       drawingCanvas.drawRect(i * TILE_WIDTH, j * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT, "blue");
//     }
//     if (offsetY + 1 < map[0].length) {
//       offsetY++;
//     }
//   }
//   offsetX++;
// }

for (let row = 0; row < map.length; row++) {
  for (let column = 0; column < map[0].length; column++) {
    const worldX = column * TILE_WIDTH
    const worldY = row * TILE_WIDTH
    screenX = worldX - player.worldX + player.screenX;
    screenY = worldY - player.worldY + player.screenY;

    if (map[row][column] == 1) {
      drawingCanvas.drawRect(screenX, screenY, TILE_WIDTH, TILE_WIDTH, "black")
    }

    if (map[row][column] == 2) {
      burgerEnt.screenX = worldToScreen(column);
      burgerEnt.screenY = worldToScreen(row);
      drawingCanvas.drawEntity(burgerEnt, screenX, screenY)
    }
  }
}
