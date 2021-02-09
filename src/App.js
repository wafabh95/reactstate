import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import imgSrc from './wafa.jpg'

class App  extends React.Component{
  constructor(props) {
    super(props);
  this.state = { person :{fullName:"",bio:"", imgSrc:"", profession:""} , show:"",intervall: null,counter: 0};
}
  afficheProfile = () => {
    this.setState({show : true , person: {fullName:"wafa ben hamouda",bio:"cc bio", imgSrc:imgSrc , profession:"cc pro", show:"true"}} );
  }
  componentDidMount(){  
    this.setState({intervall: setInterval(()=>{this.setState({counter: this.state.counter + 1});},1000),
  
  });
 
  }

  render(){
    let hours = Math.floor(this.state.counter/ 3600);
    let minutes = Math.floor(this.state.counter / 60);
    let seconds = this.state.counter% 60;

    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return (
      <div>
            <hr></hr>
                <div className="container">
                  <div className="row">
                  <div className="col-sm"></div>
                  <div className="col-sm titre"><span>This is my profile</span></div>
                  <div className="col-sm"></div>
                  </div>
                  <hr></hr>
                </div>
                <h1>{this.state.person.fullName}</h1>
                <img src={this.state.person.imgSrc} className="rounded-circle" alt=""/>
                <p> {this.state.person.bio} 
                {this.state.person.profession}{this.state.show}</p>
                <button type="button" className="btn btn-success" onClick={this.afficheProfile}>affiche profile</button>
    
                <h6>Current Count: {`hours: ${hours} minutes: ${minutes} seconds: ${seconds}`}</h6>
      </div>
    )
  }
}
export default App;
