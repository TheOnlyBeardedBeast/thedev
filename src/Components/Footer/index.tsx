import { h, FunctionComponent } from "preact";
import "./Style.scss";
import { Contacts } from "../../Modules/Contacts";

export const Footer: FunctionComponent = () => (
  <div className="footer">
    <p>© {new Date().getFullYear()} TheDEV.sk</p>
    <Contacts />
  </div>
);
