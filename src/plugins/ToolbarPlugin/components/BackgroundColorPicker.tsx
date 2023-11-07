import React, { useCallback, useContext } from 'react';
import ToolbarContext from '../../../context/ToolbarContext';
import ColorPicker from '../../../ui/ColorPicker';
import { useTranslation } from 'react-i18next';

const BackgroundColorPicker = () => {
  const { bgColor, applyStyleText } = useContext(ToolbarContext);
  const { t } = useTranslation('toolbar');

  const onBgColorSelect = useCallback(
    (value: string) => {
      applyStyleText({ 'background-color': value });
    },
    [applyStyleText]
  );

  return (
    <ColorPicker
      buttonClassName="verbum-toolbar-item verbum-color-picker"
      buttonAriaLabel={t('toolbar:backgroundColorPicker.Description')}
      buttonIconClassName="verbum-icon verbum-bg-color"
      color={bgColor}
      onChange={onBgColorSelect}
      title="bg color"
    />
  );
};

export default BackgroundColorPicker;
