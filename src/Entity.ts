import { Canvas } from "./Canvas";
import { canvasWidth, canvasHeight, TILE_WIDTH, burgerEnt, drawingCanvas, map, player } from "./Globals";
import { c_is_better, c_is_better2, worldToScreen, worldToTile } from "./UtilityFunctions";


export class Entity {

  public worldX: number;
  public worldY: number;
  public screenX: number;
  public screenY: number;
  public width: number;
  public height: number;
  public color: string;

  public speed: number;
  public sprite: HTMLImageElement;
  public canvas: Canvas;

  public LEFT = false;
  public RIGHT = false;
  public UP = false;
  public DOWN = false;

  constructor(worldX: number, worldY: number, width: number, height: number, speed: number, sprite: HTMLImageElement, canvas: Canvas, color: string) {
    this.worldX = worldX;
    this.worldY = worldY;
    this.screenX = worldX * 16 / 2
    this.screenY = worldY * 16 / 2
    this.speed = speed;
    this.sprite = sprite;
    this.canvas = canvas;
    this.color = color;
    this.width = width;
    this.height = height;
  }

  checkBounds() {
    if (this.screenX <= 0) {
      this.screenX = 0;
    }
    if (this.screenY <= 0) {
      this.screenY = 0;
    }
    if (this.screenX + this.sprite.width >= canvasWidth) {
      this.screenX = canvasWidth - this.sprite.width;
    }
    if (this.screenX + this.sprite.height >= canvasHeight) {
      this.screenY = canvasHeight - this.sprite.height
    }
  }

  isColliding(target: Entity) {
    return (
      (this.worldX + this.width >= target.worldX && this.worldX <= target.worldX + target.width) &&
      (this.worldY + this.height >= target.worldY && this.worldY <= target.worldY + target.height))
  }

  superMario64CollisionRipoff(target: Entity) {
    if (player.RIGHT) {
      this.worldX = target.worldX - this.width - 1
      return
    } else if (player.LEFT) {
      this.worldX = target.worldX + target.width + 1
      return
    }

    if (player.DOWN) {
      this.worldY = target.worldY - this.height - 1
    } else if (player.UP) {
      this.worldY = target.worldY + target.height + 1
    }
  }

  move() {
  }
}
