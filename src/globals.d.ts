declare module "scroll-to-element" {
  interface IConfig {
    offset?: number;
    ease?: string;
    duration?: number;
    align?: string;
  }

  interface Result {
    on: (action: "end", callback: () => void) => void;
  }

  export default function(element: string, config?: IConfig): Result;
}
