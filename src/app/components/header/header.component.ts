import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ToggleButtonComponent } from '../../shared/components/toggle-button/toggle-button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ToggleButtonComponent, MatIconModule]
})
export class HeaderComponent {}
