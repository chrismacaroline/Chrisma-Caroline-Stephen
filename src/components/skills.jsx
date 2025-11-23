import { Button } from "react-bootstrap";
import "../main.css"

const Skills = () => {
  const skillsbutton = {
    backgroundColor: "#212529",
    fontFamily: "roboto-black-italic",
    color: "#ECECEC",
    paddingLeft: "10px",
    paddingRight: "10px",
    margin: "20px",
    border: "1px solid #AAABB8",
    borderRadius: "10px",
    fontSize: "23px",
    flexDirection : "row",
    justifyContent : "start"
    // marginRight: "40px",
  };
  return (
    <>
      <div
        className="container-fluid d-flex flex-wrap flex-column"
        style={{ backgroundColor: "f0f0f0" }}
      >
        <h4
          style={{
            fontFamily: "roboto-black-italic",
            fontSize: "25px",
            padding: "20px",
            marginTop: "10px",
            marginBottom : "10px",
            textAlign: "center",
            color: "#212529",
          }}
        >
          Skills
        </h4>

        <div className="container-fluid skillbtn">
          <button className="slbtn"style={skillsbutton}>Git</button>
          <button style={skillsbutton}>TDD</button>
          <button style={skillsbutton}>OOP</button>
          <button style={skillsbutton}>CSS3</button>
          <button style={skillsbutton}>React</button>
          <button style={skillsbutton}>HTML5</button>
          <button style={skillsbutton}>Figma</button>
          <button style={skillsbutton}>UI/UX</button>
          <button style={skillsbutton}>Web Design</button>
          <button style={skillsbutton}>GitHub</button>
          <button style={skillsbutton}>jQuery</button>
          <button style={skillsbutton}>Node.js</button>
          <button style={skillsbutton}>Bootstrap</button>
          <button style={skillsbutton}>Javascript</button>
          <button style={skillsbutton}>Excalidraw</button>
          <button style={skillsbutton}>Adobe Illustrator</button>
          <button style={skillsbutton}>Wireframing & Prototyping</button>
          {/* <button style={skillsbutton}></button> */}
        </div>
      </div>
    </>
  );
};

export default Skills;
