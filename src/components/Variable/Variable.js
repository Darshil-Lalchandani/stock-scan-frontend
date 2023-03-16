import React from "react";

export default function Variable(props) {
  const { text, variable } = props.data;
  let displayText = text;

  Object.entries(variable).forEach(([key, value]) => {
    const variableValue = value.values ? value.values[0] : value.default_value;
    const linkTag = `<a href="#">${variableValue}</a>`;
    displayText = displayText.replace(key, linkTag);
  });

  return <p dangerouslySetInnerHTML={{ __html: displayText }} />;
}
