const Course = (props) => {
    const { course } = props;
  
    // Imprimir el arreglo de cursos (esto es opcional, solo para depuración)
    function imprimir(course) {
      const result = course.map((course) => course);
      console.log(result);
    }
  
    return (
      <div>
        {course.map((singleCourse) => (            
          <div key={singleCourse.id}>
            <CourseName course={singleCourse} />
            <ul>
              {singleCourse.parts.map((parte) => (
                <CoursePart key={parte.id} part={parte} />
              ))}
            </ul>
            <TotalScore course={singleCourse} />
          </div>
        ))}
      </div>
    );
  };
  
  const CoursePart = ({ part }) => {
    return (
      <li>
        {part.name} ({part.exercises})
      </li>
    );
  };
  
  const CourseName = ({ course }) => {
    return <h1>{course.name}</h1>;
  };
  
  const TotalScore = ({ course }) => {
    const total = course.parts.reduce((acc, particion) => acc + particion.exercises, 0);
    return <p>Puntaje total: {total}</p>;
  };
  
  export default Course;
  