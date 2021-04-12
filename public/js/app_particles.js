particlesJS("particles-js", 
{
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 840
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "triangle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 42
      },
    },
    opacity: {
      value: 0.42,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 42,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 210,
      color: "#ffffff",
      opacity: 0.42,
      width: 1
    },
    move: {
      enable: true,
      speed: 4.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 420,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 420,
        size: 42,
        duration: 2.1,
        opacity: 8.4,
        speed: 3
      },
      repulse: {
        distance: 84,
        duration: 0.84
      },
      push: {
        particles_nb: 4.2
      },
      remove: {
        particles_nb: 2.1
      }
    }
  },
  retina_detect: true
});