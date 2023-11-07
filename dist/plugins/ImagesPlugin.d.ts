/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="react" />
import { LexicalCommand, LexicalEditor } from 'lexical';
import { ImagePayload } from '../nodes/ImageNode';
export declare type InsertImagePayload = Readonly<ImagePayload>;
export declare const CAN_USE_DOM: boolean;
export declare const INSERT_IMAGE_COMMAND: LexicalCommand<InsertImagePayload>;
export declare function InsertImageUriDialogBody({ onClick, }: {
    onClick: (payload: InsertImagePayload) => void;
}): JSX.Element;
export declare function InsertImageUploadedDialogBody({ onClick, }: {
    onClick: (payload: InsertImagePayload) => void;
}): JSX.Element;
export declare const InsertImageDialog: ({ activeEditor, onClose, }: {
    activeEditor: LexicalEditor;
    onClose: () => void;
}) => JSX.Element;
export default function ImagesPlugin({ captionsEnabled, maxWidth, }: {
    captionsEnabled?: boolean;
    maxWidth?: number;
}): JSX.Element | null;
declare global {
    interface DragEvent {
        rangeOffset?: number;
        rangeParent?: Node;
    }
}
