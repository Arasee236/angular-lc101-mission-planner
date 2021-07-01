import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments = ["Habitat dome","Drones","Food containers","Oxygen tanks"];

  constructor() { }

  ngOnInit() {
  }

  itemBeingEdited:string = "";
  add(itemName: string) {
    
    if(itemName != "" && !this.equipments.includes(itemName))
    {
      this.equipments.push(itemName);
    }
  }
  remove(itemName: string){
    let index = this.equipments.indexOf(itemName);
    this.equipments.splice(index,1);
  }

edit(itemName: string){
    this.itemBeingEdited = itemName;
  }

  save(updatedName: string,equipmentName: string){
    let index = this.equipments.indexOf(equipmentName);
    this.equipments[index] = updatedName;
    this.itemBeingEdited = "";
  }
  

}
