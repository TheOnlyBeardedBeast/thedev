import { h, Component } from "preact";

import { Menu, IMenuItem } from "../Modules/Menu";
import { scrollTo } from "../Utils";
import { ScrollMe } from "../Modules/ScrollMe";
import "./Initial.scss";



export class Initial extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <section className="initial dark" id="introduction">
        <h1 class="initial-title">
          <a href="/">The DEV</a>
        </h1>
        <Menu items={menuItems} />
        <p class="initial-paragraph">
          <span>Hi, I am</span> Mark
          <br />
          <span>Web & Mobile developer,</span>
          <br />
          <span>based in Slovakia.</span>
        </p>

        <ScrollMe onClick={scrollTo("about")} />
      </section>
    );
  }
}

const menuItems: IMenuItem[] = [
  {
    title: "About",
    id: "about",
  },
  {
    title: "Experience",
    id: "experience",
  },
  {
    title: "Showcase",
    id: "showcase",
  },
];
