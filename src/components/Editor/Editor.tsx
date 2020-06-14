import React, { memo, useCallback } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor as EditorComponent } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import useStyles from "./styles";

const toolbar = {
  options: ["inline", "blockType", "fontSize", "list", "textAlign", "emoji"],
  blockType: {
    inDropdown: true,
    options: ["Normal", "Blockquote", "Code"],
  },
  fontSize: {
    options: [12, 14, 16, 18],
  },
};
interface IEditorProps {
  value?: string;
  onChange: (arg: any) => void;
}

function Editor({ value = "<p></p>", onChange }: IEditorProps) {
  const contentBlock = htmlToDraft(value);
  const initialState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );
  const [editorState, setEditorState] = React.useState(
    EditorState.createWithContent(initialState)
  );
  const classes = useStyles();

  const handleChange = useCallback(
    (value: any) => {
      setEditorState(value);
      onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    },
    [editorState, onChange]
  );

  return (
    <div>
      <EditorComponent
        editorState={editorState}
        toolbarClassName={classes.toolbar}
        editorClassName={classes.editor}
        onEditorStateChange={handleChange}
        toolbar={toolbar}
      />
    </div>
  );
}
export default memo(Editor);
