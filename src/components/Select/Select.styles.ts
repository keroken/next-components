import { defineSlotRecipe } from '@pandacss/dev';

export const selectRecipe = defineSlotRecipe({
  className: 'select',
  description: 'The styles for the select component',
  slots: ['root', 'list', 'item'],
  base: {
    root: { display: 'flex', alignItems: 'center', gap: '2', backgroundColor: 'blue.300'},
    list : { border: '1px solid #666', borderRadius: 'sm' }
  }
})