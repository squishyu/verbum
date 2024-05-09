/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as React from 'react';
import './ToolbarPlugin.css';
declare type ToolbarProps = {
    children?: React.ReactElement | React.ReactElement[];
    defaultFontSize?: string; /** The default selected font size in the toolbar */
    defaultFontColor?: string; /** The default selected font color in the toolbar */
    defaultBgColor?: string; /** The default selected background color in the toolbar */
    defaultFontFamily?: string; /** The default selected font family in the toolbar */
    disableBlockTypeSelect?: boolean;
};
declare const ToolbarPlugin: ({ children, defaultFontSize, defaultFontColor, defaultBgColor, defaultFontFamily, disableBlockTypeSelect }: ToolbarProps) => JSX.Element;
export default ToolbarPlugin;
