import React from 'react';
interface IToolbarContext {
    isRTL: boolean;
    isBold: boolean;
    isItalic: boolean;
    isUnderline: boolean;
    isCode: boolean;
    isLink: boolean;
    isStrikethrough: boolean;
    isSubscript: boolean;
    isSuperscript: boolean;
    canUndo: boolean;
    canRedo: boolean;
    fontFamily: string;
    fontSize: string;
    fontColor: string;
    bgColor: string;
    blockType: string;
    codeLanguage: string;
    selectedElementKey: string;
    applyStyleText: (styles: Record<string, string>) => void;
    insertLink: () => void;
}
declare const ToolbarContext: React.Context<IToolbarContext>;
export default ToolbarContext;
