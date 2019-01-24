import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  apiRoot: string = 'http://httpbin.org';

  constructor(private http: Http) { }

  ngOnInit() {
  }

  doGet() {
    console.log('GET');
    let url = `${this.apiRoot}/get`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.get(url, {search}).subscribe(
      (res) => console.log('res: ', res.json())
    );
  }

  doPut() {
    console.log('PUT');
    let url = `${this.apiRoot}/put`;
    this.http.put(url, {pear: 'Bartlett', peach: 'Jersey'}).subscribe(res => console.log('put res: ', res.json()));

  }

  doPost() {
    console.log('POST');
    let url = `${this.apiRoot}/post`;
    let search = new URLSearchParams();
    search.set('abc', 'def');
    search.set('limit', '12');
    this.http.post(url, {apple: 'McIntosh', berry: 'boisson'}, {search}).subscribe(
      res => console.log('post res: ', res.json())
    );
  }

  doDelete() {
    console.log('DELETE');
    let url = `${this.apiRoot}/delete`;
    let search = new URLSearchParams();
    search.set('del', 'param2');
    search.set('limit', '10');
    this.http.delete(url, {search}).subscribe(
      (res) => console.log('delete res: ', res.json())
    );
  }

  doGETAsPromise() {
    console.log('GET as Promise');
    let url = `${this.apiRoot}/get`;
    this.http.get(url)
      .toPromise()
      .then(res => console.log('get as promise res: ', res.json()))
  }

  doGETAsPromiseError() {console.log('GET as Promise Error');}
  doGETAsObservableError() {console.log('ObservableError');}

  doGETWithHeaders() {console.log('GET with headers');}


}
