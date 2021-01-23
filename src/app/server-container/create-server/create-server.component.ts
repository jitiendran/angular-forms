import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.scss']
})
export class CreateServerComponent implements OnInit {
  // ServerName:string = ''
  @ViewChild('serverName') ServerName:ElementRef;
  ServerType:number = 0
  ServerDesc:string = ''
  @Output('sAdd') serverAdd: EventEmitter<{Name:string,Type:number,Desc:string}> = new EventEmitter()
  constructor(ServerName:ElementRef) {
    this.ServerName = ServerName
   }

  ngOnInit(): void {
  }
  insertServer(data:any){
    this.serverAdd.emit({
      Name: this.ServerName.nativeElement.value,
      Type: data.value,
      Desc: this.ServerDesc
    })
    data.value = null
    this.ServerName.nativeElement.value = ''
    this.ServerDesc = ''
  }

}
