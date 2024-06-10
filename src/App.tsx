import React, { useState } from "react";
import MonacoEditor from "./components/MonacoEditor";

const App: React.FC = () => {
  const [code, setCode] = useState(
    `<h1 class="text-3xl text-green-700">CodeYogi</h1>`
  );

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || "");
  };

  return <MonacoEditor value={code} onChange={handleEditorChange} />;
};

export default App;
