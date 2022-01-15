import { trigger, state, style, animate, transition } from '@angular/animations';

export function flyInOut() {
    return trigger('flyInOut', [
        state('*', style({
            opacity: 1,
            transform: 'translateY(0)'
        })),
        transition(':enter', [
            style({
                opacity:0,
                transform: 'translateY(150%)',
            }), animate('500ms ease-in')
        ]),

    ])
}