import React, { memo, useCallback } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor as EditorComponent } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
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
  onChange: (arg: any) => void;
}

function Editor({ onChange }: IEditorProps) {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
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
