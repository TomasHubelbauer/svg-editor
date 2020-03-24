# [SVG Editor](https://tomashubelbauer.github.io/svg-editor)

A tool for tree-based SVG document construction and manipulation.

## To-Do

### Add handles for control points of the various shapes

### Reconcile SVG DOM changes with the control elements instead of rerendering

### Add labels to the control elements

### Use tailored editors for special attributes (such as `fill` and `stroke`)

### Have proper limits on scalar attributes (numbers, string enums)

### Add viewport panning and scaling

### Add a checkerboard pattern to the viewport background

### Add a source edit mode

Initially, replace the SVG DOM string completely. Later on, diff the source code
changes and derive DOM changes to minimize the altered area.

### Hook up the meta section for SVG meta controls (width, height, viewport)

### Add syntax highlighting to the SVG source code editor

### Sync source code back to the editor without messing up focus and syntax
