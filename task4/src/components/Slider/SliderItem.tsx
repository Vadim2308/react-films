import classes from 'styles/sliders.module.scss';
import { SliderData } from './SlidersData';

const SliderItem = ({ activeSlide }: any) => {
  return (
    <div className={classes.sliders_items}>
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === activeSlide ? classes.slider__active : classes.slider}>
            <img className={classes.slider__item} src={slide.image} />
          </div>
        );
      })}
    </div>
  );
};

export default SliderItem;
