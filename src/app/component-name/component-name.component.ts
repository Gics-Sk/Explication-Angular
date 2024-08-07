import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { GetDateService } from '../service/get-date.service';

@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrl: './component-name.component.css',
})
export class ComponentNameComponent implements OnInit {
  message: string = '';
  Date:string ='';
  constructor(
    private myService: MyServiceService,
    private today: GetDateService
  ) {}

  ngOnInit(): void {
    this.message = this.myService.getHello();
    this.Date=this.today.today();
  }
  onClick() {
    alert('Alerte le bouton à été cliqué ');
  }

  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit("Bonjour je suis le message de l'enfant");
  }
}
