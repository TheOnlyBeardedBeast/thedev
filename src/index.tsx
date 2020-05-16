import "es7-object-polyfill";
import "intersection-observer";

import { h, Fragment, hydrate, render } from "preact";
import { Initial } from "./Sections/Initial";
import { Indicator } from "./Modules/Indicator";
import { About } from "./Sections/About";
import { Experience } from "./Sections/Experience";
import { ShowCase } from "./Sections/ShowCase";
import { Contacts } from "./Modules/Contacts";

import "./normalize.css";
import "./Assets/Styles/Styles.scss";

const App = () => (
  <Fragment>
    <Initial />
    <About />
    <Experience />
    <ShowCase />
    <Indicator>
      <Contacts />
    </Indicator>
  </Fragment>
);

hydrate(<App />, document.getElementById("root"));
