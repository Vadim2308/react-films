import classes from 'styles/filters.module.scss';
import ResetImg from 'assests/imagesComponents/reset';
import React from 'react';

type TProps = {
  resetState: () => void;
};

export default class ResetFilters extends React.Component<TProps> {
  render() {
    const { resetState } = this.props;
    return (
      <div className={classes.reset}>
        <label className={classes.label}>
          <ResetImg />
          <input onClick={() => resetState()} className={classes.reset__checkboxes} type="reset" />
          <h2 className={classes.reset__title}>Сбросить фильтры</h2>
        </label>
      </div>
    );
  }
}
