import { h, FunctionComponent } from "preact";

import "./Style.scss";

interface ButtonProps {
  className?: string;
  onClick?: (event?: h.JSX.TargetedEvent<HTMLButtonElement, MouseEvent>) => any;
  href?: string;
  external?: boolean;
  title?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  external,
  onClick,
  href,
  title
}) => href ? (<a href={href} title={title} target={external ? "_blank" : undefined} rel={external ? "noreferrer noopener" : undefined} class={`button ${className ? " " + className : ""}`} tabIndex={0}>
  {children}
</a>) : (
      <button onClick={onClick} class={className} type="button" tabIndex={0}>
        {children}
      </button>
    );
