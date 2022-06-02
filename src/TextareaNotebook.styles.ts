import { CSSProperties } from "react";
import { TextAreaCustomProps } from "./TextareaNotebook.types";

const defaultValues: Required<TextAreaCustomProps> = {
  verticalLineColor: "#d0a090",
  lineColor: "#fcf9cc",
  lineBorderColor: "#ccd",
  verticalLineWidth: 2,
  fontSize: 18,
  marginLeft: 50,
};

export type InputStyleBuilderType = TextAreaCustomProps;

const gradientBuilder = (
  verticalLineColor: string,
  lineColor: string,
  lineBorderColor: string,
  lineHeight: number
) => {
  return `linear-gradient(90deg, ${verticalLineColor}, ${verticalLineColor}), linear-gradient(   ${lineColor} ${
    lineHeight - 2
  }px, ${lineBorderColor} 2px)`;
};

export const buildTextAreaStyle = (
  params: InputStyleBuilderType,
  extraStyles: CSSProperties = {}
): CSSProperties => {
  const paramsWithDefaults = {
    ...defaultValues,
    ...params,
  } as Required<TextAreaCustomProps>;

  const lineHeight = paramsWithDefaults.fontSize * 1.5;

  const backgroundImage = gradientBuilder(
    paramsWithDefaults.verticalLineColor,
    paramsWithDefaults.lineColor,
    paramsWithDefaults.lineBorderColor,
    lineHeight
  );

  return {
    backgroundImage,
    backgroundSize: `${paramsWithDefaults.verticalLineWidth}px 100%, 100% ${lineHeight}px`,
    backgroundPosition: `${paramsWithDefaults.marginLeft - 10}px top, left 0px`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundAttachment: "local",
    lineHeight: `${lineHeight}px`,
    paddingLeft:
      paramsWithDefaults.marginLeft + paramsWithDefaults.verticalLineWidth,
    fontSize: paramsWithDefaults.fontSize,
    resize: "none",
    border: "none",
    ...extraStyles,
  };
};
