export default function Section({ list, title }) {
  //props as $metre is object we can destructure into 2 variables

  return (
    <>
      <p>
        <h4>{title}</h4>
        
        <ul>
          {list.map((tech, index) => (
            <li>{tech}</li>
          ))}
        </ul>
        
      </p>
    </>
  );
}
