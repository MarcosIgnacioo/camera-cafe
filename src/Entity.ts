import { canvasWidth, canvasHeight, TILE_WIDTH } from "./Globals";


export class Entity {
  public x: number;
  public y: number;

  public worldX: number;
  public worldY: number;
  public screenX: number;
  public screenY: number;

  public speed: number;
  public sprite: HTMLImageElement;

  public LEFT = false;
  public RIGHT = false;
  public UP = false;
  public DOWN = false;

  constructor(worldX: number, worldY: number, speed: number, sprite: HTMLImageElement) {
    this.worldX = worldX;
    this.worldY = worldY;
    this.screenX = worldX * 16 / 2
    this.screenY = worldY * 16 / 2
    this.speed = speed;
    this.sprite = sprite;
  }

  checkBounds() {
    if (this.screenX <= 0) {
      this.x = 0;
    }
    if (this.screenY <= 0) {
      this.y = 0;
    }
    if (this.screenX + this.sprite.width >= canvasWidth) {
      this.screenX = canvasWidth - this.sprite.width;
    }
    if (this.screenX + this.sprite.height >= canvasHeight) {
      this.screenY = canvasHeight - this.sprite.height
    }
  }
  move() {

  }
}
