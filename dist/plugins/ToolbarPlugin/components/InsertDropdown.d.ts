import React from 'react';
export interface IInsertDropdownProps {
    enableTable?: boolean;
    enableYoutube?: boolean;
    enableTwitter?: boolean;
    enablePoll?: boolean;
    enableImage?: {
        enable: boolean;
        maxWidth: number;
    };
    enableEquations?: boolean;
    enableExcalidraw?: boolean;
    enableHorizontalRule?: boolean;
    enableStickyNote?: boolean;
}
declare const InsertDropdown: React.FC<IInsertDropdownProps>;
export default InsertDropdown;
