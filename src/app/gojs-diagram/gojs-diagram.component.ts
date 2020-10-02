import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef} from '@angular/core';
import * as go from 'gojs'

const $=go.GraphObject.make


@Component({
  selector: 'app-gojs-diagram',
  templateUrl: './gojs-diagram.component.html',
  styleUrls: ['./gojs-diagram.component.css']
})
export class GojsDiagramComponent implements OnInit {

  
  public diagram: go.Diagram = null;

  @Input()
  public model: go.GraphLinksModel;

  @Output()
  public nodeClicked=new EventEmitter()




  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.diagram = $(go.Diagram, 'myDiagramDiv')
    this.diagram.grid.visible = true;
    this.diagram.groupTemplate =
    $(go.Group, "Vertical",
      $(go.Panel, "Auto",
        $(go.Shape, "Rectangle",  // surrounds the Placeholder
          { parameter1: 14,
            fill: "rgba(128,128,128,0.33)" },new go.Binding("desiredSize", "size", go.Size.parse)),
 // with some extra padding around them
      ),
      $(go.TextBlock,         // group title
        { alignment: go.Spot.Right, font: "Bold 12pt Sans-Serif" },
        new go.Binding("text", "key")
        )
      
    );




    this.diagram.nodeTemplate =
    $(go.Node, "Auto",
    { resizable: true},new go.Binding("resizable","resize"),
    new go.Binding("location", "loc").makeTwoWay(),new go.Binding("height", "h").makeTwoWay(),new go.Binding("width", "w").makeTwoWay(),
     // the Shape automatically fits around the TextBlock
      $(go.Shape, "RoundedRectangle",  // use this kind of figure for the Shape
        // bind Shape.fill to Node.data.color
        new go.Binding("fill", "color")),
        
      $(go.TextBlock,
        { margin: 3 },  // some room around the text
        // bind TextBlock.text to Node.data.key
        new go.Binding("text", "key")),
    );

    this.diagram.model=this.model
    //this.diagram.model.addNodeData({key:'c',color:'blue'})
    this.diagram.allowDrop = true;
    this.diagram.addDiagramListener('ObjectSingleClicked', (e) => {
      console.log('Add diagram listener invoked to emit the node')
      const node = this.diagram.selection.first();
      if(node&&node!=null){
        this.nodeClicked.emit(node);
        console.log('node being clicked')
        console.log(node.data.key)
        console.log(node.data.color)
        console.log(node.data.loc)
        console.log(node.part.location)
        console.log(node.part.width)
        console.log(node.part.height),
        console.log(node.data.h),
        console.log(node.data.w)
      }
    });
    //this.diagram.model.addNodeData(nodeArray)
    this.diagram.addDiagramListener('SelectionMoved', (e) => {
      console.log('Add diagram listener invoked to emit the node')
      const node = this.diagram.selection.first();
      if(node&&node!=null){
        this.nodeClicked.emit(node);
        console.log('node being clicked 2')
        console.log(node.data.key)
        console.log(node.data.color)
        console.log(node.data.loc)
        console.log(node.part.location)
        console.log(node.part.width)
      }
    });

    this.diagram.addDiagramListener('ExternalObjectsDropped', (e) => {
      console.log('Add diagram ext')
      const node = this.diagram.selection.first();
      console.log(node.containingGroup)
      console.log(this.diagram.model.nodeDataArray)
      this.model.startTransaction();
      this.model.set(node.data, 'group', "ShopFloor");
      this.model.commitTransaction();
      
    });

  }

  addYellow(){
    this.diagram.model.addNodeData({key:'Item',color:'yellow'})
  }
  TellInfo(){
    console.log(this.diagram.model.nodeDataArray)
  }


  



}
