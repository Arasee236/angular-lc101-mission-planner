import { analyzeNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", born : "Los Angeles, California", missions:"STS-7, STS-41-G", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", born : "Decatur, Alabama", missions:"STS-47", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", born : "Los Angeles, California", missions: "STS-56, STS-66, STS-96, STS-110",photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory",born : "Washington, D.C",missions : "	STS-51-B, STS-33, STS-44", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", born : "Philadelphia, Pennsylvania" ,missions : "STS-8, STS-61-A, STS-39, STS-53", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren",born : "Taipei, Taiwan",missions : "Soyuz TMA-17M (Expedition 44/45), SpaceX Crew-4 (Expedition 67/68)", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps",born : "Syracuse, New York" , missions : "Boeing Starliner-1", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:

  addCrewMember(candidate:object){

    if(this.crew.includes(candidate))
    {
      this.inCrew = true;
    }
    else this.inCrew = false;
    if(this.inCrew)
    {
      let index = this.crew.indexOf(candidate);
      this.crew.splice(index,1)
    }
    else if(!this.inCrew && this.crew.length < 3)
    {
      this.crew.push(candidate);
    }
    
    

  }

}
