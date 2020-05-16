import { h, Component } from "preact";
import "./style.scss";

interface TimeLineItem {
  date: string;
  content: string;
}

export interface TimeLineData {
  [year: string]: TimeLineItem[];
}

interface TimeLineProps {
  data: TimeLineData;
}

export class TimeLine extends Component<TimeLineProps> {
  constructor(props: TimeLineProps) {
    super(props);
  }

  renderEvent = (event: any) => {
    return (
      <li className="timeline-event">
        <span className="timeline-event-date">{event.date}</span>
        <p className="timeline-event-content">{event.content}</p>
      </li>
    );
  };

  renderYearEvents = (yearEvents: any) => {
    return yearEvents.map((event: any) => this.renderEvent(event));
  };

  renderYears = () => {
    return Object.entries(this.props.data).map(([key, value]) => (
      <li className="timeline-year">
        <span>{key}</span>
        <ul>{this.renderYearEvents(value)}</ul>
      </li>
    ));
  };

  render = () => {
    return <ul className="timeline">{this.renderYears()}</ul>;
  };
}
