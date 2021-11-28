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
      number: {
        value: 355,
        density: {
          enable: true,
          value_area: 789.1476416322727,
        },
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0,
          sync: false,
        },
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
      line_linked: {
        enable: false,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
    },

    retina_detect: true,
  };

  particlesLoaded(container: Container): void {}

  particlesInit(main: Main): void {}
}
