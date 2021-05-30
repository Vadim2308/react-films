import { useState } from 'react';
import SliderItem from './SliderItem';
import classes from 'styles/sliders.module.scss';

const Slider = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className={classes.sliders}>
      <SliderItem activeSlide={current} />
    </div>
  );
};

export default Slider;
