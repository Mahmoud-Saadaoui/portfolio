export const projects = [
    {
        id: 0,
        title: "Animated Navigation",
        description: 'animated navbar without any library using react hooks',
        image: '/project-images/animated-navigation.jpg',
        demo: 'https://react-animated-navigation.netlify.app',
        repo: 'https://github.com/Saadaoui-Forkan/react-navbars/tree/main/animated-navigation'
    },
    {
        id: 1,
        title: "Netflix Navigation",
        description: 'animated navbar without any library using react hooks',
        image: '/project-images/netflix-navigation.JPG',
        demo: 'https://react-netflix-navigation.netlify.app',
        repo: 'https://github.com/Saadaoui-Forkan/react-navbars/tree/main/netflix-nav'
    },
    {
        id: 2,
        title: "Rotating Navigation",
        description: 'rotating animated navbar using only react hooks without any library',
        image: '/project-images/rotating-animation.JPG',
        demo: 'https://react-js-rotating-navigation.netlify.app',
        repo: 'https://github.com/Saadaoui-Forkan/react-navbars/tree/main/rotating%20navigation'
    },
    {
        id: 3,
        title: "Music Player",
        description: 'This is a basic audio player using react with basic functionality of playing  a track, pausing the track, skipping to the previous track, skipping to the next track, and seek-bar.',
        image: '/project-images/music-player.JPG',
        demo: 'https://audio-player-with-react.netlify.app',
        repo: 'https://github.com/Saadaoui-Forkan/music-player'
    },
    {
        id: 4,
        title: "Hidden Search Widget",
        description: 'animated search input using only react hooks without any library',
        image: '/project-images/hidden-search-widget.JPG',
        demo: 'https://animated-search-react.netlify.app',
        repo: 'https://github.com/Saadaoui-Forkan/react-navbars/tree/main/hidden_search_widget'
    },
    {
        id: 5,
        title: "Array Methods",
        description: 'basic project to understand array methods like filter sort and reduce using react js',
        image: '/project-images/array-methods.JPG',
        demo: 'https://react-array-methods.netlify.app/',
        repo: 'https://github.com/Saadaoui-Forkan/react-array-methods'
    },
]

export const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };