import { defineSlotRecipe } from '@pandacss/dev';

export const buttonSlotRecipe = defineSlotRecipe({
  className: 'button',
  description: 'The styles for the button component',
  slots: ['root'],
  base: {
    root: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      border: '1px solid',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      _hover: {
        background: 'gray.200',
      },
      _active: {
        background: 'gray.300',
      },
    },
  },
  variants: {
    'size': {
      small: {
        root: {
          height: '1.5rem',
          fontSize: '1rem',
          padding: '0 0.75rem',
        },
        item: {
          height: '1.5rem',
        },
      },
      medium: {
        root: {
          height: '2rem',
          fontSize: '1rem',
          padding: '0 1rem',
        },
        item: {
          height: '2rem',
        },
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});