import {Component, OnInit} from '@angular/core';
import {from, of} from 'rxjs';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    of('Apple', 'Fiji').subscribe(console.log);
    from(['myple', 'fuji']).
    subscribe(
      item => console.log(),
      err => console.error('error occured ${err}'),
      () => console.log('No more apples')
    );
  }
}
