import { useState } from 'react';
import SliderItem from './SliderItem';
import { SliderData } from './SlidersData';
import leftArrow from 'assests/images/pagination/left-arrow.svg';
import rightArrow from 'assests/images/pagination/right-arrow.svg';
import classes from 'styles/sliders.module.scss';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
  const changeSlide = (current: any) => {
    if (current === SliderData.length) {
      setCurrent(0);
      return;
    }
    if (current < 0) {
      setCurrent(SliderData.length - 1);
      return;
    }
    setCurrent(current);
  };

  const startTimer = () => {
    setInterval(() => {
      changeSlide(current + 1);
    }, 2000);
  };

  return (
    <div className={classes.sliders}>
      <SliderItem activeSlide={current} />
      <img onClick={() => changeSlide(current - 1)} src={leftArrow} className={classes.btn_left} />
      <img
        onClick={() => changeSlide(current + 1)}
        src={rightArrow}
        className={classes.btn_right}
      />
    </div>
  );
};

export default Slider;
