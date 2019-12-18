import { trigger, state, transition, style, animate, keyframes, animation, useAnimation, query } from '@angular/animations';

// image-upload-panel animation
export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),

    transition(':enter, :leave', [
        animate('1s')
    ])
]);

// image-greyscale-previews animation
let greyscalePanelAnimation = animation(
    animate('0.5s 0s ease-in', keyframes([
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(-20px)'
        }),

        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(+100%)'
        })
    ]))
);

export let greyscalePanelFade = trigger('greyscalePanelFade', [
    transition(':enter', [
        query('.mat-expansion-panel-content', [
            style({ visibility: 'hidden', width:0, height:0})
        ]),
        style({ opacity: 0, transform: 'translateX(-10px)' }),
        animate('0.5s 0s ease-out')
    ]),

    transition(':leave', [
        useAnimation(greyscalePanelAnimation)
    ])
]);

