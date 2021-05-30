import classes from 'styles/sliders.module.scss';
import { SliderData } from './SlidersData';

const SliderItem = ({ activeSlide }: any) => {
  return (
    <>
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === activeSlide ? classes.slider__active : classes.slider}>
            <img className={classes.item} src={slide.image} />
          </div>
        );
      })}
    </>
  );
};

export default SliderItem;
