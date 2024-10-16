import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-http',
  template: `<div>Check console for API response</div>`,
  standalone: true,
  imports: [HttpClientModule]
})
export class TestHttpComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
