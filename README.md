# Image Editor

Typescript application used to transform images in the Portable Pixel Map (PPM) format. Note that the standard is considered [an "egregiously inefficient" format](https://netpbm.sourceforge.net/doc/ppm.html).

Demostrates mathematical transformations including:

- Grayscale
- Invert
- Emboss
- Motionblur

Academic program used to demonstrate Typescript's developer-friendliness using solid software design principles.

### Example Usage:

1. `npm run build`
2. `node dist/Main.js <inputFile> <outputFile> <grayscale|emboss|invert|motionblur {length}>`

![Penguins](./media/source_images/Penguins.jpg)
![Penguins Inverted](/media/key_images/invert-Penguins.jpg)
