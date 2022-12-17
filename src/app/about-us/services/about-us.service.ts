import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutUs } from '../model/about-us.model';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private  http:HttpClient) { }
  geAboutUs(){
    return this.http.get<AboutUs>("http://staging.freaksrepublic.com:8065/api/about-us/")
  }
}
