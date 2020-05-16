import { h } from "preact";
import "./About.scss";

export const About = () => {
  return (
    <section class="about light" id="about">
      <h1 class="about-title">About</h1>
      <p class="about-paragraph">
        I am a Slovakian web and mobile developer who is constantly seeking more knowledge. Becoming a developer has been a dream of mine since primary school. A dream that has come true over the years. Because of my interest in technology I continued my studies until I got a Master´s degree in Applied Informatics, but as we all know a developer´s studies never end. Programming is not just a job to me. It is my hobby and something I am passionate about. Throughout the years I have had the pleasure of working with several languages and development paths. Nowadays I mostly work with TypeScript and C#. I enjoy working full stack but what I am the most interested in is frontend development.
      </p>
      <p>
        <strong>Technologies I work with</strong>
      </p>
      <p>
        TypeScript | JavaScript, React, SCSS, C#, .NET Core, TypeGraphql, GraphQL,
        Git, Docker, MSSQL, MongoDB
      </p>
    </section>
  );
};
