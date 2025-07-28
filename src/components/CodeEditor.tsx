'use client'

import Editor from '@monaco-editor/react'

interface CodeEditorProps {
  language: string
  code: string
  onChange: (value: string | undefined) => void
}

export default function CodeEditor({ language, code, onChange }: CodeEditorProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Editor
        height="400px"
        defaultLanguage={language}
        defaultValue={code}
        onChange={onChange}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
        }}
      />
    </div>
  )
}
