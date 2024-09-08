import { defineSlotRecipe } from '@pandacss/dev';

export const selectSlotRecipe = defineSlotRecipe({
  className: 'select',
  description: 'The styles for the select component',
  slots: ['root', 'list', 'item'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid',
      borderColor: 'gray.500',
      borderRadius: '0.5rem',
      _hover: {
        background: 'gray.200',
      },
      _active: 'gray.300',
    },
    list : { border: '1px solid #666', borderRadius: 'sm' }
  }, 
  variants: {
    'size': {
      small: {
        root: {
          height: '1.5rem',
          fontSize: '0.75rem',
          padding: '0 0.75rem',
        },
      },
      medium: {
        root: {
          height: '2rem',
          fontSize: '1rem',
          padding: '0 1rem',
        },
      }
    }
  },
  defaultVariants: {
    size: 'small',
  },
});