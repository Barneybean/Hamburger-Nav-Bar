import React, {Component} from "react";
import Wrapper from "./components/wrapper";
import Container from "./components/container";
import Nav from "./components/Nav";
import "./style.css";

class App extends Component {
    state={
        notice: "Change screen width to 600 to see hamburger nav bar"
    }

    showDropDown() {
        console.log("clicked")
        let menuItem = document.getElementById("myTopnav");
        if (menuItem.className === "topnav") {
            menuItem.className += " responsive";
        } else {
            menuItem.className = "topnav";
        }
    }
    
    render() {
        return (
        <Wrapper>
            <Nav showDropDown={this.showDropDown}/>
            <Container notice={this.state.notice}>
                {this.state.notice}
            </Container>
        </Wrapper>
      )
    }
}

export default App;