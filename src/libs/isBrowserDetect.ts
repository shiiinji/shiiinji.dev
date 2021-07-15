export const isBrowserDetect = () =>
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
