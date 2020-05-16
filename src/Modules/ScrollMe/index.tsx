import { h, FunctionComponent } from "preact";
import "./Style.scss";

interface ScrollMeProps {
  onClick?: () => void;
}

export const ScrollMe: FunctionComponent<ScrollMeProps> = ({ onClick }) => (
  <div onClick={onClick} class="scroll-me" />
);
