import React from "react";
import styled from "styled-components";

function Logo () {
    return (
        <S.div>
            {icons['logo']}
            {icons['text']}
        </S.div>
    );
}

const S = {
    div: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin-top: 4rem;
        margin-bottom: 8rem;
    `,
    icons: {
        logo: styled.svg`
            width: auto;
            height: 6rem;

            margin-right: 2rem;
        `,
        text: styled.svg`
            width: 15rem;
            height: auto;
        `,
    },
}

const icons = {
    logo: (
        <S.icons.logo width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36.9821V11.5029V1.37622C0 0.556649 0.926716 0.0802365 1.59323 0.557167L17.3594 11.8389C17.7099 12.0896 18.1811 12.0896 18.5316 11.8389L34.2978 0.557168C34.9643 0.0802374 35.8911 0.556649 35.8911 1.37622V36.9371C35.8911 37.8772 34.7171 38.3047 34.1126 37.5847L24.9553 26.6776C24.5811 26.232 23.9083 26.1952 23.4878 26.5973L18.656 31.2182C18.2609 31.596 17.6364 31.5897 17.2491 31.2038L12.6482 26.6205C12.2332 26.2071 11.5543 26.2337 11.1729 26.6783L1.77157 37.6378C1.1629 38.3474 0 37.9169 0 36.9821Z" fill="url(#paint0_linear)"/>
            <defs>
                <linearGradient id="paint0_linear" x1="17.6468" y1="3.07947" x2="17.6468" y2="39.703" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2DD4BF"/>
                    <stop offset="1" stop-color="#22D3EE"/>
                </linearGradient>
            </defs>
        </S.icons.logo>
    ),
    text: (
        <S.icons.text width="113" height="26" viewBox="0 0 113 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.981957 25V8.21526H4.80589L5.17813 10.4826C5.71958 9.67039 6.43022 9.02743 7.31006 8.55366C8.21247 8.05734 9.25023 7.80918 10.4234 7.80918C13.0178 7.80918 14.8564 8.8131 15.9393 10.821C16.5484 9.89599 17.3606 9.16279 18.3758 8.62134C19.4136 8.0799 20.5416 7.80918 21.7598 7.80918C23.9481 7.80918 25.6289 8.46342 26.802 9.77191C27.9751 11.0804 28.5617 12.998 28.5617 15.5247V25H24.2301V15.9308C24.2301 14.487 23.9481 13.3815 23.3841 12.6145C22.8427 11.8474 21.9967 11.4639 20.8461 11.4639C19.673 11.4639 18.7255 11.8926 18.0035 12.7498C17.3042 13.6071 16.9545 14.8028 16.9545 16.3369V25H12.623V15.9308C12.623 14.487 12.341 13.3815 11.777 12.6145C11.213 11.8474 10.3444 11.4639 9.17127 11.4639C8.02071 11.4639 7.08446 11.8926 6.36254 12.7498C5.66318 13.6071 5.31349 14.8028 5.31349 16.3369V25H0.981957ZM35.7535 25.4061C34.3096 25.4061 33.1252 25.1805 32.2003 24.7292C31.2753 24.2555 30.5872 23.6351 30.136 22.868C29.6848 22.101 29.4592 21.255 29.4592 20.33C29.4592 18.7734 30.0683 17.51 31.2866 16.5399C32.5048 15.5699 34.3322 15.0848 36.7687 15.0848H41.0325V14.6787C41.0325 13.5282 40.7054 12.6822 40.0512 12.1407C39.3969 11.5993 38.5848 11.3286 37.6147 11.3286C36.7349 11.3286 35.9678 11.5429 35.3136 11.9715C34.6593 12.3776 34.2532 12.9867 34.0953 13.7989H29.8653C29.9781 12.5806 30.3842 11.5203 31.0835 10.6179C31.8055 9.71551 32.7304 9.02743 33.8584 8.55366C34.9864 8.05734 36.2498 7.80918 37.6485 7.80918C40.0399 7.80918 41.9237 8.40702 43.2998 9.60271C44.676 10.7984 45.3641 12.4904 45.3641 14.6787V25H41.6755L41.2694 22.2928C40.7731 23.1952 40.0737 23.9396 39.1713 24.5262C38.2915 25.1128 37.1522 25.4061 35.7535 25.4061ZM36.7349 22.022C37.9757 22.022 38.9345 21.616 39.6113 20.8038C40.3106 19.9916 40.7505 18.9877 40.931 17.792H37.2425C36.0919 17.792 35.2684 18.0063 34.7721 18.435C34.2758 18.8411 34.0276 19.3487 34.0276 19.9578C34.0276 20.612 34.2758 21.1196 34.7721 21.4806C35.2684 21.8416 35.9227 22.022 36.7349 22.022ZM46.7904 25V8.21526H50.6482L51.0543 11.3624C51.6634 10.2795 52.4868 9.42223 53.5246 8.79054C54.5849 8.1363 55.8257 7.80918 57.247 7.80918V12.3776H56.0288C55.0812 12.3776 54.2352 12.5242 53.4907 12.8175C52.7463 13.1108 52.1597 13.6184 51.7311 14.3403C51.325 15.0622 51.1219 16.0662 51.1219 17.3521V25H46.7904ZM57.5003 25V0.635072H61.8318V15.0171L67.7877 8.21526H72.9314L66.0618 15.8631L74.0481 25H68.6337L61.8318 16.5738V25H57.5003ZM80.7939 25.4061C79.1019 25.4061 77.6017 25.0451 76.2932 24.3232C74.9847 23.6012 73.9582 22.586 73.2137 21.2776C72.4692 19.9691 72.097 18.4575 72.097 16.743C72.097 15.0058 72.458 13.4605 73.1799 12.1069C73.9244 10.7533 74.9396 9.70423 76.2255 8.95974C77.534 8.1927 79.0681 7.80918 80.8277 7.80918C82.4746 7.80918 83.9298 8.17014 85.1931 8.89207C86.4565 9.61399 87.4379 10.6066 88.1372 11.87C88.8591 13.1108 89.2201 14.4982 89.2201 16.0323C89.2201 16.2805 89.2088 16.5399 89.1863 16.8107C89.1863 17.0814 89.175 17.3634 89.1524 17.6567H76.3947C76.4849 18.9651 76.9361 19.9916 77.7483 20.7361C78.583 21.4806 79.5869 21.8528 80.7601 21.8528C81.6399 21.8528 82.3731 21.6611 82.9597 21.2776C83.5688 20.8715 84.02 20.3526 84.3133 19.7209H88.7125C88.3967 20.7812 87.8665 21.7513 87.122 22.6312C86.4001 23.4884 85.4977 24.1652 84.4148 24.6616C83.3545 25.1579 82.1475 25.4061 80.7939 25.4061ZM80.8277 11.3286C79.7674 11.3286 78.8312 11.6331 78.019 12.2422C77.2069 12.8288 76.688 13.7312 76.4624 14.9494H84.8209C84.7532 13.844 84.3471 12.9642 83.6026 12.3099C82.8582 11.6557 81.9332 11.3286 80.8277 11.3286ZM98.3115 25.4061C96.6195 25.4061 95.1192 25.0451 93.8107 24.3232C92.5022 23.6012 91.4758 22.586 90.7313 21.2776C89.9868 19.9691 89.6146 18.4575 89.6146 16.743C89.6146 15.0058 89.9755 13.4605 90.6974 12.1069C91.4419 10.7533 92.4571 9.70423 93.7431 8.95974C95.0515 8.1927 96.5856 7.80918 98.3453 7.80918C99.9922 7.80918 101.447 8.17014 102.711 8.89207C103.974 9.61399 104.955 10.6066 105.655 11.87C106.377 13.1108 106.738 14.4982 106.738 16.0323C106.738 16.2805 106.726 16.5399 106.704 16.8107C106.704 17.0814 106.693 17.3634 106.67 17.6567H93.9123C94.0025 18.9651 94.4537 19.9916 95.2659 20.7361C96.1006 21.4806 97.1045 21.8528 98.2776 21.8528C99.1575 21.8528 99.8907 21.6611 100.477 21.2776C101.086 20.8715 101.538 20.3526 101.831 19.7209H106.23C105.914 20.7812 105.384 21.7513 104.64 22.6312C103.918 23.4884 103.015 24.1652 101.932 24.6616C100.872 25.1579 99.6651 25.4061 98.3115 25.4061ZM98.3453 11.3286C97.285 11.3286 96.3487 11.6331 95.5366 12.2422C94.7244 12.8288 94.2055 13.7312 93.9799 14.9494H102.338C102.271 13.844 101.865 12.9642 101.12 12.3099C100.376 11.6557 99.4508 11.3286 98.3453 11.3286Z" fill="#FAFAFA"/>
            <path d="M109.535 25.2369C108.745 25.2369 108.091 24.9887 107.572 24.4924C107.076 23.996 106.828 23.3982 106.828 22.6988C106.828 21.9769 107.076 21.3678 107.572 20.8715C108.091 20.3752 108.745 20.127 109.535 20.127C110.324 20.127 110.967 20.3752 111.464 20.8715C111.983 21.3678 112.242 21.9769 112.242 22.6988C112.242 23.3982 111.983 23.996 111.464 24.4924C110.967 24.9887 110.324 25.2369 109.535 25.2369Z" fill="url(#paint0_linear)"/>
            <defs>
                <linearGradient id="paint0_linear" x1="56.3911" y1="-9.00003" x2="56.3911" y2="35.3144" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2DD4BF"/>
                    <stop offset="1" stop-color="#22D3EE"/>
                </linearGradient>
            </defs>
        </S.icons.text>
    ),
}

export { Logo }