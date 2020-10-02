import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css']
})
export class InspectorComponent implements OnInit {

  @Input() public selectedNode:go.Node; 

  public data = {
    key: null,
    color: null,
    group:null
  };


  @Input() public model:go.Model;


  constructor() { }

  ngOnInit(): void {
  }

  public onCommitForm() {
    console.log(this.data.key,this.data.color)
    this.model.startTransaction();
    if(this.data.key!=null){
      this.model.set(this.selectedNode.data, 'key', this.data.key);
    }
    if(this.data.color!=null){
      this.model.set(this.selectedNode.data, 'color', this.data.color);
    }
    //this.model.set(this.selectedNode.data, 'key', this.data.key);
    //this.model.set(this.selectedNode.data, 'color', this.data.color);
    this.model.commitTransaction();
    this.selectedNode=null;
    this.data = {
      key: null,
      color: null,
      group:null
    };
  }

}
