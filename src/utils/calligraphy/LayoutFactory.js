import { CSS_CLASSES } from './constants';

/**
 * Factory for creating layout components based on locale
 * Follows the Factory pattern for creating appropriate layout strategies
 */
export const LayoutFactory = {
  /**
   * Creates a layout component based on the provided locale
   * 
   * @param {string} locale - The locale ('ja' or 'en')
   * @returns {Object} Layout configuration object
   */
  createLayout: (locale) => {
    const layouts = {
      ja: {
        containerClass: CSS_CLASSES.CONTAINER.KANJI,
        component: 'JapaneseLayout'
      },
      en: {
        containerClass: CSS_CLASSES.CONTAINER.ALPHABET,
        component: 'AlphabetLayout'
      }
    };

    return layouts[locale] || layouts.en;
  },

  /**
   * Gets the appropriate container class for the given locale
   * 
   * @param {string} locale - The locale ('ja' or 'en')
   * @param {string} customClassName - Optional custom class name
   * @returns {string} Container class name
   */
  getContainerClass: (locale, customClassName = null) => {
    if (customClassName) {
      return customClassName;
    }

    const layout = LayoutFactory.createLayout(locale);
    return layout.containerClass;
  }
};
