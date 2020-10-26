import React from 'react';
import UserForm from './components/UserForm'
import './App.css';

class App extends React.Component {
  state = { 
    data:[],
    filters:{name:'',userName:'',emailAddress:''},
    show:false
  };
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  handleFilter = (e) => {
    let names = e.target.name
    let value = e.target.value;
    console.log(this.state.filters)
    this.setState(prevState => {
      let filters = Object.assign({}, prevState.filters);
      filters[names] = value;
      return { filters };
    })
  };
  applyFilters = (originalData) => {
    console.log(originalData)
    const {filters:filters} = this.state;
    const filteredParcels = originalData.filter((str)=>{
      return  str.name.toLowerCase().indexOf(filters.name.toLowerCase()) >= 0 && 
              str.username.toLowerCase().indexOf(filters.userName.toLowerCase()) >= 0 && 
              str.email.toLowerCase().indexOf(filters.emailAddress.toLowerCase()) >= 0; 
    });
     return filteredParcels;
  };
  showModal = () => {
    let show = !this.state.show;
    this.setState({ show: show });
  };
  render() {
    const {
      filters,
      data
		}= this.state
    return (
      <div className="App">
        <header className="App-header">
          <p>
            User Management
          </p>
        </header>
        <div className="filters-container">
          <label>
              <span>Name: </span>
              <input type="text" name="name" value={filters.name} onChange={this.handleFilter}  />
          </label>
          <label>
              <span>Username: </span>
              <input type="text" name="userName" value={filters.userName} onChange={this.handleFilter}/>
          </label>
          <label>
              <span>Email Address: </span>
              <input type="text" name="emailAddress" value={filters.emailAddress} onChange={this.handleFilter}/>
          </label>
        </div>
        <div className="main-panel">
          
          <div className="summary-details">
            
            {this.applyFilters(data).map((data) => (
            <UserForm 
              data={data}
              show={this.state.show}
              handleShow = {this.showModal}
            ></UserForm>
           ))}
           
          </div>    
         
        </div>
      </div>
    )
  }
}

export default App;
