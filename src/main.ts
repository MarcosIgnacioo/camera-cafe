import './index.css'
import './Globals.ts'
import { Entity } from './Entity.ts';
import { canvasWidth, SCALE, canvasHeight, canvas, img, burger, RIGHT, LEFT, UP, DOWN, ctx, drawingCanvas, map, player, scaledCanvasHeight, scaledCanvasWidth, TILE_HEIGHT, TILE_RADIUS, TILE_WIDTH, coolerMap } from './Globals.ts';

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
}


function worldToScreen(num: number) {
  return Math.round(num * TILE_WIDTH);
}

function screenToWorld(num: number) {
  return Math.round(num / TILE_WIDTH);
}

function paint() {
  update();
  let screenX: number;
  let screenY: number;
  drawingCanvas.drawRect(0, 0, scaledCanvasWidth, scaledCanvasHeight, "red");
  for (let row = 0; row < map.length; row++) {
    for (let column = 0; column < map[0].length; column++) {
      const worldX = column * TILE_WIDTH
      const worldY = row * TILE_WIDTH
      screenX = worldX - player.worldX + player.screenX;
      screenY = worldY - player.worldY + player.screenY;
      if (map[row][column] == 1) {
        drawingCanvas.drawRect(screenX, screenY, TILE_WIDTH, TILE_WIDTH, "black")
      }
    }
  }
  drawingCanvas.drawPlayer(player);
  requestAnimationFrame(paint);
}
requestAnimationFrame(paint);

function c_is_better(num: number) {
  return (num % 2 == 0) ? 1 : 2;
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
