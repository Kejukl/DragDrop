import { Component, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'GJ1';
  public selectedNode=null;


  public model: go.Model = new go.GraphLinksModel(
    [ // a JavaScript Array of JavaScript objects, one per node;
      // the "color" property is added specifically for this app
      { key: "ShopFloor", color: "rgba(0,0,0,0)" ,loc: new go.Point(0, 0),size: "500 500",isGroup: true,resize:false},
      { key: "Till", color: "orange",loc: new go.Point(50, 0) ,group: "ShopFloor"},
      { key: "Flowers", color: "lightgreen",loc: new go.Point(50, 100) ,group: "ShopFloor"},
      { key: "Tobacco", color: "pink" ,loc: new go.Point(50, 150),group: "ShopFloor"}
    ]);

    


  

  public setSelectedNode(node){
    console.log('this is setSelectedNode in app.ts and got the event fired from diagram.ts')
    //nodeClicked has been declared in gojs-diagram.ts as an event emitter
    //(nodeClicked)=setSelectedNode($event) has been used in app.component.htlm
    //the node has been passed as the event into this function
    if(node&&node!=null){
      this.selectedNode=node;
      //selectedNode is an input for inspector component
    }
  }

  tellInfo(){
    console.log(this.model.toJson() )

  }


}
