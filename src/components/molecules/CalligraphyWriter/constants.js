/**
 * Constants for CalligraphyWriter component
 */

export const LAYOUT_CONFIG = {
  MAX_ELEMENTS_IN_ROW: {
    MOBILE: 33,
    DESKTOP: 50
  },
  MOBILE_DEVICES: ['android', 'ios'],
  SUPPORTED_LOCALES: ['ja', 'en']
};

export const CSS_CLASSES = {
  CONTAINER: {
    KANJI: 'rs-calligraphy-container-kanji',
    ALPHABET: 'rs-calligraphy-container-alphabet'
  },
  ROW: 'rs-calligraphy-container-en-row',
  ITEM: 'rs-calligraphy-item',
  GRID_ITEM: 'grid-item'
};

export const CSS_CUSTOM_PROPERTIES = {
  CONTAINER_HEIGHT: '--calligraphy-container-height',
  ROW_HEIGHT: '--calligraphy-row-height'
};
