import React from "react";
import Editor, { OnChange } from "@monaco-editor/react";

interface MonacoEditorProps {
  value: string;
  onChange: OnChange;
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({ value, onChange }) => {
  return (
    <Editor
      height="90vh"
      defaultLanguage="html"
      defaultValue={value}
      onChange={onChange}
    />
  );
};

export default MonacoEditor;
