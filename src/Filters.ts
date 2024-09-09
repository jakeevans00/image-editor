import Image from "./Image";

const grayscale = (image: Image) => {
  let update = new Image(image.getWidth(), image.getHeight());

  for (let x = 0; x < update.getWidth(); x++) {
    for (let y = 0; y < update.getHeight(); y++) {
      let currColor = image.get(x, y);

      //Check here
      let grayLevel = Math.floor(
        (currColor.red + currColor.green + currColor.blue) / 3
      );
      grayLevel = Math.max(0, Math.min(grayLevel, 255));

      currColor.red = grayLevel;
      currColor.green = grayLevel;
      currColor.blue = grayLevel;

      update.set(x, y, currColor);
    }
  }
  return update;
};

const invert = (image: Image) => {
  let update = new Image(image.getWidth(), image.getHeight());
  for (let x = 0; x < image.getWidth(); ++x) {
    for (let y = 0; y < image.getHeight(); ++y) {
      let currColor = image.get(x, y);

      currColor.red = 255 - currColor.red;
      currColor.green = 255 - currColor.green;
      currColor.blue = 255 - currColor.blue;

      update.set(x, y, currColor);
    }
  }

  return update;
};

const emboss = (image: Image) => {
  let update = new Image(image.getWidth(), image.getHeight());

  for (let x = update.getWidth() - 1; x >= 0; --x) {
    for (let y = update.getHeight() - 1; y >= 0; --y) {
      let currColor = image.get(x, y);

      let diff = 0;
      if (x > 0 && y > 0) {
        let upLeftColor = image.get(x - 1, y - 1);
        if (Math.abs(currColor.red - upLeftColor.red) > Math.abs(diff)) {
          diff = currColor.red - upLeftColor.red;
        }
        if (Math.abs(currColor.green - upLeftColor.green) > Math.abs(diff)) {
          diff = currColor.green - upLeftColor.green;
        }
        if (Math.abs(currColor.blue - upLeftColor.blue) > Math.abs(diff)) {
          diff = currColor.blue - upLeftColor.blue;
        }
      }

      let grayLevel = 128 + diff;
      grayLevel = Math.max(0, Math.min(grayLevel, 255));
      currColor.red = grayLevel;
      currColor.green = grayLevel;
      currColor.blue = grayLevel;

      update.set(x, y, currColor);
    }
  }
  return update;
};

const motionblur = (image: Image, length?: number) => {
  if (!length || length < 1) {
    throw new Error(
      "Invalid parameters provided, please provide a numeric 'length'"
    );
  }

  let resultImage = new Image(image.getWidth(), image.getHeight());

  for (let x = 0; x < image.getWidth(); ++x) {
    for (let y = 0; y < image.getHeight(); ++y) {
      let currColor = image.get(x, y);
      let maxX = Math.max(image.getWidth() - 1, x + length - 1);
      for (let i = x + 1; i <= maxX; ++i) {
        let tempColor = image.get(i, y);
        currColor.red += tempColor.red;
        currColor.green += tempColor.green;
        currColor.blue += tempColor.blue;
      }

      const delta = maxX - x + 1;
      currColor.red /= Math.floor(delta);
      currColor.green /= Math.floor(delta);
      currColor.blue /= Math.floor(delta);
    }
  }

  return resultImage;
};

export const filters: {
  [key: string]: (image: Image, length?: number) => Image;
} = {
  grayscale: grayscale,
  invert: invert,
  emboss: emboss,
  motionblur: motionblur,
};
