import { Canvas } from "./Canvas";
import { canvasWidth, canvasHeight, TILE_WIDTH, burgerEnt, drawingCanvas, map, player } from "./Globals";
import { worldToScreen, worldToTile } from "./UtilityFunctions";


export class Entity {
  public x: number;
  public y: number;

  public worldX: number;
  public worldY: number;
  public screenX: number;
  public screenY: number;
  public color: string;

  public speed: number;
  public sprite: HTMLImageElement;
  public canvas: Canvas;

  public LEFT = false;
  public RIGHT = false;
  public UP = false;
  public DOWN = false;

  constructor(worldX: number, worldY: number, speed: number, sprite: HTMLImageElement, canvas: Canvas, color: string) {
    this.worldX = worldX;
    this.worldY = worldY;
    this.screenX = worldX * 16 / 2
    this.screenY = worldY * 16 / 2
    this.speed = speed;
    this.sprite = sprite;
    this.canvas = canvas;
    this.color = color;
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
  move() {
  }
}
