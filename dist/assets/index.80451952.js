var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,l=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&a(e,n,t[n]);if(i)for(var n of i(t))o.call(t,n)&&a(e,n,t[n]);return e},s=(e,i)=>t(e,n(i));"undefined"!=typeof require&&require;import{s as d,C as c,R as m,m as u,r as h,l as p,v as g,W as f,F as C,a as w}from"./vendor.3b06daa4.js";function v({createFile:e}){return m.createElement(k.button,{onClick:()=>e()},E.add,m.createElement(k.p,null,"Add file"))}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const k={button:d.button`${({theme:e})=>c`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: 100%;

        padding: 1.5rem 0;

        outline: none;
        border: none;
        border-radius: 3.3px;

        color: ${e.colors.lightBlack};
        background-color: ${e.colors.primary};
        
        margin-bottom: 4.6rem;

        &:hover {
            cursor: pointer;
            background-color: ${e.colors.primaryDark};
        }
    `}`,p:d.p`
        font-size: 1.8rem;

        margin: 0;
        margin-left: 0.5rem;
    `,icons:{add:d.svg`${({theme:e})=>c`
            fill: ${e.colors.lightBlack};
        `}`}},E={add:m.createElement(k.icons.add,{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M5.66663 1V10.3333",stroke:"#293445",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M1 5.66669H10.3333",stroke:"#293445",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))};function x({name:e,active:t,status:n,onClick:i,onDelete:r}){return m.createElement(y.li,{active:t,onClick:i},m.createElement(y.firstDiv,null,t?b.active:b.inactive,m.createElement(y.a,null,`${e.slice(0,25)}${e.length>25?"...":""}`)),m.createElement(y.secondDiv,null,t&&m.createElement(y.button,null,b[n]),!t&&m.createElement(y.button,{onClick:e=>{e.stopPropagation(),r()}},b.delete)))}const y={li:d.li`${({theme:e,active:t})=>c`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 90%;
        max-width: 90%;

        color: rgba(255, 255, 255, 0.65);
        background-color: ${e.colors.black};

        border-radius: 6px;

        padding: 1rem 0.8rem;
        
        margin-bottom: 1rem;

        & > div > button {
            visibility: hidden;
        }

        &:hover {
            cursor: pointer;

            color: white;
            background-color: rgba(255, 255, 255, 0.05);

            & > div > button { visibility: visible; }
        }

        ${t&&c`
            color: white;
            background-color: rgba(255, 255, 255, 0.05);

            & > div > button { visibility: visible; }

            &:hover { cursor: default; }
        `}
    `}`,firstDiv:d.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 90%;
        max-width: 90%;

        & > svg {
            width: 10%;
            max-width: 10%;
        }
    `,secondDiv:d.div`
        display: flex;
        justify-content: center;
        align-items: center;

        width: 10%;
        max-width: 10%;
        overflow: hidden;
    `,a:d.a`
        font-size: 1.6rem;  

        width: 90%;
        max-width: 90%;
        overflow: hidden;

        white-space: nowrap;

        margin: 0;

        margin-left: 0.5rem;
    `,button:d.button`
        display: block;

        border: none;
        outline: none;
        background: none;

        &:hover {
            cursor: pointer;
        }
    `,icons:{active:d.svg``,inactive:d.svg``,editing:d.svg``,saving:d.svg`
            animation: spin 1s infinite linear;

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(359deg); }
            }
        `,saved:d.svg``,delete:d.svg``}},b={active:m.createElement(y.icons.active,{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M14 2.88062H6C5.46957 2.88062 4.96086 3.09133 4.58579 3.4664C4.21071 3.84147 4 4.35018 4 4.88062V20.8806C4 21.411 4.21071 21.9198 4.58579 22.2948C4.96086 22.6699 5.46957 22.8806 6 22.8806H18C18.5304 22.8806 19.0391 22.6699 19.4142 22.2948C19.7893 21.9198 20 21.411 20 20.8806V8.88062L14 2.88062Z",stroke:"#1FC8E1",strokeOpacity:"0.65",strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M14 2.88062V8.88062H20",stroke:"#1FC8E1",strokeOpacity:"0.65",strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M16 13.8806H8",stroke:"#1FC8E1",strokeOpacity:"0.65",strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M16 17.8806H8",stroke:"#1FC8E1",strokeOpacity:"0.65",strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M10 9.88062H9H8",stroke:"#1FC8E1",strokeOpacity:"0.65",strokeLinecap:"round",strokeLinejoin:"round"})),inactive:m.createElement(y.icons.inactive,{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M14 2.88062H6C5.46957 2.88062 4.96086 3.09133 4.58579 3.4664C4.21071 3.84147 4 4.35018 4 4.88062V20.8806C4 21.411 4.21071 21.9198 4.58579 22.2948C4.96086 22.6699 5.46957 22.8806 6 22.8806H18C18.5304 22.8806 19.0391 22.6699 19.4142 22.2948C19.7893 21.9198 20 21.411 20 20.8806V8.88062L14 2.88062Z",stroke:"white",strokeOpacity:"0.65",strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M14 2.88062V8.88062H20",stroke:"white",strokeOpacity:"0.65",strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M16 13.8806H8",stroke:"white",strokeOpacity:"0.65",strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M16 17.8806H8",stroke:"white",strokeOpacity:"0.65",strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M10 9.88062H9H8",stroke:"white",strokeOpacity:"0.65",strokeLinecap:"round",strokeLinejoin:"round"})),editing:m.createElement(y.icons.editing,{width:"8",height:"9",viewBox:"0 0 8 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.createElement("circle",{cx:"4",cy:"4.68555",r:"4",fill:"#1FC8E1"})),saving:m.createElement(y.icons.saving,{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M6.72796 12.5C7.0041 12.5 7.22796 12.2761 7.22796 12C7.22796 11.7239 7.0041 11.5 6.72796 11.5V12.5ZM6.72796 1L6.73143 0.5H6.72796V1ZM11.4394 7.43558C11.4037 7.70941 11.5968 7.96029 11.8706 7.99594C12.1445 8.03159 12.3954 7.8385 12.431 7.56467L11.4394 7.43558ZM6.72796 11.5C3.8213 11.5 1.5 9.24248 1.5 6.5H0.5C0.5 9.83265 3.30768 12.5 6.72796 12.5V11.5ZM1.5 6.5C1.5 3.75752 3.8213 1.5 6.72796 1.5V0.5C3.30768 0.5 0.5 3.16735 0.5 6.5H1.5ZM6.72449 1.49999C8.10469 1.50956 9.39878 2.07832 10.2879 3.08833C11.1723 4.09284 11.6829 5.56502 11.4394 7.43558L12.431 7.56467C12.7082 5.43522 12.1304 3.66785 11.0385 2.42756C9.95148 1.19276 8.38159 0.511459 6.73143 0.500012L6.72449 1.49999Z",fill:"#1FC8E1"})),saved:m.createElement(y.icons.saved,{width:"14",height:"10",viewBox:"0 0 14 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M13 1L4.75 9.25L1 5.5",stroke:"#1FC8E1",strokeLinecap:"round",strokeLinejoin:"round"})),delete:m.createElement(y.icons.delete,{width:"11",height:"10",viewBox:"0 0 11 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M1.5 0.880615L9.18 8.56061M9.5 0.880615L1.82 8.56061",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}))};function L({children:e}){return m.createElement(F.div,null,e)}const F={div:d.div`${({theme:e})=>c`
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
        max-width: 100%;
        height: auto;

        font-size: 2.2rem;
        font-weight: 500;

        color: white;

        margin-bottom: 4.6rem;
        
        &::before, &::after {
            display: block;
            
            content: '';
            height: 0.3rem;

            background-color: ${e.colors.primary};
            border-radius: 15px;
        }

        &::before { 
            width: 5rem; 
            margin-right: 1rem;
        }
        &::after { 
            width: 100%; 
            margin-left: 1rem;
        }
    `}`};function H(){return m.createElement(M.div,null,j.logo,j.text)}const M={div:d.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin-top: 4rem;
        margin-bottom: 8rem;
    `,icons:{logo:d.svg`
            width: auto;
            height: 6rem;

            margin-right: 2rem;
        `,text:d.svg`
            width: 15rem;
            height: auto;
        `}},j={logo:m.createElement(M.icons.logo,{width:"36",height:"38",viewBox:"0 0 36 38",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M0 36.9821V11.5029V1.37622C0 0.556649 0.926716 0.0802365 1.59323 0.557167L17.3594 11.8389C17.7099 12.0896 18.1811 12.0896 18.5316 11.8389L34.2978 0.557168C34.9643 0.0802374 35.8911 0.556649 35.8911 1.37622V36.9371C35.8911 37.8772 34.7171 38.3047 34.1126 37.5847L24.9553 26.6776C24.5811 26.232 23.9083 26.1952 23.4878 26.5973L18.656 31.2182C18.2609 31.596 17.6364 31.5897 17.2491 31.2038L12.6482 26.6205C12.2332 26.2071 11.5543 26.2337 11.1729 26.6783L1.77157 37.6378C1.1629 38.3474 0 37.9169 0 36.9821Z",fill:"url(#paint0_linear)"}),m.createElement("defs",null,m.createElement("linearGradient",{id:"paint0_linear",x1:"17.6468",y1:"3.07947",x2:"17.6468",y2:"39.703",gradientUnits:"userSpaceOnUse"},m.createElement("stop",{stopColor:"#2DD4BF"}),m.createElement("stop",{offset:"1",stopColor:"#22D3EE"})))),text:m.createElement(M.icons.text,{width:"113",height:"26",viewBox:"0 0 113 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M0.981957 25V8.21526H4.80589L5.17813 10.4826C5.71958 9.67039 6.43022 9.02743 7.31006 8.55366C8.21247 8.05734 9.25023 7.80918 10.4234 7.80918C13.0178 7.80918 14.8564 8.8131 15.9393 10.821C16.5484 9.89599 17.3606 9.16279 18.3758 8.62134C19.4136 8.0799 20.5416 7.80918 21.7598 7.80918C23.9481 7.80918 25.6289 8.46342 26.802 9.77191C27.9751 11.0804 28.5617 12.998 28.5617 15.5247V25H24.2301V15.9308C24.2301 14.487 23.9481 13.3815 23.3841 12.6145C22.8427 11.8474 21.9967 11.4639 20.8461 11.4639C19.673 11.4639 18.7255 11.8926 18.0035 12.7498C17.3042 13.6071 16.9545 14.8028 16.9545 16.3369V25H12.623V15.9308C12.623 14.487 12.341 13.3815 11.777 12.6145C11.213 11.8474 10.3444 11.4639 9.17127 11.4639C8.02071 11.4639 7.08446 11.8926 6.36254 12.7498C5.66318 13.6071 5.31349 14.8028 5.31349 16.3369V25H0.981957ZM35.7535 25.4061C34.3096 25.4061 33.1252 25.1805 32.2003 24.7292C31.2753 24.2555 30.5872 23.6351 30.136 22.868C29.6848 22.101 29.4592 21.255 29.4592 20.33C29.4592 18.7734 30.0683 17.51 31.2866 16.5399C32.5048 15.5699 34.3322 15.0848 36.7687 15.0848H41.0325V14.6787C41.0325 13.5282 40.7054 12.6822 40.0512 12.1407C39.3969 11.5993 38.5848 11.3286 37.6147 11.3286C36.7349 11.3286 35.9678 11.5429 35.3136 11.9715C34.6593 12.3776 34.2532 12.9867 34.0953 13.7989H29.8653C29.9781 12.5806 30.3842 11.5203 31.0835 10.6179C31.8055 9.71551 32.7304 9.02743 33.8584 8.55366C34.9864 8.05734 36.2498 7.80918 37.6485 7.80918C40.0399 7.80918 41.9237 8.40702 43.2998 9.60271C44.676 10.7984 45.3641 12.4904 45.3641 14.6787V25H41.6755L41.2694 22.2928C40.7731 23.1952 40.0737 23.9396 39.1713 24.5262C38.2915 25.1128 37.1522 25.4061 35.7535 25.4061ZM36.7349 22.022C37.9757 22.022 38.9345 21.616 39.6113 20.8038C40.3106 19.9916 40.7505 18.9877 40.931 17.792H37.2425C36.0919 17.792 35.2684 18.0063 34.7721 18.435C34.2758 18.8411 34.0276 19.3487 34.0276 19.9578C34.0276 20.612 34.2758 21.1196 34.7721 21.4806C35.2684 21.8416 35.9227 22.022 36.7349 22.022ZM46.7904 25V8.21526H50.6482L51.0543 11.3624C51.6634 10.2795 52.4868 9.42223 53.5246 8.79054C54.5849 8.1363 55.8257 7.80918 57.247 7.80918V12.3776H56.0288C55.0812 12.3776 54.2352 12.5242 53.4907 12.8175C52.7463 13.1108 52.1597 13.6184 51.7311 14.3403C51.325 15.0622 51.1219 16.0662 51.1219 17.3521V25H46.7904ZM57.5003 25V0.635072H61.8318V15.0171L67.7877 8.21526H72.9314L66.0618 15.8631L74.0481 25H68.6337L61.8318 16.5738V25H57.5003ZM80.7939 25.4061C79.1019 25.4061 77.6017 25.0451 76.2932 24.3232C74.9847 23.6012 73.9582 22.586 73.2137 21.2776C72.4692 19.9691 72.097 18.4575 72.097 16.743C72.097 15.0058 72.458 13.4605 73.1799 12.1069C73.9244 10.7533 74.9396 9.70423 76.2255 8.95974C77.534 8.1927 79.0681 7.80918 80.8277 7.80918C82.4746 7.80918 83.9298 8.17014 85.1931 8.89207C86.4565 9.61399 87.4379 10.6066 88.1372 11.87C88.8591 13.1108 89.2201 14.4982 89.2201 16.0323C89.2201 16.2805 89.2088 16.5399 89.1863 16.8107C89.1863 17.0814 89.175 17.3634 89.1524 17.6567H76.3947C76.4849 18.9651 76.9361 19.9916 77.7483 20.7361C78.583 21.4806 79.5869 21.8528 80.7601 21.8528C81.6399 21.8528 82.3731 21.6611 82.9597 21.2776C83.5688 20.8715 84.02 20.3526 84.3133 19.7209H88.7125C88.3967 20.7812 87.8665 21.7513 87.122 22.6312C86.4001 23.4884 85.4977 24.1652 84.4148 24.6616C83.3545 25.1579 82.1475 25.4061 80.7939 25.4061ZM80.8277 11.3286C79.7674 11.3286 78.8312 11.6331 78.019 12.2422C77.2069 12.8288 76.688 13.7312 76.4624 14.9494H84.8209C84.7532 13.844 84.3471 12.9642 83.6026 12.3099C82.8582 11.6557 81.9332 11.3286 80.8277 11.3286ZM98.3115 25.4061C96.6195 25.4061 95.1192 25.0451 93.8107 24.3232C92.5022 23.6012 91.4758 22.586 90.7313 21.2776C89.9868 19.9691 89.6146 18.4575 89.6146 16.743C89.6146 15.0058 89.9755 13.4605 90.6974 12.1069C91.4419 10.7533 92.4571 9.70423 93.7431 8.95974C95.0515 8.1927 96.5856 7.80918 98.3453 7.80918C99.9922 7.80918 101.447 8.17014 102.711 8.89207C103.974 9.61399 104.955 10.6066 105.655 11.87C106.377 13.1108 106.738 14.4982 106.738 16.0323C106.738 16.2805 106.726 16.5399 106.704 16.8107C106.704 17.0814 106.693 17.3634 106.67 17.6567H93.9123C94.0025 18.9651 94.4537 19.9916 95.2659 20.7361C96.1006 21.4806 97.1045 21.8528 98.2776 21.8528C99.1575 21.8528 99.8907 21.6611 100.477 21.2776C101.086 20.8715 101.538 20.3526 101.831 19.7209H106.23C105.914 20.7812 105.384 21.7513 104.64 22.6312C103.918 23.4884 103.015 24.1652 101.932 24.6616C100.872 25.1579 99.6651 25.4061 98.3115 25.4061ZM98.3453 11.3286C97.285 11.3286 96.3487 11.6331 95.5366 12.2422C94.7244 12.8288 94.2055 13.7312 93.9799 14.9494H102.338C102.271 13.844 101.865 12.9642 101.12 12.3099C100.376 11.6557 99.4508 11.3286 98.3453 11.3286Z",fill:"#FAFAFA"}),m.createElement("path",{d:"M109.535 25.2369C108.745 25.2369 108.091 24.9887 107.572 24.4924C107.076 23.996 106.828 23.3982 106.828 22.6988C106.828 21.9769 107.076 21.3678 107.572 20.8715C108.091 20.3752 108.745 20.127 109.535 20.127C110.324 20.127 110.967 20.3752 111.464 20.8715C111.983 21.3678 112.242 21.9769 112.242 22.6988C112.242 23.3982 111.983 23.996 111.464 24.4924C110.967 24.9887 110.324 25.2369 109.535 25.2369Z",fill:"url(#paint0_linear)"}),m.createElement("defs",null,m.createElement("linearGradient",{id:"paint0_linear",x1:"56.3911",y1:"-9.00003",x2:"56.3911",y2:"35.3144",gradientUnits:"userSpaceOnUse"},m.createElement("stop",{stopColor:"#2DD4BF"}),m.createElement("stop",{offset:"1",stopColor:"#22D3EE"}))))};function V({files:e,actions:t}){const{createFile:n,readFile:i,deleteFile:r}=t;return m.createElement(O.div,null,m.createElement(H,null),m.createElement(L,null,"Files"),m.createElement(v,{createFile:n}),m.createElement(O.ul,null,e.map((({id:e,name:t,active:n,status:o})=>m.createElement(x,{key:e,name:t,active:n,status:o,onClick:()=>i(e),onDelete:()=>r(e)})))))}const O={div:d.div`${({theme:e})=>c`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        width: 25%;
        max-width: 25%;
        height: 100%;

        padding: 2rem 5rem;
        background-color: ${e.colors.black};
    `}`,ul:d.ul`
        list-style: none;

        width: 100%;
        max-width: 100%;

        overflow: auto;

        margin: 0;
        padding: 0;

        &::-webkit-scrollbar {
            width: 1rem;
        }

        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.2);
        }       

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #eeeeee;
        }
    `},$={};function D({markedContent:e}){return m.createElement(Z.div,{dangerouslySetInnerHTML:{__html:e}})}const Z={div:d.div`
        display: inline-block;

        width: 50%;
        max-width: 50%;
        height: 100%;
        max-height: 100%;

        overflow-y: auto;

        font-size: 1.9rem;

        padding-left: 5rem;
        border-left: 1px solid rgba(30, 41, 59, 0.12);
    `};function B({content:e,handleOnChange:t}){return m.createElement(z.div,null,m.createElement(z.textarea,{value:e,onChange:t}))}const z={div:d.div`
        display: block;

        width: 50%;
        max-width: 50%;
        height: 100%;
        max-height: 100%;

        padding-right: 5rem;
        border-right: 1px solid rgba(30, 41, 59, 0.12);
    `,textarea:d.textarea`
        font-family: Inconsolata;
        font-size: 2rem;
        font-weight: 500;

        width: 100%;
        height: 100%;
        max-height: 100%;

        border: none;
        outline: none;
        resize: none;
        background: none;
    `};function S({inputRef:e,value:t,onChange:n}){return m.createElement(A.div,null,_.file,m.createElement(A.input,{ref:e,type:"text",value:t,onChange:n}))}const A={div:d.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        width: 50%;
        max-width: 50%;
        height: 100%;

        margin-bottom: 3rem;
    `,input:d.input`
        display: block;

        width: 100%;
        max-width: 100%;
        height: auto;

        font-size: 2.4rem;
        font-weight: 500;
        
        margin: 0;
        padding: 0;

        border: none;
        outline: none;
        background: none;
    `,icons:{file:d.svg`
            margin-right: 0.8rem;

            width: 3.6rem;
            height: auto;
        `}},_={file:m.createElement(A.icons.file,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z",stroke:"#1FC8E1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M14 2V8H20",stroke:"#1FC8E1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M16 13H8",stroke:"#1FC8E1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M16 17H8",stroke:"#1FC8E1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M10 9H9H8",stroke:"#1FC8E1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))};var I,P;function R({activeFile:e,inputRef:t,actions:n}){var i,r,o;const{createFile:a,updateFile:d}=n;return m.createElement(W.div,null,m.createElement(W.header,null,m.createElement(S,{inputRef:t,value:null!=(i=null==e?void 0:e.name)?i:"Untitled",onChange:t=>{void 0===e?a({name:t.target.value,content:"",status:"editing"}):d(s(l({},e),{name:t.target.value}))}})),m.createElement(W.main,null,m.createElement(B,{content:null!=(r=null==e?void 0:e.content)?r:"",handleOnChange:t=>{void 0===e?a({name:"Untitled",content:t.target.value,status:"editing"}):d(s(l({},e),{content:t.target.value}))}}),m.createElement(D,{markedContent:u(null!=(o=null==e?void 0:e.content)?o:"")})))}(I=()=>import("./index.0fb94104.js"),P=[],P&&0!==P.length?Promise.all(P.map((e=>{if((e=`/${e}`)in $)return;$[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":"modulepreload",t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t?new Promise(((e,t)=>{i.addEventListener("load",e),i.addEventListener("error",t)})):void 0}))).then((()=>I())):I()).then((e=>{const t=e.default;u.setOptions({highlight:(e,n)=>n&&t.getLanguage(n)?t.highlight(e,{language:n}).value:t.highlightAuto(e).value})}));const W={div:d.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        width: 75%;
        max-width: 75%;
        height: 100%;
        max-height: 100%;

        overflow: hidden;

        padding: 5rem;
        background-color: #F9FBFF;
    `,header:d.header`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    `,main:d.main`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;

        height: 100%;
        max-height: 100%;

        overflow: hidden;
    `},T=()=>{const[e,t]=h.exports.useState([]),n=h.exports.useRef(null),i=h.exports.useRef({currentTimeout:void 0,editingFileID:void 0});(({files:e,setFiles:t,timeoutManager:n})=>{h.exports.useEffect((()=>{const i=e.find((e=>e.active));var r;i&&"editing"===i.status&&(r=i,n.current.currentTimeout=window.setTimeout((()=>{t((e=>e.map((e=>(r&&e.id===r.id&&(e.status="saving"),e))))),n.current.currentTimeout=window.setTimeout((()=>{t((e=>e.map((e=>(r&&e.id===r.id&&(e.status="saved"),e)))))}),300)}),300))}),[e])})({files:e,setFiles:t,timeoutManager:i}),(({files:e,setFiles:t})=>{h.exports.useEffect((()=>{!async function(){var e;const n=await p.getItem("markee");n&&(t(n.map((e=>("saving"===e.status&&(e.status="saved"),e)))),window.history.pushState(null,"",`/file/${null==(e=n.find((e=>e.active)))?void 0:e.id}`))}()}),[]),h.exports.useEffect((()=>{e.length>0&&p.setItem("markee",e)}),[e])})({files:e,setFiles:t});return{files:e,actions:{createFile:(e={})=>{var i;const r={id:g(),name:"Untitled",content:"",active:!0,status:"saved"},o=s(l(l({},r),e),{active:!0});t((e=>e.map((e=>s(l({},e),{active:!1}))).concat(o))),window.history.pushState(null,"",`/file/${o.id}`),null==(i=n.current)||i.focus()},readFile:e=>{var i;t((t=>t.map((t=>t.id===e?s(l({},t),{active:!0}):s(l({},t),{active:!1}))))),window.history.pushState(null,"",`/file/${e}`),null==(i=n.current)||i.focus()},updateFile:e=>{i.current.editingFileID===e.id&&clearTimeout(i.current.currentTimeout),i.current.editingFileID=e.id,t((t=>t.map((t=>e.id===t.id?(e.status="editing",e):t))))},deleteFile:e=>{t((t=>t.filter((t=>t.id!==e))))}},inputRef:n}};function U(){var e;const{files:t,actions:n,inputRef:i}=T();return m.createElement(q.div,null,m.createElement(V,{files:t,actions:n}),m.createElement(R,{activeFile:null!=(e=t.find((e=>e.active)))?e:void 0,inputRef:i,actions:n}))}const q={div:d.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    max-width: 100%;

    height: 100%;
    max-height: 100%;
  `},N={colors:{black:"#1E293B",lightBlack:"#293445",gray:"#E4E5E7",white:"#FAFAFA",primary:"#1FC8E1",primaryDark:"#18A1B5"}};function G(){return m.createElement(C,{theme:N},m.createElement(K,null),m.createElement(U,null))}const K=f`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'DM Sans', sans-serif;
  }

  html,
  body,
  [data-js="app"] {
    width: 100%;
    max-width: 100%;

    height: 100%;
    max-height: 100%;

    overflow: hidden;
  }

  @media only screen and (min-width: 2100px) {
    html {
      font-size: 72%;
    }
  }

  @media only screen and (min-width: 2300px) {
    html {
      font-size: 80%;
    }
  }

  @media only screen and (min-width: 2650px) {
    html {
      font-size: 100%;
    }
  }

  @media only screen and (min-width: 3000px) {
    html {
      font-size: 130%;
    }
  }
`;w.render(m.createElement(m.StrictMode,null,m.createElement(G,null)),document.querySelector('[data-js="app"'));
