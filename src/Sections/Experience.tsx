import { h } from "preact";
import { TimeLine, TimeLineData } from "../Modules/TimeLine";

const data: TimeLineData = {
  "2016": [
    {
      date: "February",
      content:
        "During the second year of my studies at university I got my first dev job as a fronted developer which lasted until the May of 2018. It was during this time that the scope of my carreer changed to fullstack developer.",
    },
    {
      date: "September - October",
      content:
        "At the beginning of the semester I had some free time so I applied for a part time job. This job involved working on a prototype API for a mobile app. Said API was developed in php (Laravel Framework)",
    },
  ],
  "2017": [
    {
      date: "May",
      content:
        "I got my Bachelor's degree in Applied Informatics. My Bachelor's thesis was about the creation of a Eccomerce application with Laravel on the backend and Vue.js on the frontend.",
    },
  ],
  "2018": [
    {
      date: "May - June",
      content:
        "At the end of the academic year I applied for a fullstack internship. The job entailed working on an internal employee system. I worked on this system with Symfony backend.",
    },
    {
      date: "July",
      content:
        "By July I had started working as a React developer in a CN group CZ a.s. part time.",
    },
  ],
  "2019": [
    {
      date: "May",
      content:
        "I got my master´s degree in applied informatics. My dissertation was on the creation of a time tracking application in .net core which used the Azure devops API and used react with typescript on the frontend. It also contained some data analysis.",
    },
    {
      date: "June",
      content:
        "After I got my master´s degree I was offered a full time frontend developer position at the previously mentioned company.",
    },
  ],
  "2020": [
    {
      date: "February",
      content:
        "I started working on a new project in CN Group CZ a.s. My development scope changed from fronted to full-stack and I was promoted to project leader.",
    },
  ],
};

export const Experience = () => {
  return (
    <section class="dark" id="experience">
      <h1>Experience & studies</h1>
      <TimeLine data={data} />
    </section>
  );
};
