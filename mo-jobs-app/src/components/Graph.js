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
    var reduced = data.reduce((acc, curr) => {
      acc.push(curr.date_applied.substr(0,10))
      return acc
    }, [])
    reduced = reduced.sort()

    var dataFunction = reduced, results = {}, dateData = [], i, date;
    for (i = 0; i < dataFunction.length; i++) {
      date = [dataFunction[i]]
      results[date] = results[date] || 0;
      results[date]++;
    }
    for (i in results) {
      if (results.hasOwnProperty(i)) {
        dateData.push({date : i, counts : results[i]});
      }
    }
    reduced = dateData
    console.log(reduced)

    var xAxis = reduced.map(date => date.date)
    var yAxis = reduced.map(date => date.counts)

    var count = reduced
    this.setState({
        chartData: {
          labels: xAxis,
          datasets: [{
            label: "Jobs Application Dates",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: yAxis,
          }]
        },
        chartOptions: {}
      })    
  }
  
  componentDidMount() {
    this.update(this.props.data.company)
  }
  
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={(event) => this.toggleHidden()}>View Data</button>
        {this.state.isHidden ? null : <LineChart data={this.state.chartData} options={this.state.chartOptions} width="600" height="250"/>}
      </div>
    )
  }
}

export default Graph
