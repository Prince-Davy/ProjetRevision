import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "./app.service";
import {Router} from "@angular/router";
import { finalize } from 'rxjs/operators';


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

  constructor(private http:HttpClient, private appService:AppService, private router:Router) {
      console.log('HttpClient :', this.http);
  }

    ngOnInit(): void {
        this.http.get<Greeting>('http://localhost:8080/resource').subscribe(
            data => {
                this.greeting = data
                console.log(data)});

        this.appService.authenticate(undefined, undefined);
  }

  logout() {
    this.http.post('logout',{}).pipe(
      finalize(() => {
        this.appService.authenticated = false;
        this.router.navigateByUrl('login');
    })).subscribe();
  }
}
