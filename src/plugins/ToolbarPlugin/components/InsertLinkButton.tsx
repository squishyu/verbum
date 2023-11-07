import React from 'react';
import { useContext } from 'react';
import EditorContext from '../../../context/EditorContext';
import ToolbarContext from '../../../context/ToolbarContext';
import FloatingLinkEditor from './FloatingLinkEditor';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

const InsertLinkButton = () => {
  const { activeEditor } = useContext(EditorContext);
  const { isLink, insertLink } = useContext(ToolbarContext);
  const { t } = useTranslation('toolbar');

  return (
    <>
      <button
        onClick={insertLink}
        className={'verbum-toolbar-item spaced ' + (isLink ? 'active' : '')}
        aria-label={t('toolbar:insertLinkButton.Description')}
        title={t('toolbar:insertLinkButton.Description')}
        type="button"
      >
        <i className="verbum-format verbum-link" />
      </button>
      {isLink &&
        createPortal(
          <FloatingLinkEditor editor={activeEditor} />,
          document.body
        )}
    </>
  );
};

export default InsertLinkButton;
