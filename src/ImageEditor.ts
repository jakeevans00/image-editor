import Image from "./Image";
import { filters } from "./Filters";
import { usage, parseImage, convertImage } from "./Parser";
import { readFileSync, writeFileSync } from "fs";

export class ImageEditor {
  constructor() {}

  run = async (args: string[]): Promise<void> => {
    try {
      const image: Image = await this.read(args[0]);
      let updatedImage: Image = this.edit(image, args.slice(2));
      this.write(updatedImage, args[1]);
    } catch (e: any) {
      console.log(e.message);
      usage();
    }
  };

  read = (inputFile: string) => {
    const data = readFileSync(`media/source_images/${inputFile}`, "utf8")
      .split(" ")
      .slice(1);
    return parseImage(data);
  };

  write = (image: Image, outputFile: string) => {
    const data = convertImage(image, "PPM");
    writeFileSync(outputFile, data, "utf-8");
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
