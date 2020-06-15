import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scannerChecker';
  matrixValue = 'Hello, world!';
  correct = false;
  buffer = [];

  @HostListener('window:keydown', ['$event']) checkScanner(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.correct = this.matrixValue === this.buffer.join('');
      this.buffer = [];
      setTimeout(() => this.removeFlash(), 300);
    } else if (!['Shift', 'Alt'].includes(event.key)) {
      this.buffer.push(event.key);
    }
  }

  private removeFlash() {
    this.correct = false;
  }
}
