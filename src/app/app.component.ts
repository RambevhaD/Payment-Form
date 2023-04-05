import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  currentPage = 0;
  images = [
    {
      title:'At the Beach',
      url:'https://images.unsplash.com/photo-1657934771872-2ded6ed63a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      title:'Locale',
      url:'https://images.unsplash.com/photo-1678685386096-91b338e203dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'    
    },
    {
      title:'ThirdImage',
      url:'https://images.unsplash.com/photo-1673261544592-ab37b264af40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      title:'ForthImage',
      url:'https://images.unsplash.com/photo-1673261544592-ab37b264af40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      title:'Locale',
      url:'https://images.unsplash.com/photo-1678685386096-91b338e203dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'    
    },
    {
      title:'ForthImage',
      url:'https://images.unsplash.com/photo-1673261544592-ab37b264af40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }   
  ]

  checkWindow(index:number){
    return Math.abs(this.currentPage - index) < 2;
  }
}
