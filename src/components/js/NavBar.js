import React, {Component} from 'react';
import { Dropdown, Button,Card, Grid } from 'semantic-ui-react';
/*import Cookies from 'universal-cookie';*/

const {Link} = require('react-router');
const {hashHistory} = require('react-router');

/*const cookies = new Cookies();*/
var logoSize = {
 width : '40%'
}
var cardWidth={
    width:'80%'
}
class MenuExampleContentProp extends Component {
  constructor () {
		super();
		this.state = {
			domain: ''
		}
  /*  this.logOut = this.logOut.bind(this);*/
		this.changeDomain = this.changeDomain.bind(this);
	}
	changeDomain(e) {
		this.setState({
			domain: e.target.value
		});
	}
  /*logOut(){
    cookies.remove('username');
      cookies.remove('userType');
        hashHistory.push('/');
  }*/
	clickChange(){
		this.props.restaurantData(this.state.domain);
	}
    render() {
      let landingPage;
      /*if(cookies.get('username')){*/
        landingPage = (
        <div>
<nav className="navbar navbar-inverse navbar-fixed ">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <div>
      <a className="navbar-brand" href="#"> <img src="./img/logo.png"/></a>
        <a className="navbar-brand" href="#"> <img src="./img/logo.png"/></a>
        <p className="navbar-text">Welcome <b>keerthi</b></p>
        </div>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">        
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Profile</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
<center>
<h1>Adapt yourself to Learn and Create</h1>
 <div >
				<Dropdown  /* onChange={this.updatesearchQuery.bind(this)}*/ placeholder='Select Customer Journey' search selection  /*options={this.state.domain}*/>
				</Dropdown>
				<Button  primary/*onClick={this.handleSubmit.bind(this)}*/  content="Select"/>
				</div>
			
				<Card style={cardWidth}>
  <Card.Content>
  <Card.Header><h3>Project Report - April</h3></Card.Header>
  <Card.Description><h4>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </h4></Card.Description>
  </Card.Content>
  </Card>
</center>
  <nav className="navbar-fixed-bottom navbar-inverse" >
            <p id="footerTextAllignment">All Rights Reserved. &copy; Wipro Limited</p>
          </nav>
          </div>
        );
     /* }else{
        hashHistory.push('/');
      }*/
        return (
          <div>
            {landingPage}
          </div>
        );
    
}
}

export default MenuExampleContentProp;
