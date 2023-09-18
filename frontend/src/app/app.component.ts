import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Greeting{
    id: string;
    content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'App';
  greeting: Greeting = {id:'', content:''};

  constructor(private http:HttpClient) {
      console.log('HttpClient :', this.http);
  }

    ngOnInit(): void {
        this.http.get<Greeting>('http://localhost:8080/resource').subscribe(
            data => {
                this.greeting = data
                console.log(data)});
  }
}
