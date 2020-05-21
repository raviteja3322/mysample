import {
    trigger,
    animate,
    transition,
    style,
    query,state,group ,stagger 
  } from '@angular/animations';
import { reduce } from 'rxjs/operators';
  
  export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
      query(
        ':enter',
        [style({ opacity: 0 })],
        { optional: true }
      ),
      query(
        ':leave',
        [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
        { optional: true }
      )
    ])

  ]);
  export const fadeAnimation2 = trigger('toggleBox', [
    // ...
    state('open', style({
      height: '200px',
      backgroundColor: '#061ff0'
    })),
    state('closed', style({
      height: '70px',
      backgroundColor: '#E91E63',
    })),
    transition('open => closed', [
      animate('.3s')
    ]),
    transition('closed => open', [
      animate('0.3s')
    ]),
  ])

  export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [

        // route 'enter' transition
        transition(':enter', [

            // css styles at start of transition
            style({ opacity: 0 }),

            // animation and styles at end of transition
            animate('.3s', style({ opacity: 1 }))
        ]),
    ]);

    export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutAnimation', [

        // end state styles for route container (host)
        state('*', style({
            // the view covers the whole screen with a semi tranparent background


            // position: 'center',
            position: 'fixed',
            top: 20,
           
            right: 0,
            bottom: 35,
        
        
            backgroundColor: "indianred"

         
            
        })),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen, 
                // -400% is required instead of -100% because the negative position adds to the width of the element
                right: '-200%',
              

                // start with background opacity set to 0 (invisible)
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                right: 0,

                // transition the background opacity to 0.8 to fade it in
                backgroundColor: 'yellow'
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                right: '-400%',

                // transition the background opacity to 0 to fade it out
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }))
        ])
    ]);
  
    export const ravi= trigger('divState',[
        state('yellowbox',style({
          backgroundColor:'yellow',
          transform:'translateX(0) scale(0.5)'
        })),
        state('redbox',style({
          backgroundColor:'red',
          transform:'translateX(250px) scale(1)'
        })),
        transition('yellowbox => redbox',animate(500)),
        transition('redbox => yellowbox',animate(500)),
        //transition('redbox <=> yellowbox',animate(500)),
        
      ])
    export const image =trigger(
        'inOutAnimation', 
        [
          transition(
            ':enter', 
            [
              style({ height: 0, opacity: 0 }),
              animate('1s ease-out', 
                      style({ height: 300, opacity: 1 }))
            ]
          ),
          transition(
            ':leave', 
            [
              style({ height: 300, opacity: 1 }),
              animate('1s ease-in', 
                      style({ height: 0, opacity: 0 }))
            ]
          )
        ]
      )

      export const fadeAnimation1 = trigger('fadeAnimation', [
        transition(':enter', [
          style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]
        ),
        transition(':leave',
          [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
        )
      ]);
      export   const listAnimation = trigger('listAnimation', [
        transition('* <=> *', [
          query(':enter',
            [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
            { optional: true }
          ),
          query(':leave',
            animate('200ms', style({ opacity: 0 })),
            { optional: true }
          )
        ])
      ]);
     

    