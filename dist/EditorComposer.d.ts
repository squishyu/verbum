import { InitialEditorStateType } from '@lexical/react/LexicalComposer';
import React from 'react';
import './EditorComposer.css';
interface IEditorComposer {
    children: React.ReactElement;
    initialEditorState?: InitialEditorStateType;
}
declare const EditorComposer: ({ children, initialEditorState }: IEditorComposer) => JSX.Element;
export default EditorComposer;
