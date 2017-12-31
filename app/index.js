/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================

document.addEventListener('DOMContentLoaded', function() {
  const App = new Application;
  App.draw();
}, false);


class Application {
  constructor() {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas); // adds the canvas to the body element
  }

  draw() {
    console.log(this.canvas);
  }
}
