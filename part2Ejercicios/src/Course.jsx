const Course = (props) => {
const { course } = props
imprimir(course)
    return(
        <div>
        <Name course={course}></Name>
        <ul>
             
            {course.parts.map((parts) =>
            <Parts parts={parts} key={parts.id}></Parts>
        )}           
        </ul>
        
        <Total course={course}></Total>
        
        </div>
    )
}

const Parts = ({parts}) =>{
    return(
        <li>{parts.name} {parts.exercises}</li>
    )
}
const Name = ({course}) => {
    console.log(course.name);
    return(
    <h1><strong>{course.name}</strong></h1>
    )
}
function imprimir(course){
    const result = course.name
    console.log(result);
    }

    const Total = ({ course }) => {
        const tot = course.parts.reduce((acc, part) => acc + part.exercises, 0);
    return(
    <p>Puntaje total: {tot}</p>
    )
}    
export default Course