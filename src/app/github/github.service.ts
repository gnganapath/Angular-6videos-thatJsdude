import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class GithubService {

  constructor(private http: HttpClient) { }

 
  // getUser(){                      // simple service level API
  //   const searchText = 'JS';
  //   const url= 'http://api.github.com/search/users?q='+searchText;
  //   this.http.get(url).subscribe(
  //     res => {
  //       const data = res;
  //       console.log(data)
  //       return data;
  //     }
  //   )
  // }

  getUser(searchText): Observable<any>{             // rxjs - observable call for API
    const url= 'http://api.github.com/search/users?q='+searchText;
    return  this.http.get(url).map(
      res => {
        const data = res;
        console.log(data)
        return data;
      }
    )
  }
}
