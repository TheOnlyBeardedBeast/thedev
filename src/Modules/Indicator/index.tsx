import { h, Component, Fragment } from "preact";
import "./Indicator.scss";
import { scrollTo } from "../../Utils";

export class Indicator extends Component {
  state = {
    active: "introduction",
    sections: ["introduction", "about", "experience", "showcase"],
    topDots: 1,
    bottomDots: 3,
  };

  onIntersection: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
  ) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        this.setState({
          active: id,
          topDots: this.state.sections.indexOf(id) + 1,
          bottomDots:
            this.state.sections.length - this.state.sections.indexOf(id),
        });
      }
    }
  };

  componentDidMount = () => {
    const observer = new IntersectionObserver(this.onIntersection, {
      rootMargin: "-100px",
    });
    const sections = document.getElementsByTagName("section");
    [...sections].map((section) => observer.observe(section));
  };

  renderCenterDots = () => {
    return this.state.sections.map((section, i) => (
      <span
        tabIndex={0}
        onClick={scrollTo(section)}
        class={`indicator-dot${i === this.state.topDots - 1 ? " active" : ""}`}
      />
    ));
  };

  renderFullIndicator = () => {
    return (
      <div class="indicator">
        <span
          tabIndex={0}
          class="indicator-arrow up"
          disabled={this.state.topDots == 1}
          onClick={scrollTo(this.state.sections[this.state.topDots - 2])}
        />
        <div class="indicator-dots top bottom">{this.renderCenterDots()}</div>
        <span
          tabIndex={0}
          class="indicator-arrow down"
          disabled={this.state.topDots == this.state.sections.length}
          onClick={scrollTo(this.state.sections[this.state.topDots])}
        />
      </div>
    );
  };

  renderCompactIndicator = () => {
    return (
      <div class="indicator">
        {this.props.children}
        <div class="indicator-dots bottom">{this.renderCenterDots()}</div>
        <span class="indicator-number">
          0{this.state.topDots} | 0{this.state.sections.length}
        </span>
      </div>
    );
  };

  render = () => {
    if (this.props.children) {
      return this.renderCompactIndicator();
    }

    return this.renderFullIndicator();
  };
}
