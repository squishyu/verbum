/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ReactNode } from 'react';
import { LexicalEditor } from 'lexical';
interface IEditorProps {
    children?: ReactNode;
    hashtagsEnabled?: boolean;
    autoFocusEnabled?: boolean;
    autoLinkEnabled?: boolean;
    emojisEnabled?: boolean;
    actionsEnabled?: boolean;
    speechToTextEnabled?: boolean;
    placeholder?: string;
    listMaxIndent?: number;
    isEditable?: boolean;
    locale?: 'en' | 'fr' | 'ptBr' | 'ru' | null;
    onChange?: (editorState: string, editorInstance?: LexicalEditor) => void;
}
declare const Editor: ({ children, hashtagsEnabled, autoFocusEnabled, autoLinkEnabled, emojisEnabled, actionsEnabled, speechToTextEnabled, listMaxIndent, placeholder, isEditable, locale, onChange, }: IEditorProps) => JSX.Element;
export default Editor;
