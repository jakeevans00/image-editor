import Image from "./Image";
import { usage } from "./Printer";

export class ImageEditor {
  constructor() {}

  run = (args: string[]): void => {
    try {
      const image: Image = this.read(args[0]);
      let updatedImage: Image = this.edit(image, args.slice(2));
      this.write(updatedImage, args[1]);
    } catch (e) {
      console.log(e);
      usage();
    }
  };

  read = (inputFile: string) => {
    return new Image(0, 0);
  };

  write = (image: Image, outputFile: string) => {
    console.log("in write, done!");
  };

  edit = (image: Image, commands: string[]) => {
    const filter = commands[0];
    const length = Number(commands[1]) ?? -1;
    const applyFilter = filters[filter];

    if (applyFilter) {
      return applyFilter(image, length);
    } else {
      throw new Error(`Invalid transform function provided: ${filter}`);
    }
  };
}

const grayscale = (image: Image) => {
  console.log("in grayscale");
  return new Image(0, 0);
};

const invert = (image: Image) => {
  return new Image(0, 0);
};

const emboss = (image: Image) => {
  return new Image(0, 0);
};

const motionblur = (image: Image, length?: number) => {
  if (!length || length < 1) {
    throw new Error(
      "Invalid parameters provided, please provide a numeric 'length'"
    );
  }
  return new Image(0, 0);
};

const filters: { [key: string]: (image: Image, length?: number) => Image } = {
  grayscale: grayscale,
  invert: invert,
  emboss: emboss,
  motionblur: motionblur,
};
