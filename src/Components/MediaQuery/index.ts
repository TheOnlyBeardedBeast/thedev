import { h, Component } from "preact";

interface IMediaQueryState {
  mql: MediaQueryList;
}

interface IMediaQueryProps {
  query: string;
}

export class MediaQuery extends Component<IMediaQueryProps, IMediaQueryState> {
  constructor(props: IMediaQueryProps) {
    super(props);

    this.state = {
      mql: window.matchMedia(this.props.query)
    };
  }

  componentDidMount() {
    this.state.mql.addEventListener("change", this.onMediaQueryChange);
  }

  onMediaQueryChange = () => {
    this.forceUpdate();
  };

  render() {
    if (!this.state.mql.matches) {
      return null;
    }

    return this.props.children;
  }
}
