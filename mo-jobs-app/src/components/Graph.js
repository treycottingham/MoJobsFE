import React, { Component } from 'react'

var LineChart = require("react-chartjs").Line

class Graph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
      chartData: {
        labels: [],
        datasets: [{
          label: "",
          backgroundColor: '',
          borderColor: '',
          data: [],
        }]
      },
      chartOptions: {}
    }
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  update = (data) => {
    // console.log('update',data)
    var reduced = data.reduce((acc, curr) => {
      acc.push(curr.date_applied.substr(0,10))
      return acc
    }, [])
    reduced = reduced.sort()
    console.log(reduced)
    this.setState({
        chartData: {
          labels: reduced,
          datasets: [{
            label: "Jobs Application Dates",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1,2,2,2,2,2,2,2,2,2],
          }]
        },
        chartOptions: {}
      })
    
    // console.log(this.state.chartData.labels)
  }
  
  componentDidMount() {
    // console.log("compdidmount",this.props.data)
    this.update(this.props.data.company)
  }
  
  toggleHidden() {
    // console.log('togglehidden chartdata.labels', this.state.chartData.labels)
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  
  render() {
    // console.log('props',this.props)
    return (
      <div>
        <button onClick={(event) => this.toggleHidden()}>View Data</button>
        {/* <button onClick={this.toggleHidden()}>View Data</button> */}
        {this.state.isHidden ? null : <LineChart data={this.state.chartData} options={this.state.chartOptions} width="600" height="250"/>}
      </div>
    )
  }
}

export default Graph