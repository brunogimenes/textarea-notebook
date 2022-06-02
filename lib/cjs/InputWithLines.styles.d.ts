import { CSSProperties } from "react";
import { TextAreaCustomProps } from "./InputWithLines.types";
export declare type InputStyleBuilderType = TextAreaCustomProps;
export declare const buildTextAreaStyle: (params: InputStyleBuilderType, extraStyles?: CSSProperties) => CSSProperties;
