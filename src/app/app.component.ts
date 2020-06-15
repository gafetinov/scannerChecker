import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scannerChecker';
  matrixValue = 'Hello, world!';
  showResult = false;
  correct = false;
  buffer = [];

  @HostListener('window:keydown', ['$event']) checkScanner(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log(this.buffer.join(''));
      this.correct = this.matrixValue === this.buffer.join('');
      this.showResult = true;
    } else if (!['Shift', 'Alt'].includes(event.key)) {
      this.buffer.push(event.key);
    }
  }
}
