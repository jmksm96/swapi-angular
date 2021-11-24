import { IParticlesProps } from 'ng-particles';

export class ParticlesData {
  options!: IParticlesProps;

  constructor(data: { color: string }) {
    this.options = {
      autoPlay: true,
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        color: {
          value: data.color,
        },
        shape: { type: 'circle' },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        move: {
          enable: !window?.matchMedia?.('(prefers-reduced-motion: reduce)')
            .matches,
          speed: 1,
          out_mode: 'out',
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onclick: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
      },
      retina_detect: true,
    };
  }
}
