import React, { Component } from 'react';
import BannerTop from './BannerTop';

class BackgroundSlide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      images: [
        'https://i.ibb.co/jfdgXMs/Copy-of-Purple-Minimalist-World-Day-For-International-Justice-Facebook-Event-Cover-2000-727-px.jpg',
        'https://i.ibb.co/ZTM1XR0/Copy-of-Purple-Minimalist-World-Day-For-International-Justice-Facebook-Event-Cover-2000-727-px-1.jpg',
        'https://i.ibb.co/QDDBw2p/Winning-Post-1.jpg'
      ]
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        currentIndex: (this.state.currentIndex + 1) % this.state.images.length
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentIndex, images } = this.state;

    return (
      <div
        className="background-slide"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <BannerTop />
      </div>
    );
  }
}

export default BackgroundSlide;
