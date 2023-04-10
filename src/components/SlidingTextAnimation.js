import React from 'react';

class SlidingTextAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [
        "Over $900 Million Recovered for 5,000+ Clients",
        "Our Compassionate Lawyers Will Fight for Your Rightful Compensation",
        "Let Our Skilled Lawyers Fight for Your Rights and Recovery",
      ],
      currentIndex: 0
    };
    this.changeText = this.changeText.bind(this);
  }

  componentDidMount() {
    setInterval(this.changeText, 5000);
  }

  changeText() {
    const { currentIndex, text } = this.state;
    const nextIndex = (currentIndex + 1) % text.length;
    this.setState({ currentIndex: nextIndex });
  }

  render() {
    const { text, currentIndex } = this.state;
    return (
      <div className="sliding-text-container">
        <div className="sliding-text text-[28px] lg:text-[32px] md:text-[30px]">
          {text[currentIndex]}
        </div>
      </div>
    );
  }
}

export default SlidingTextAnimation;