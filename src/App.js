//
import Greet from './Components/Greet';
import './App.css';
// import './profile.jpg'
//import Hallo from './Components/Hallo';

function App() {
  return (
    <div className="App">
     <Greet name="Evans "  surName="Mark" >
      <ul>
        <li>Frontend Engineer</li>
        <li>UX/UI Designer</li>
        <li>Transcriber</li>
      </ul>
     </Greet>
     <Greet name="Sheryl" surName="Cheptoo">
      {/* <img src='./profile.jpg' alt='profile'/> */}
     <ul>
        <li>Frontend  Developer</li>
        <li>Software Engineer</li>
        <li>Cyber Security</li>
      </ul>
     </Greet>
     <Greet name="Ivan" surName="Mogeni">
     <ul>
        <li>Fullstack Web  Engineer</li>
        <li>Software Engineer</li>
        <li>Mobile Engineer</li>
      </ul>
     </Greet>
     {/* Hallo*/}
    </div>
  );
}

export default App;


/*
create react app

*/