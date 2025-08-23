// Timeline.jsx
import { device } from "@/helpers/mediaQueries";
import TimelineItem from "./TimelineItem";
import styled from "styled-components";

const TimelineWrapper = styled.div`
  position: relative;
  padding: 1rem;
  margin: 0 auto;

  @media ${device.desktop} {
    padding: 4rem 3rem;
    max-width: 100%;
    overflow: hidden;
  }
`;

const events = [
  {
    title: "Sunday Masses Schedule",
    day: "Three Masses on that day",
    times: ["6:30 AM - 1st Mass", "8:45 AM - 2nd Mass", "10:45 AM - 3rd Mass"],
  },
  {
    title: "Benediction & Adoration",
    day: "Sunday Evening",
    times: ["5:00 PM - 6:00 PM"],
  },
  {
    title: "Bible Study & Fellowship",
    day: "Tuesday",
    times: ["6:00 PM - 7:30 PM"],
  },
  {
    title: "Midweek Mass",
    day: "Wednesday",
    times: ["6:30 AM"],
  },
  {
    title: "Choir Practice",
    day: "Thursday",
    times: ["5:30 PM - 7:00 PM"],
  },
  {
    title: "Youth Fellowship",
    day: "Every First Sunday",
    times: ["immediately after the last mass"],
  },
  {
    title: "Morning Masses & Devotion",
    day: "Monday - Saturday",
    times: ["6:00 AM"],
  },
];

export default function Timeline() {
  return (
    <TimelineWrapper>
      {events.map((event, index) => (
        <TimelineItem key={index} index={index}>
          <h3>{event.title}</h3>
          <p>{event.day}</p>
          <ul>
            {event.times.map((time, idx) => (
              <li key={idx}>{time}</li>
            ))}
          </ul>
        </TimelineItem>
      ))}
    </TimelineWrapper>
  );
}
