import React, { useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ToolbarContext from '../../../context/ToolbarContext';
import ColorPicker from '../../../ui/ColorPicker';

const TextColorPicker = () => {
  const { fontColor, applyStyleText } = useContext(ToolbarContext);
  const { t } = useTranslation('toolbar');

  const onFontColorSelect = useCallback(
    (value: string) => {
      applyStyleText({ color: value });
    },
    [applyStyleText]
  );

  return (
    <ColorPicker
      buttonClassName="verbum-toolbar-item verbum-color-picker"
      buttonAriaLabel={t('toolbar:textColorPicker.Description')}
      buttonIconClassName="verbum-icon verbum-font-color"
      color={fontColor}
      onChange={onFontColorSelect}
      title="text color"
    />
  );
};

export default TextColorPicker;
