import { FORMAT_TEXT_COMMAND } from 'lexical';
import React, { useContext } from 'react';
import DropDown from '../../../ui/DropDown';
import EditorContext from '../../../context/EditorContext';
import ToolbarContext from '../../../context/ToolbarContext';
import { useTranslation } from 'react-i18next';

const TextFormatDropdown = () => {
  const { activeEditor } = useContext(EditorContext);
  const { isStrikethrough, isSubscript, isSuperscript } =
    useContext(ToolbarContext);
  const { t } = useTranslation('toolbar');
  return (
    <DropDown
      buttonClassName="verbum-toolbar-item spaced"
      buttonLabel=""
      buttonAriaLabel={t('toolbar:textFormatDropdown.Description')}
      buttonIconClassName="verbum-icon verbum-dropdown-more"
    >
      <button
        onClick={() => {
          activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
        }}
        className={
          'item ' + (isStrikethrough ? 'active dropdown-item-active' : '')
        }
        title={t('toolbar:textFormatDropdown.Options.Strikethrough.Label')}
        aria-label={t(
          'toolbar:textFormatDropdown.Options.Strikethrough.Description'
        )}
        type="button"
      >
        <i className="verbum-icon verbum-strikethrough" />
        <span className="verbum-text">
          {t('toolbar:textFormatDropdown.Options.Strikethrough.Label')}
        </span>
      </button>
      <button
        onClick={() => {
          activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'subscript');
        }}
        className={'item ' + (isSubscript ? 'active dropdown-item-active' : '')}
        title={t('toolbar:textFormatDropdown.Options.Subscript.Label')}
        aria-label={t(
          'toolbar:textFormatDropdown.Options.Subscript.Description'
        )}
        type="button"
      >
        <i className="verbum-icon verbum-subscript" />
        <span className="verbum-text">
          {t('toolbar:textFormatDropdown.Options.Subscript.Label')}
        </span>
      </button>
      <button
        onClick={() => {
          activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'superscript');
        }}
        className={
          'item ' + (isSuperscript ? 'active dropdown-item-active' : '')
        }
        title={t('toolbar:textFormatDropdown.Options.Superscript.Label')}
        aria-label={t(
          'toolbar:textFormatDropdown.Options.Superscript.Description'
        )}
        type="button"
      >
        <i className="verbum-icon verbum-superscript" />
        <span className="verbum-text">
          {t('toolbar:textFormatDropdown.Options.Superscript.Label')}
        </span>
      </button>
    </DropDown>
  );
};

export default TextFormatDropdown;
