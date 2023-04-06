import Date from "./date";
import Section from "./section";
export default function Event({company, jobtitle}) {
  return (
    <li className="timeline-event">
      <label className="timeline-event-icon" />
      <div className="timeline-event-copy">
        <Date date="April 2023" />
        <h3>Freelancer</h3>
        <h3>Geil,Danke! {company}</h3>
        <h4>{jobtitle}</h4>
        <Section
          title="technologies"
          list={["Reactjs", "Java", "azerty", "rtezaz"]}
        />

        <Section
          title="Tools"
          list={["VsCode", "LiveServer", "SON-server"]}
        />

        <Section
          title="technologies"
          list={["Reactjs", "Java", "azerty", "rtezaz"]}
        />
        {/* <ul>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Vue.js</li>
                <li>Node.js</li>
            </ul> */}
      </div>
    </li>
  );
}
