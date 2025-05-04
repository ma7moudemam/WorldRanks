import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DevInspectorModule } from 'dev-inspector';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , DevInspectorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WorldRanks';
}
