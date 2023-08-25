import { Component } from '@angular/core';

import users from '../users-data.json';

@Component({
  selector: 'app-tablerow',
  templateUrl: './tablerow.component.html',
  styleUrls: ['./tablerow.component.scss'],
})
export class TablerowComponent {
  users = users;
}
