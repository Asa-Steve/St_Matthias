import React, { useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styled from "styled-components";

const EditorContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  max-width: 700px;
  margin: 40px auto;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  background: #fafafa;
`;

const Button = styled.button`
  background: ${(props) => (props.active ? "#007bff" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.active ? "#006ae6" : "#f0f0f0")};
  }
`;

const Content = styled.div`
  padding: 15px;
  min-height: 200px;
  font-size: 16px;
  line-height: 1.6;

  p {
    margin: 0 0 1em 0;
  }

  h2 {
    font-size: 20px;
    margin-top: 16px;
  }
`;

const TiptapEditor = () => {
  // Always call hooks at top level
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing your post...</p>",
  });

  // Keep reference for cleanup
  const editorRef = useRef(editor);

  useEffect(() => {
    return () => {
      if (editorRef.current) editorRef.current.destroy();
    };
  }, []);

  if (!editor) return null;

  return (
    <EditorContainer>
      <Toolbar>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
        >
          Bold
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
        >
          Italic
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive("strike")}
        >
          Strike
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          active={editor.isActive("heading", { level: 2 })}
        >
          H2
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
        >
          • List
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
        >
          1. List
        </Button>
      </Toolbar>

      <Content>
        <EditorContent editor={editor} />
      </Content>
    </EditorContainer>
  );
};

export default React.memo(TiptapEditor);
