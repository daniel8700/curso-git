const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Part = ({ part, part1}) => (
  <>
    <p>
      {part.title} {part.exercises}
    </p>
  </>
);

const Content = ({ content }) => {
  return (
    <div>
      <Part part={content[0]} />
      <Part part={content[1]} />
      <Part part={content[2]} />
    </div>
  );
  };

  const Total = ({ parts }) => {
    const total = parts[0].exercises+parts[1].exercises+parts[2].exercises;
    return <p>Number of exercises: {total}</p>;
  };  

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [

      {title: 'Fundamentals of React',
      exercises: 10},
      {title: 'Using props to pass data',
      exercises: 7},
      {title: 'State of a component',
      exercises: 14}

    ],
    propiedades: "Prueba de funcionamiento"
  };

  return (
    <div>
      <Header title={course.name} />
      <Content content={course.parts} />
      <Total parts={course.parts} />
      <Header title={course.propiedades}/>
    </div>
  );
};

export default App
