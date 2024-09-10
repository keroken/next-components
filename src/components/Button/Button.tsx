import { buttonSlotRecipe } from '../../../styled-system/recipes';
import { ButtonProps } from './Button.types';

export const Button = ({ size, onClick }: ButtonProps ) => {
  const classes = buttonSlotRecipe({ size: size  === 'medium' ? 'medium' : 'small' });

  return (
    <button className={classes.root} onClick={onClick}>Click me!</button>
  );
};