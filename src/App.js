import React from 'react';
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import styled from 'styled-components';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import CreateAnimal from './components/CreateAnimal';
import ListAnimal from './components/ListAnimal';
import SearchAnimal from './components/SearchAnimal';

function App() {
  return (
      <AppComponent>
  
      </AppComponent>
    );
}

const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

class AppComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selected: 'createanimal',
      expanded: false
    }

  }

  onSelect = (selected) => {
    this.setState({ selected: selected });
  };
  onToggle = (expanded) => {
    this.setState({ expanded: expanded });
  };

  render(){

    const { expanded, selected } = this.state;

    return(
      <div>
          <SideNav onSelect={this.onSelect} onToggle={this.onToggle}>
                    <SideNav.Toggle />
                    <SideNav.Nav selected={selected}>
                        <NavItem eventKey="createanimal">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Create">
                                Create
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="searchanimal">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Search Animal">
                                Search Animal
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="listanimal">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="List Animal">
                                List animal
                            </NavText>
                        </NavItem>
                        
                    </SideNav.Nav>
                </SideNav>
          <Main expanded={expanded}>
            {this.changepage()}
          </Main>
      </div>
        
    )
  }

  changepage(){
    switch (this.state.selected){
      case "createanimal": return <CreateAnimal></CreateAnimal>
      case "listanimal": return <ListAnimal></ListAnimal>
      case "searchanimal": return <SearchAnimal></SearchAnimal>
      default: return <CreateAnimal></CreateAnimal>

    }
  }

}



export default App;
