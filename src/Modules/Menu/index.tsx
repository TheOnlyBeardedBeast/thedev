import { h, FunctionComponent } from "preact";
import { scrollTo } from "../../Utils";
import "./Style.scss";

export interface IMenuItem {
  title: string;
  id: string;
}

export interface MenuProps {
  items: IMenuItem[];
}

export const Menu: FunctionComponent<MenuProps> = ({ items }) => {
  return (
    <nav>
      <ul>{renderMenuItems(items)}</ul>
    </nav>
  );
};

const renderMenuItems = (items: IMenuItem[]) => {
  return items.map((item) => renderMenuItem(item));
};

const handleClick = (event: MouseEvent, callback?: () => void) => {
  event.preventDefault();

  if (callback) {
    callback();
  }
}

const renderMenuItem = ({ title, id }: IMenuItem) => {
  return (
    <li tabIndex={0}>
      <a href={`#${id}`} onClick={event => handleClick(event, scrollTo(id))}>{title}</a>
    </li>
  );
};
