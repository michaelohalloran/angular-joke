import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs';

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
    let search = new URLSearchParams();
    search.set('mySearch', 'queryHere');
    this.http.get(url, {search})
      .toPromise()
      .then(res => console.log('get as promise res: ', res.json()))
  }

  doGETAsPromiseError() {
    console.log('GET as Promise Error');
    let url = `${this.apiRoot}/getffg`;
    let search = new URLSearchParams();
    search.set('mySearch', 'queryHere');
    this.http.get(url, {search})
      .toPromise()
      .then(res => console.log('get as promise res: ', res.json()))
      .catch(err => console.error(`Error: ${err.status} ${err.statusText}`));
  }


  doGETAsObservableError() {
    console.log('ObservableError');
    let url = `${this.apiRoot}/get`;
    let search = new URLSearchParams();
    search.set('mySearch', 'queryHere');
    this.http.post(url, {search})
      .subscribe(
        res => console.log('get as observable res: ', res.json()),
        err => console.log(`Error: ${err.status} ${err.statusText}`)
      )
  }

  doGETWithHeaders() {
    console.log('GET with headers');
    let headers = new Headers();
    headers.append('Authorization', btoa('username: password'));
    let search = new URLSearchParams();
    search.set('pineapple', 'Bromelain');
    let opts = new RequestOptions();
    opts.headers = headers;
    opts.search = search;
    let url = `${this.apiRoot}/get`;
    this.http.get(url, opts).subscribe(
      res => console.log('get with headers res: ', res.json()),
      err => console.error(`Error: ${err.status} ${err.statusText}`)
    );
  }


}
