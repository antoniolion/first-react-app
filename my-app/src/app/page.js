const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const Header = (props) => {
    return <h1>{props.course1.name}</h1>;
  };
  const Part = (props) => {
    return (
      <div>
        <p>
          {props.name}, {props.exercises}
        </p>
      </div>
    );
  };
  const Parts = (props) => {
    return props.parts.map((part, index) => (
      <Part key={index} name={part.name} exercises={part.exercises} />
    ));
  };
  const Content = (props) => {
    return (
      <div><Parts parts={props.parts1} />
      </div>
    );
  };
  const sumList = (props) => {
    let sum = 0;
    props.forEach(element => {
      sum = sum + element.exercises;
    });
    return sum;
  }
  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {sumList(props.parts2)}</p>
      </div>
    )
  }
  return (
    <div>
      <Header course1={course} />
      <Content parts1={course.parts} />
      <Total parts2={course.parts} />
    </div>
  )
}

export default App