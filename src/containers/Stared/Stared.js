import React, { Component } from 'react';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import axios from 'axios';
import Breadcrumbs from 'react-breadcrumbs';
import fetch from 'node-fetch';
import qs from 'qs';

class Stared extends Component {


  goToIndex() {
    //doSomeThing...
    window.location.hash = '/stared'

  }

  handleRequest() {
    var data = qs.stringify({
      email: 'huwewaisensg.07@gmail.com',
      password: "$2a$11$o8vgy4olY7wcraHQKm4sqOB/3Ph4ybMtthYqmXT4u2xZyp9VBNWtG",
      matchingPassword: "$2a$11$o8vgy4olY7wcraHQKm4sqOB/3Ph4ybMtthYqmXT4u2xZyp9VBNWtG",
      firstName: "hu",
      lastName: "weizheng",
      age: 26,
      gender: "male",
      signInProvider: "ITCM_USER",
      lang: "zh_CN"
    });

    axios({
      method: 'post',
      url: 'http://155.69.148.209:8888/itcm/user/registration',
      data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Access-Control-Max-Age': 3628800
      },

    }).then(function (response) {
      console.log(response);
    });
  }

  render() {
    return (
      <div >
        <button type="button" className="btn btn-link px-0" onClick={this.handleRequest.bind(this)}>registration?</button>
      </div>
    );
  }
}

export default Stared;
