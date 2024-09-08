import { ImageEditor } from "./src/ImageEditor";
import { usage } from "./src/Printer";

const main = () => {
  const args = process.argv.slice(2);
  if (args.length < 3) {
    usage();
    return;
  }

  const [inputFile, outputFile, filter, blurLength] = args;

  const imageEditor = new ImageEditor();
  imageEditor.run(process.argv.slice(2));
};

main();
