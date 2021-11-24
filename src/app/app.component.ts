import { Component } from '@angular/core';
import { Container, Main } from 'ng-particles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  id = 'tsparticles';

  particlesOptions = {
    particles: {
      color: {
        value: ['#ffff'],
      },
      move: {
        enable: true,
        speed: 1,
      },
      background: {
        position: '50% 50%',
        repeat: 'no-repeat',
        size: '20%',
        opacity: 1,
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
    },
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
}
