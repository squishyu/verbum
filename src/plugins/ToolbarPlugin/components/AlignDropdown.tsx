import React, { useContext } from 'react';
import DropDown from '../../../ui/DropDown';

import {
  FORMAT_ELEMENT_COMMAND,
  INDENT_CONTENT_COMMAND,
  LexicalEditor,
  OUTDENT_CONTENT_COMMAND,
} from 'lexical';
import EditorContext from '../../../context/EditorContext';
import ToolbarContext from '../../../context/ToolbarContext';
import { useTranslation } from 'react-i18next';

function Divider(): JSX.Element {
  return <div className="verbum-divider" />;
}

const AlignDropdown = () => {
  const { activeEditor } = useContext(EditorContext);
  const { isRTL } = useContext(ToolbarContext);
  const { t } = useTranslation('toolbar');
  return (
    <DropDown
      buttonLabel={t('toolbar:alignDropdown.Title')}
      buttonAriaLabel={t('toolbar:alignDropdown.Description')}
      buttonClassName="verbum-toolbar-item spaced alignment"
      buttonIconClassName="verbum-icon verbum-left-align"
    >
      <button
        onClick={() => {
          activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
        }}
        className="verbum-item"
        type="button"
      >
        <i className="verbum-icon verbum-left-align" />
        <span className="verbum-text">{t('toolbar:alignDropdown.LeftAlign')}</span>
      </button>
      <button
        onClick={() => {
          activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
        }}
        className="verbum-item"
        type="button"
      >
        <i className="verbum-icon verbum-center-align" />
        <span className="verbum-text">{t('toolbar:alignDropdown.CenterAlign')}</span>
      </button>
      <button
        onClick={() => {
          activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
        }}
        className="verbum-item"
        type="button"
      >
        <i className="verbum-icon verbum-right-align" />
        <span className="verbum-text">{t('toolbar:alignDropdown.RightAlign')}</span>
      </button>
      <button
        onClick={() => {
          activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
        }}
        className="verbum-item"
        type="button"
      >
        <i className="verbum-icon verbum-justify-align" />
        <span className="verbum-text">{t('toolbar:alignDropdown.JustifyAlign')}</span>
      </button>
      <Divider />
      <button
        onClick={() => {
          activeEditor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined);
        }}
        className="verbum-item"
        type="button"
      >
        <i className={'icon ' + (isRTL ? 'indent' : 'outdent')} />
        <span className="verbum-text">{t('toolbar:alignDropdown.Outdent')}</span>
      </button>
      <button
        onClick={() => {
          activeEditor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined);
        }}
        className="verbum-item"
        type="button"
      >
        <i className={'icon ' + (isRTL ? 'outdent' : 'indent')} />
        <span className="verbum-text">{t('toolbar:alignDropdown.Indent')}</span>
      </button>
    </DropDown>
  );
};

export default AlignDropdown;
