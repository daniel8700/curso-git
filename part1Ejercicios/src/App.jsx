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
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',

  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
  doAddittion: function(a, b){
    console.log(a+b);
  }
}
arto.growOlder = function() {
  this.age += 1;
}
console.log(arto.age)
arto.growOlder();
console.log(arto.age)
arto.greet()
arto.doAddittion(10, arto.age)
const referenceToAddition = arto.doAddittion
referenceToAddition(10, 15);
setTimeout(arto.greet.bind(arto),1000)

class person{
  constructor(name, age){
    this.name = name
    this.age = age
  }
  greet(){
    console.log("hello my name is " + this.name)
  }
}
const adam = new person("Adanm Ondra", 26)
adam.greet()
const janja = new person("janja", 24)
janja.greet()
export default App
