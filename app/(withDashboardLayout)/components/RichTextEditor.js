"use client";
import React, { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const RichTextEditor = ({
  placeholder = "Start typing...",
  value = "",
  onChange,
  config: customConfig = {},
}) => {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder,
      ...customConfig,
    }),
    [placeholder, customConfig]
  );

  const handleBlur = (newContent) => {
    if (onChange) {
      onChange(newContent);
    }
  };

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      onBlur={(newContent) => handleBlur(newContent)}
      onChange={() => {}}
    />
  );
};

export default RichTextEditor;
