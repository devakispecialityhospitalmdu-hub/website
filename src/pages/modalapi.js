import React from "react";
class ModalApi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }   

    componentDidMount() {
        fetch("http://dev.devakicare.com/admin/api_controller/getconsultant?branch=1&api")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => (
                <ol key = { item.id } >
                    Doctor_Name: { item.name }
                    </ol>
                ))
            }
        </div>
    );
}
}
  
export default ModalApi;