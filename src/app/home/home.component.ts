import { Component /* , OnInit */ } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent /* implements OnInit */ {
  // Initializacion of tasks when page loads(?)
  /* ngOnInit(): void {
  } */
  title = ''

  public profilePic = 'https://assets.puzzlefactory.pl/puzzle/339/998/original.jpg'
}
