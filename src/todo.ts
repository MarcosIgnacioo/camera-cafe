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

// const startX = screenToWorld(player.x);
// const startY = screenToWorld(player.y);
// let offsetX = (startX - TILE_RADIUS < 0) ? 0 : startX - TILE_RADIUS;
// let offsetY = (startY - TILE_RADIUS < 0) ? 0 : startY - TILE_RADIUS;
// let x = 0;
// let y = 0;
