import scrollToElement from "scroll-to-element";

export const scrollTo = (element: string) => () => {
  scrollToElement("#" + element, { duration: 100, ease: "linear" });
};
