import {Component} from '@angular/core';

const version = '1.0';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version_display: string = version;
}
