import React from "react";

export default function Variable(props) {
  const { text, variable } = props.data;
  let linkName;
  if (props.section === "Open = High") linkName = "open_high_params";
  if (props.section === "CCI Reversal") linkName = "cci_params";
  if (props.section === "RSI Overbought") linkName = "rsi_params";

  let displayText = text;

  Object.entries(variable).forEach(([key, value]) => {
    const variableValue = value.values ? value.values[0] : value.default_value;
    const numericKey = key[1]; //remove dollar sign
    const linkTag = `<a href=${linkName}_${numericKey}>${variableValue}</a>`;
    displayText = displayText.replace(key, linkTag);
  });

  return <p dangerouslySetInnerHTML={{ __html: displayText }} />;
}
