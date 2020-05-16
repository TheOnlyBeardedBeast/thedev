import { h, FunctionComponent } from "preact";

import "./Style.scss";
import { Button } from "../Button";

interface ICard {
  title: string;
  content: string;
  link: string;
}

export const Card: FunctionComponent<ICard> = ({ title, content, link }) => (
  <div class="card">
    <span className="card-title">{title}</span>
    <p className="secondary">{content}</p>
    <Button href={link} external={true}>More</Button>
  </div>
);
