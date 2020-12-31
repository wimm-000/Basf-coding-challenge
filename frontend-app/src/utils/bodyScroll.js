export const removeBodyScroll = () => {
  const body = document.querySelector("body");
  const html = document.querySelector("html");
  body.classList.add("remove-scroll");
  html.classList.add("remove-scroll");
};

export const addBodyScroll = () => {
  const body = document.querySelector("body");
  const html = document.querySelector("html");
  body.classList.remove("remove-scroll");
  html.classList.remove("remove-scroll");
};
