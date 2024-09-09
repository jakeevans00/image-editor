import Image from "./Image";
import Color from "./Color";

export const usage = () => {
  console.log(
    "USAGE: npm start <in-file> <out-file> <grayscale|invert|emboss|motionblur> {motion-blur-length}"
  );
};

export const parseImage = (arr: string[]) => {
  let image: Image;

  try {
    let index = 0;
    index++;

    const width = Number(arr[index++]);
    const height = Number(arr[index++]);

    image = new Image(width, height);
    index++;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let color = new Color();
        color.red = Number(arr[index++]);
        color.green = Number(arr[index++]);
        color.blue = Number(arr[index++]);
        image.set(x, y, color);
      }
    }
  } catch (err) {
    console.log("Error in parseImage");
    throw err;
  }

  return image;
};

export const convertImage = (image: Image, format: string) => {
  const width = image.getWidth();
  const height = image.getHeight();

  let data: string[] = [];
  data.push(`P3\n${width} ${height} 255\n`);

  for (let y = 0; y < image.getHeight(); y++) {
    for (let x = 0; x < image.getWidth(); x++) {
      const color = image.get(x, y);
      data.push(
        `${x === 0 ? "" : " "}${color.red} ${color.green} ${color.blue}`
      );
    }
    data.push("\n");
  }

  return data.join("");
};
