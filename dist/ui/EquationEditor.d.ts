/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="react" />
import './EquationEditor.css';
declare type BaseEquationEditorProps = {
    equation: string;
    inline: boolean;
    inputRef: {
        current: null | HTMLInputElement | HTMLTextAreaElement;
    };
    setEquation: (string: any) => void;
};
export default function EquationEditor({ equation, setEquation, inline, inputRef, }: BaseEquationEditorProps): JSX.Element;
export {};
