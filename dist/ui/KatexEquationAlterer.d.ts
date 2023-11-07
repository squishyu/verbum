/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="react" />
import './KatexEquationAlterer.css';
declare type Props = {
    initialEquation?: string;
    onConfirm: (string: any, boolean: any) => void;
};
export default function KatexEquationAlterer({ onConfirm, initialEquation, }: Props): JSX.Element;
export {};
