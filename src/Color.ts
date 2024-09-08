export default class Color {
  red: number = 0;
  green: number = 0;
  blue: number = 0;

  constructor();
  constructor(red: number, green: number, blue: number);

  constructor(red?: number, green?: number, blue?: number) {
    this.red = red ?? 0;
    this.green = green ?? 0;
    this.blue = blue ?? 0;
  }
}
