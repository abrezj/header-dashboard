import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faUserCircle,
  faBell,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars, faUserCircle, faBell, faQuestionCircle);
  }

  ngOnInit(): void {}
}
