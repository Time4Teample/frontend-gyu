import React from "react";
 
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
 
import BucketList from "./BucketList";
import styled from "styled-components";
import Detail from "./Detail";
 
class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      list: ["쭈워니 노래교실", "야망남 댄스교실", "현정이 롤체교실"],
    };
 
    this.text = React.createRef();
  }
 
  componentDidMount() {
    console.log(this.text);
  }
 
  addClassList = () => {
    let list = this.state.list;
    const new_item = this.text.current.value;
    this.setState({ list: [...list, new_item] });
  };
 
  render() {
    return (
      <div className="App">
        <Container>
          <Title>강의 목록</Title>
          <Line />
        
          <Route
            path="/"
            exact
            render={(props) => <BucketList list={this.state.list} history={this.props.history}/>}
          />
          <Route path="/detail" component={Detail}/>
        </Container>
      
        <Input>
          <input type="text" ref={this.text} />
          <button onClick={this.addClassList}>추가하기</button>
        </Input>
      </div>
    );
  }
}
 
const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
 
const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
 
const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;
 
const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;
// withRouter 적용
export default withRouter(App);
