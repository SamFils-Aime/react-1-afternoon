import React from"react" 

 class FilterObject extends React.Component {
constructor(){
super()
this.state = {
    employees: [
    {
        name: "jimmy joe",
        Title: "Hack0r",
        age: 12,
    },
    {
        name: "jeremy Schrader",
        age: 24,
        hairColor: "brown",
    },
    {
        name: "carly Armstrong",
        Title: "CEO"
    }
    ],
    userInput: "",
    filteredEmployees: []
}
}
handleChange(val){
this.setState({ userInput: val})
}

filterEmployees(prop){
let employees = this.state.employees;
let filteredEmployees = [];

for (let i = 0; i< employees.length; i++){
    if (employees[i].hasOwnProperty(prop)){
        filteredEmployees.push(employees[i]);
    }
}
this.setState({ filteredEmployees: filteredEmployees})

}







render(){
    return(
    <div className="puzzleBox filterObjectPB">
        <h4> FilterObject</h4>
    <span className="puzzleText"> Original: {JSON.stringify(this.state.employees,null, 10)}</span>  
        <input className="inputLine" onChange={(e)=> this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={(e)=> this.filteredEmployees(this.state.userInput)}>Filter</button>
    <span className="resultsBox filterObjectRB">Filtered:{JSON.stringify(this.state.filteredEmployees, null, 10)}</span>
    </div>
    )
}


}
export default  FilterObject