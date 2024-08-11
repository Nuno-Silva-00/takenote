import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navbarComponent } from './navbar/navbar.component';
import { noteBarComponent } from './note-bar/note-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, navbarComponent, noteBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'takenote';
}
