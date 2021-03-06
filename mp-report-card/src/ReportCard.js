import React, { Component } from 'react'
import './ReportCard.css';
import Issue from './Issue';
import Bill from './Bill';

class ReportCard extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         votes: [
            { id: 1, bill: 'Should plastic straws be banned?', voted: 'VOTED YES'},
            { id: 2, bill: 'Should we increase expenditure on de-icing roads', voted: 'VOTED NO'},
            { id: 3, bill: 'Should residents be allowed to build & rent secondary homes on their property?', voted: "DIDN'T VOTE"},
         ],
         bills: [
          { id: 1, bill: 'Should plastic straws be banned?', summary: 'Plastic straws are problematic for our marine wildlife. Should we find alternatives to make our bevarages more sustainable?', issues: ['Environment', 'Food and drink'], voted: 'VOTED YES'},
          { id: 2, bill: 'Should we increase expenditure on de-icing roads', summary: 'Lack of de-icing causes hundreds of accidents each year. However, some cities may not need as much de-i...', issues: ['Public safety', 'Environment', 'Government spending'], voted: 'VOTED NO'},
          { id: 3, bill: 'Should residents be allowed to build & rent secondary homes on their property?', summary: 'The real estate market in many cities are incredibly favorable to landlords...', issues: ['Housing'], voted: "DIDN'T VOTE"},
         ],
         representative: "Justin Trudeau",
         attendance: 0.5
      }
   }

    renderTableData() {
        return this.state.bills.map((vote, index) => {
        const { id, bill, summary, issues, voted } = vote
        return (
            <tr key={id}>
                <td>
                  <Bill name={bill} summary={summary} issues={issues} />
                </td>
                <td><b>{voted}</b></td>
            </tr>
        )
        })
    }

    /*
    renderTableHeader() {
        let header = Object.keys(this.state.votes[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
     */
  
     render() {
        return (
          <div>
          <h1 id='title'>{this.state.representative}</h1>
           <div id="report">
              <h3 id='subtitle'>Attendance</h3>
              <hr id="line"/>
              <progress id="file" max="100" value={`${this.state.attendance*100}`}> {this.state.attendance} </progress>
               <p>{Math.floor(this.state.attendance * 100)} %</p>
               <h3 id='subtitle'>Votes</h3>
               <hr id="line"/>
               <div id="scrollable">
              <table id='votes'>
                 <tbody>
                    <tr></tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
              </div>
           </div>
           </div>
        )
     }
}

export default ReportCard;