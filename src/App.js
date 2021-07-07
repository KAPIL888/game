import React, { Component } from 'react';
import {Grid} from "@material-ui/core"
import './App.css';


 var json_2015=require("./2015.json")

 var json_2016=require("./2016.json")
 var json_2017=require("./2017.json")
 var json_2018=require("./2018.json")
 var json_2019=require("./2019.json")
 var json_2020=require("./2020.json")
 
class App extends Component {


  constructor(props){
    super(props)
    this.state={
      json:json_2020
    }
  }
 
  //['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

 getData=() =>{
   return Object.keys(this.state.json).map((value,index)=>{
   return <Grid key={index} container justify="center" direction="column">
            <Grid item>
              <h2 className="head"> 
                 {value}  
              
              </h2>
            </Grid>
            <Grid container md={8} item direction="row"  justify="center" >
                <Grid md={1} item container direction="column">
                      <span className="span_box">Date</span>
                      {this.state.json[value]["DATE"].map((date)=>{
                     return  <p className="p_tag">{date}</p>
                      })}
                </Grid>

                <Grid  md={1} item container direction="column">
                      <span className="span_box">DSWR</span>
                      {this.state.json[value]["DSWR"].map((date)=>{
                     return  <span className="span_box">{date}</span>
                      })}
                </Grid>

                <Grid  md={1} item container direction="column">
                      <span className="span_box">FRBD</span>
                      {this.state.json[value]["FRBD"].map((date)=>{
                     return  <span className="span_box">{date}</span>
                      })}
                </Grid>

                <Grid  md={1} item container direction="column">
                      <span className="span_box">GZBD</span>
                      {this.state.json[value]["GZBD"].map((date)=>{
                     return  <span className="span_box">{date}</span>
                      })}
                </Grid>

                <Grid  md={1} item container direction="column">
                      <span className="span_box">GALI</span>
                      {this.state.json[value]["GALI"].map((date)=>{
                     return  <span className="span_box">{date}</span>
                      })}
                </Grid>
            </Grid>
          </Grid>
    })
  }


  check(selector, text) {
    var elements=document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function(element){
      return RegExp(text).test(element.textContent);
    });
  }

  check_multi(selector, multiValue) {

      var elements=document.querySelectorAll(selector);
      let local=multiValue.map((value)=>{
        if(value)
        {
       return Array.prototype.filter.call(elements, function(element){
        return RegExp(value).test(element.textContent);
      });
    }
    else{
      return 0
    }
      }
      )

    var merged=[].concat.apply([], local);
    return merged
 
  
  }

 find (e){

  let list=e.target.value.split(",")
  console.log()

  let mulitple_values=this.check_multi('span',list)




  let ele=mulitple_values
  var ele_all=document.querySelectorAll('span');


  for(let i =0;i<ele_all.length;i++)
  {
    ele_all[i].style.backgroundColor="white"

  }


if(ele.length > 0)
{
  ele.map((current)=>{
     current.style.backgroundColor="red"
     return 0
  })
}

  }

  render() {
    return (
      <div className="App">
      
       <p onClick={()=>this.setState({json:json_2020})}>charts 2020</p>  
       <p onClick={()=>this.setState({json:json_2019})}>charts 2019</p>  
       <p onClick={()=>this.setState({json:json_2018})}>charts 2018</p>  
       <p onClick={()=>this.setState({json:json_2017})}>charts 2017</p>  
       <p onClick={()=>this.setState({json:json_2016})}>charts 2016</p>  
       <p onClick={()=>this.setState({json:json_2015})}>charts 2015</p>  
       <input style={{position:'fixed',right:0}} placeholder="search number" onChange={(e)=>this.find(e)}></input>
         {this.getData()}
       
      </div>
    );
  }
}

export default App;


