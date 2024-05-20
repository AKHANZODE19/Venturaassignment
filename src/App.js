import './App.css';
import logo from './images/logo.png';
// import IPOPageDetails from './IPOPageDetails';
// import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
// import AppRoutes from './AppRoutes';

import company1Logo from './images/image1.jpg';
import company2Logo from './images/image2.png';
import company3Logo from './images/image3.png';
import company4Logo from './images/image4.jpg';
import company5Logo from './images/image5.png';
import company6Logo from './images/image6.png';
import { Route } from 'react-router-dom';

function App() {
  return(
    <div className='App'>
      <nav class="navbar">
      <img src={logo} alt="Logo" className="logo" />
    <ul class="nav-list">
      <li class="nav-item"><a href="#home">Home</a></li>
      <li class="nav-item"><a href="#about">About</a></li>
      <li class="nav-item"><a href="#services">Services</a></li>
      <li class="nav-item"><a href="#contact">Contact</a></li>
    </ul>
  </nav>

      <section className="ipo-list">
      <h3>IPO List Page</h3>
    <table>
    <thead>
   <tr>
    <th>Company/Issue Date</th>
<   th>Issue Size</th>
    <th>Price Range</th>
    <th>Min Invest/Quantity</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>
        <img src={company1Logo} alt="Company 1 Logo" className="company-Logo" />
        TATA
     <br />
     <span className="issue-date">2024-02-02</span>
    </td>
        <td>₹4,000,000</td>
        <td>₹10 - ₹20</td>
        <td>200 shares</td>
    </tr>
  <tr>
     <td>
        <img src={company2Logo} alt="Company 2 Logo" className="company-Logo" />
        BAJAJ
     <br />
     <span className="issue-date">2024-03-02</span>
    </td>
        <td>₹6,000,000</td>
        <td>₹10 - ₹30</td>
        <td>100 shares</td>
  </tr>
  <tr>
  <td>
      <img src={company3Logo} alt="Company 3 Logo" className="company-Logo" />
          OYO
       <br />
       <span className="issue-date">2024-01-01</span>
  </td>
        <td>₹8,000,000</td>
        <td>₹10 - ₹20</td>
        <td>300 shares</td>
  </tr>
  <tr>
  <td>
      <img src={company4Logo} alt="Company 4 Logo" className="company-Logo" />
        SWIGGY
     <br />
     <span className="issue-date">2023-03-02</span>
    </td>
        <td>₹2,000,000</td>
        <td>₹10 - ₹20</td>
        <td>200 shares</td>
  </tr>
  <tr>
  <td>
      <img src={company5Logo} alt="Company 5 Logo" className="company-Logo" />
        ZOMATO
     <br />
     <span className="issue-date">2023-09-02</span>
    </td>
        <td>₹4,000,000</td>
        <td>₹10 - ₹20</td>
        <td>300 shares</td>
  </tr>
  <tr>
  <td>
      <img src={company6Logo} alt="Company 6 Logo" className="company-Logo" />
        OLA
     <br />
     <span className="issue-date">2023-03-07</span>
    </td>
        <td>₹3,000,000</td>
        <td>₹10 - ₹20</td>
        <td>400 shares</td>
  </tr>
    </tbody>
    </table>
      </section>

      <button className='ipo-details-button'>IPO Details page</button>
    </div>

  );
}


export default App;
