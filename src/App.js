import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Graph from './components/Graph'
import CompaniesDash from './components/CompaniesDash'

const apiURL = './jobs.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isDataLoaded: false,
      isHidden: true
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  componentDidMount() {
    fetch(apiURL)
      .then(response => response.json())
      .then(companies => {
        this.setState({
          data: companies,
          isDataLoaded: true
        })
      })
  }

  render() {
    const isDataLoaded = this.state.isDataLoaded
    // console.log(this.state)
    return (
      <div className="App">
        <Header />
        <button onClick={(event) => {this.toggleHidden()}}>See Stats</button>
        {this.state.isHidden ? null : <Graph />}
        {isDataLoaded && <CompaniesDash data={this.state.data} />}
        <Footer />
      </div>
    )
  }
}

export default App

// class App extends Component {
//   state = {
//     menu: [],
//     isMenuLoaded: false,
//     cart:{},
//     isCartLoaded: false,
//   }

//   updateCart = (cart) => {
//     this.setState(
//       {cart}
//     )
//   }

//   fetchMenu = () => {
//     const apiURL = 'http://localhost:3000/menu';

//     return fetch(apiURL)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({menu: data,
//                         isMenuLoaded: true})
//       })
//       .catch((err) => console.log('err', err))
//   }

//   fetchCart = () => {
//     const apiURL = 'http://localhost:3000/cart';

//     return fetch(apiURL)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({cart: data,
//                        isCartLoaded: true
//                         })
//       })
//       .catch((err) => console.log('err', err))
//   }

//   componentDidMount() {
//     this.fetchMenu()
//     this.fetchCart()
//   }

//   render() {
//     const isMenuLoaded = this.state.isMenuLoaded
//     const isCartLoaded = this.state.isCartLoaded
    
//     return (
//     <div>
//       <Header />
//       <main>
//         {isMenuLoaded && <Menu menu={this.state.menu} updateCart = {this.updateCart} />}
//         {isCartLoaded && <Cart cart = {this.state.cart}/>}
//         {isCartLoaded && <Carts cart = {this.state.cart}/>}
//       </main>
//       <Checkout
//             name={'The Road to learn React'}
//             description={'Only the Book'}
//             amount={this.state.cart.total}
//             total={this.state.cart.total}
//         />
       
//       <MyForm/>
//       <Footer />
//     </div>
//     );
//   }
// }

// export default App;