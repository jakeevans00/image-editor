import { ImageEditor } from "./src/ImageEditor";
import { usage } from "./src/Parser";

const main = () => {
  const args = process.argv.slice(2);
  if (args.length < 3) {
    console.log("Not enough arguments, see 'USAGE', below");
    usage();
    return;
  }

  const imageEditor = new ImageEditor();
  imageEditor.run(args);
};

main();
