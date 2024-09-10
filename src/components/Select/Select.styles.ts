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
      width: 'fit-content',
      _hover: {
        background: 'gray.200',
      },
      _active: {
        background: 'gray.300',
      },
    },
    list: {
      border: '1px solid',
      borderColor: 'gray.500',
      borderRadius: 'sm',
      padding: '0.5rem 0',
      marginTop: '0.25rem',
      width: 'max-content',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      padding: '0 1rem',
      fontSize: '1rem',
      _hover: {
        background: 'gray.200',
      },
      _active: {
        background: 'gray.300',
      }
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