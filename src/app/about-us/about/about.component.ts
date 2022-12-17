import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AboutUs } from '../model/about-us.model';
import { loadedAboutUsAction } from '../store/about-us.actions';
import { aboutUsErrorSelector, aboutUsLoadingSelector, aboutUsSelector } from '../store/about-us.selectors';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutUs$!: Observable<AboutUs | null>; ; 
  isLoading$!:Observable<Boolean> ; 
  errors$!:Observable<any> ; 
  constructor(private store:Store){}
  ngOnInit(): void {
    this.store.dispatch(loadedAboutUsAction())
    this.aboutUs$ = this.store.select(aboutUsSelector)
    this.isLoading$ = this.store.select(aboutUsLoadingSelector)
    this.errors$ = this.store.select(aboutUsErrorSelector)
  }

}
