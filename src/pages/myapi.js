
import React, { useEffect, useState } from "react"

const Myapi = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Myapi;
import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

export default class Api extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: '',
      headers: {"Access-Control-Allow-Origin": "*"}
    }
  }

 async getOptions(){
    const res = await axios.get("https://dev.devakicare.com/admin/api_controller/getconsultant?branch=1&api=1")
    const datas = res.datas

    const options = datas.map(d => ({
      "value" : d.data.id,
      "label" : d.data.name

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }


componentDidMount() {
  const url = 'https://dev.devakicare.com/admin/api_controller/getconsultant?branch=1&api=1';
  axios.get(url).then( res => {
    //use res to update current state
  })
}
  render() {
    console.log(this.state.selectOptions)
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
    <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>
      </div>
    )
  }
}
