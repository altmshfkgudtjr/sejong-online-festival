/**
 * 문서에 Scroll 적용
 */
export const enableDocumentScrolled = () => {
  document.querySelector('html').removeAttribute('style');
  document.querySelector('body').removeAttribute('style');
};

/**
 * 문서에 Scroll 해제
 */
export const disableDocumentScrolled = () => {
  document.querySelector('html').style.position = 'relative';
  document.querySelector('html').style.overflowY = 'hidden';
  document.querySelector('body').style.position = 'relative';
  document.querySelector('body').style.overflowY = 'hidden';
};

/**
 * 문서 ScrollTop 반환
 */
export const getScrollTop = () => {
  return Math.max(document.documentElement.scrollTop, document.body.scrollTop, window.scrollY);
};
