import { useState, useEffect, useRef } from 'react';
import SliderItem from './SliderItem';
import { SliderData } from './SlidersData';
import leftArrow from 'assests/images/pagination/left-arrow.svg';
import rightArrow from 'assests/images/pagination/right-arrow.svg';
import classes from 'styles/sliders.module.scss';

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const delay = 10000;

  useEffect(() => {
    const interval = setTimeout(
      () => setCurrent((prevSlider) => (prevSlider === SliderData.length - 1 ? 0 : prevSlider + 1)),
      delay,
    );
    return () => {
      clearTimeout(interval);
    };
  }, [current]);

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  const changeSlide = (current: any) => {
    console.log(current);
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
