import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of,Subject } from 'rxjs';
import {map} from 'rxjs/operators';
@Component({ 
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
pagePhoto : any;
  constructor(private http:Http) { }

  ngOnInit() {
  }
  onSearch(data){
    this.http.get("https://pixabay.com/api/?key=14403324-aa3146ef765b232ee2b68f969"+data.motCle+"&per_page=10&page=1") 
    .pipe( map( ( resp: any)=>resp.json()))
    .subscribe(data=> {
      console.log(data);
      this.pagePhoto=data;
    })


  }

}
