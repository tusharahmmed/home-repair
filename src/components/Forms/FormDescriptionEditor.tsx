import React, {useEffect, useState} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

type IProps = {editorData: any; setEditorData: any; label: string};

const FormDescriptionEditor = ({editorData, setEditorData, label}: IProps) => {
  const [editorRef, setEditorRef] = useState<any>(null);

  useEffect(() => {
    if (editorRef) {
      editorRef?.ui
        ?.getEditableElement()
        ?.parentElement?.insertBefore(
          editorRef?.ui?.view?.toolbar?.element,
          editorRef?.ui?.getEditableElement()
        );
    }
  }, [editorRef]);

  return (
    <div>
      {label ? label : null}
      <CKEditor
        ref={editorRef}
        onReady={(editor: any) => {
          setEditorRef(editor);
        }}
        editor={DecoupledEditor}
        data={editorData}
        onChange={(event: any, editor: {getData: () => any}) => {
          const data = editor.getData();
          setEditorData(data);
        }}
      />
    </div>
  );
};

export default FormDescriptionEditor;
