The setting array to be provided to svgAnimator must follow below template: 


```
const arr = [
 { 
    msTime: 0,
    frame: {
    className: "full-view-port",
    viewBox: "0 0 251 327",
    preserveAspectRatio: undefined,
    uses: [
      {fill:"green", id:"suit", xlinkHref: "#suit", opacity: "0.5"},
      {fill:"yellow", id:"tie", xlinkHref: "#tie", opacity: "0.9"},
      {fill:"blue", id:"hair", xlinkHref: "#hair", opacity: "1"},
      {fill:"pink", id:"face", xlinkHref: "#face", opacity: "0.4"}
    ]
  }},
  { 
    msTime: 3000,
    frame: {
    className: "full-view-port",
    viewBox: "0 0 251 327",
    preserveAspectRatio: undefined,
    uses: [
      {fill:"red", id:"suit", xlinkHref: "#suit", opacity: "1"},
      {fill:"red", id:"tie", xlinkHref: "#tie", opacity: "1"},
      {fill:"red", id:"hair", xlinkHref: "#hair", opacity: "1"},
      {fill:"red", id:"face", xlinkHref: "#face", opacity: "1"}
    ]
    }
  }]
```

In above configuration, the first frame will be display as soon as the component get mounted and then after 3000ms, the second SVG will be displayed