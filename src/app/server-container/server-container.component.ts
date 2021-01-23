import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-container',
  templateUrl: './server-container.component.html',
  styleUrls: ['./server-container.component.scss']
})
export class ServerContainerComponent implements OnInit {
  Servers:any[] = []
  constructor() { }

  ngOnInit(): void {
  }
  Addserver(data:{Name:string,Type:number,Desc:string}){
    this.Servers.push({
      ServerName: data.Name,
      ServerType: data.Type,
      ServerDesc: data.Desc
    })
  }
}
