export const removeOverflowHiddenFromBody = () => {
  const body = document.querySelector('body')!;
  body.classList.remove('overflow-hidden');
};

export const addOverflowHiddenToBody = (paddingRight = '') => {
  const body = document.querySelector('body')!;
  body.classList.add('overflow-hidden');
  paddingRight !== '' && (body.style.paddingRight = paddingRight);
};
