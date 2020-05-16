import { h, FunctionComponent } from "preact";
import { Card, Footer } from "../Components";
import "./Showcase.scss";

export const ShowCase: FunctionComponent = () => {
  return (
    <section class="light" id="showcase">
      <h1 className="sub">Showcase</h1>
      <h2>Projects</h2>
      <div class="cards">
        <Card
          title="Scrumma frontend"
          content="A free open-source UI implementation for a real time scrum pointing application. React, Typescript"
          link="https://github.com/TheOnlyBeardedBeast/ScrummaSPA"
        />
        <Card
          title="Scrumma backend"
          content="A free open-source backend for a real time scrum application. C#, .NET Core, Signal-R"
          link="https://github.com/TheOnlyBeardedBeast/ScrummaService"
        />
        <Card
          title="Punch coach"
          content="An android application for enhanced shadow boxing training. ReactNative, JavasScript"
          link="https://play.google.com/store/apps/details?id=com.boxingtrainer&hl=en"
        />
        <Card
          title="TheDEV.sk"
          content="The source of this website. Typescript, Parcel, Preact"
          link="https://github.com/TheOnlyBeardedBeast/thedev"
        />
      </div>
      <h2>Articles</h2>
      <div class="cards">
        <Card
          title="Using Google drive in a C# application"
          content="An article about Google drive implementation in a .NET Core app."
          link="https://dev.to/theonlybeardedbeast/using-google-drive-in-a-c-application-38ag"
        />
        <Card
          title="Dockerize a React app with NGINX"
          content="Using Nginx and React for multi environment setup."
          link="https://dev.to/theonlybeardedbeast/dockerize-a-react-app-with-nginx-for-multiple-environments-db2"
        />
        <Card
          title="Comparing URLs in Javascrip"
          content="Comparing URLs in javascript by multiple criterias."
          link="https://dev.to/theonlybeardedbeast/comparing-urls-in-javascript-2iha"
        />
        <Card
          title="React hooks, what you should not to do"
          content="A hacky way to use React hooks conditionally."
          link="https://dev.to/theonlybeardedbeast/conditional-hooks-maybe-18fk"
        />
      </div>
      <Footer />
    </section>
  );
};
