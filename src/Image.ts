import Color from "./Color";

export default class Image {
  pixels: Color[][];

  constructor(width: number, height: number) {
    this.pixels = Array(width)
      .fill(null)
      .map(() =>
        Array(height)
          .fill(null)
          .map(() => new Color())
      );
  }

  getWidth = () => {
    return this.pixels.length;
  };

  getHeight = () => {
    return this.pixels[0].length;
  };

  set = (x: number, y: number, c: Color) => {
    this.pixels[x][y] = c;
  };

  get = (x: number, y: number) => {
    return this.pixels[x][y];
  };
}
