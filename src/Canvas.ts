import { Entity } from "./Entity";
import { SCALE } from "./Globals";

export class Canvas {
  public canvas: HTMLCanvasElement
  public context: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    if (!canvas || !context) {
      return;
    }
    this.canvas = canvas;
    this.context = context;
    this.context.imageSmoothingEnabled = false;
    // this.context.webkitImageSmoothingEnabled = false;
    // this.context.mozImageSmoothingEnabled = false;
    this.context.scale(SCALE, SCALE);
  }

  drawRect(x: number, y: number, width: number, height: number, color: string) {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, width, height);
  }

  drawCircle(x: number, y: number, radius: number, color: string) {
    this.context.fillStyle = color;
    this.context.beginPath();
    this.context.arc(x, y, radius, 0 * Math.PI, 2 * Math.PI);
    this.context.fill();
    this.context.closePath();
  }

  drawEntity(entity: Entity) {
    entity.checkBounds();
    this.context.drawImage(entity.sprite, entity.x, entity.y);
  }

  drawPlayer(player: Entity) {
    player.checkBounds();
    this.context.drawImage(player.sprite, player.screenX, player.screenY);
  }
}
