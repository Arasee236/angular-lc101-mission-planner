import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments = ["Mars soil sample","Plant growth in habitat","Human bone density"];
  constructor() { }

  ngOnInit() {
  }

  itemBeingEdited:String = "";
  add(experimentName: string) {
  
    if(!this.experiments.includes(experimentName)){
    this.experiments.push(experimentName);}
  
  }

 remove(experimentName: string){
    let index = this.experiments.indexOf(experimentName);
    this.experiments.splice(index,1);
  }

edit(experimentName: string){
    this.itemBeingEdited = experimentName;
  }
  save(updatedName: string,experimentName: string){
    let index = this.experiments.indexOf(experimentName);
    this.experiments[index] = updatedName;
    this.itemBeingEdited = "";
  }


}
