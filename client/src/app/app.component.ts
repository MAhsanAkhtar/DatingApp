import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _weatherInfo:any
  title = 'The DatingApp';

  ngOnInit() {
  //this.getWwatherInfo();
  this._weatherInfo=[{temp:'31',city:'Lahore'},{temp:'32',city:'KRCHI'}]

  console.log(this._weatherInfo);
  }
  getWwatherInfo()
  {
   
    this.http.get('https://localhost:5001/WeatherForecast')
    .subscribe(response=>{
      //this._weatherInfo = response;
    },error=>{console.log(error)})
    
  }

  constructor(private http:HttpClient){} 
}

  

