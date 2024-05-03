import { trigger, state, style, animate, transition } from '@angular/animations';

export const slideUpDown = trigger('slideUpDown', [
  state('void', style({
    height: '0',
    opacity: '0'
  })),
  state('*', style({
    height: '*',
    opacity: '1'
  })),
  transition('void <=> *', animate('300ms ease-in-out'))
]);
