import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GithubService} from '../github/github.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  //providers:[GithubService]
})
export class SearchComponent implements OnInit {

  searchText;
  searchResult;
  searchCount;
  constructor(private router:Router , private githubService:GithubService) { }

  ngOnInit() {
    //this.githubService.getUser();  // // simple service level API Call  
  }
  onKeyup(event){
    this.searchText = event.target.value;
  }
  getUsers(){
    console.log(this.searchText)
    this.githubService.getUser(this.searchText).subscribe(
      res =>{
       // console.log(res)
       this.searchResult = res;
       this.searchCount = res.total_count;
      }
    )};


  showUserDetails(user){
    this.router.navigate(['user', user.login]);
  }
}
