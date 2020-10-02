import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef} from '@angular/core';
import * as go from 'gojs'

const $=go.GraphObject.make

@Component({
  selector: 'app-pal',
  templateUrl: './pal.component.html',
  styleUrls: ['./pal.component.css']
})
export class PalComponent implements OnInit {
  public palette: go.Palette;
  @Input() public model2:go.Model;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.palette=$(go.Palette, 'paletteDiv')
    this.palette.nodeTemplate =
    $(go.Node,"Horizantal",
      $(go.Shape,'Rectangle',
        { width: 30, height: 20},
        new go.Binding("fill", "color")),
      $(go.TextBlock,
        new go.Binding("text", "key"))
    );

    
    
//
    this.palette.model= $(go.Model)
    this.palette.model.addNodeDataCollection([{key:'veg',color:'green'},
    {key:'fruits',color:'yellow'},
    {key:'milk',color:'white'},
    {key:'meds',color:'blue'},
    {key:'infants',color:'pink'},
    {key:'coffee',color:'brown'},
    {key:'water',color:'aqua'},
    {key:'bakery',color:'orange'},
    {key:'kitchen',color:'purple'},
  {key:'snacks',color:'orange'}])
  }
}
