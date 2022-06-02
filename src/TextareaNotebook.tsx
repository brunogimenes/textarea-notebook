import React, { FC } from "react";
import { buildTextAreaStyle } from "./TextareaNotebook.styles";
import { TextAreaCustomProps } from "./TextareaNotebook.types";

type TextareaNotebookProps = {
  options?: TextAreaCustomProps;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaNotebook: FC<TextareaNotebookProps> = (props) => {
  const { options = {}, ...inputProps } = props;

  const styles = buildTextAreaStyle(options, inputProps.style);

  return <textarea {...inputProps} style={styles} />;
};

export default TextareaNotebook;
