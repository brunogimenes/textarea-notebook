import React, { FC } from "react";
import { TextAreaCustomProps } from "./InputWithLines.types";
declare type TextareaNotebookProps = {
    options?: TextAreaCustomProps;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
declare const TextareaNotebook: FC<TextareaNotebookProps>;
export default TextareaNotebook;
