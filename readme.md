## textarea-notebook - A ReactJS component

Use notebook like styles in your textarea components.
It will auto adapt line sizes according to the `font-size`.

### Live Demo

https://brunogimenes.github.io/textarea-notebook


![](https://brunogimenes.github.io/textarea-notebook/assets/example-1.png)

### Install

#### npm

    npm install textarea-notebook

#### yarn

    yarn textarea-notebook

### Usage

    import { TextareaNotebook } from "textarea-notebook";

    <TextareaNotebook
        value={value}
        onChange={(e) => setValue(e.target.value}}
        style={{
            minHeight: 400,
        }}
        options={{
    		verticalLineColor: "#d0a090",
    		lineColor: "#fcf9cc",
    		lineBorderColor: "#ccd",
    		verticalLineWidth: 2,
    		fontSize: 18,
    		marginLeft: 50,
    	}}
    />

#### Options

You can customize colors, margins and sizes using the **options** attribute of the component.

**TextareaNotebook** accepts all the same props as a regular **textarea** element, like *value*, *onChange*, *style*, *className*, etc...

| Property          | Type   | Description                                                                                                                                                                       | Default   |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| verticalLineColor | string | The left vertical line color                                                                                                                                                      | "#d0a090" |
| lineColor         | string | The horizontal lines background                                                                                                                                                   | "#fcf9cc" |
| lineBorderColor   | string | The horizontal lines border color                                                                                                                                                 | "#ccd"    |
| verticalLineWidth | number | The width of the left vertial line                                                                                                                                                | 2         |
| fontSize          | number | The fontSize for the component. line-height will be calculated based on this value. If you use custom classes or styles, be sure to use the same value here as the computed style | 18,       |
| marginLeft        | number | The margin between the left of the element and the text. Also defines where the vertical line will be                                                                                  | 50        |

