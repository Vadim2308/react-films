import classes from 'styles/sliders.module.scss';
import { SliderData } from './SlidersData';

type TProps = {
  activeSlide: number;
};

const SliderItem = ({ activeSlide }: TProps) => {
  return (
    <div className={classes.sliders_items}>
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === activeSlide ? classes.slider__active : classes.slider}>
            <img className={classes.slider__item} src={slide.image} alt="slider" />
          </div>
        );
      })}
    </div>
  );
};

export default SliderItem;
