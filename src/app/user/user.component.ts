import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private userDetail;

  constructor( private activatedRouter:ActivatedRoute, private githubService: GithubService) { }

  ngOnInit() {
    const userId = this.activatedRouter.snapshot.params['userId'];
    console.log(userId)
    this.githubService.getUserDetails(userId).subscribe( 
      res =>{
        this.userDetail = res;
        console.log(this.userDetail)
      }
    )
  }

}
