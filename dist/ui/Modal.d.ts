/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="react" />
import './Modal.css';
export default function Modal({ onClose, children, title, closeOnClickOutside, }: {
    children: JSX.Element | string | (JSX.Element | string)[];
    closeOnClickOutside?: boolean;
    onClose: () => void;
    title: string;
}): JSX.Element;
