import './index.css'
import './Globals.ts'
import { drawingCanvas, player, scaledCanvasHeight, scaledCanvasWidth, world } from './Globals.ts';

function paint() {
  drawingCanvas.drawRect(0, 0, scaledCanvasWidth, scaledCanvasHeight, "#1d1d1d");
  update();
  let screenX: number;
  let screenY: number;
  for (let i = 0; i < world.length; i++) {
    const tile = world[i];
    screenX = tile.worldX - player.worldX + player.screenX;
    screenY = tile.worldY - player.worldY + player.screenY;
    drawingCanvas.drawRect(screenX, screenY, tile.width, tile.height, tile.color);
  }
  drawingCanvas.drawPlayer(player);
  requestAnimationFrame(paint);
}
requestAnimationFrame(paint);

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "d":
      player.RIGHT = true;
      break;
    case "a":
      player.LEFT = true;
      break;
    case "w":
      player.UP = true;
      break;
    case "s":
      player.DOWN = true;
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "d":
      player.RIGHT = false;
      break;
    case "a":
      player.LEFT = false;
      break;
    case "w":
      player.UP = false;
      break;
    case "s":
      player.DOWN = false;
      break;
  }
});

function update() {
  const prevX = player.worldX;
  const prevY = player.worldY;
  if (player.UP) {
    player.worldY -= player.speed;
  }
  if (player.DOWN) {
    player.worldY += player.speed;
  }
  if (player.LEFT) {
    player.worldX -= player.speed;
  }
  if (player.RIGHT) {
    player.worldX += player.speed;
  }
  for (let i = 0; i < world.length; i++) {
    const tile = world[i];
    if (player.isColliding(tile)) {
      player.superMario64CollisionRipoff(tile);
      drawingCanvas.drawRect(0, 0, scaledCanvasWidth, scaledCanvasHeight, "red");
    }
  }
}



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
