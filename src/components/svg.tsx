const MySVG = () => {

    return (
        <>
            <svg className="icon-library hidden">
                <symbol id="add" viewBox="0 0 25 25">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M12.1429 1V23.2857M1 12.0743H23.2857"></path>
                </symbol>
                <symbol id="arrow-down" viewBox="0 0 17 17">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M8.5 1V16M8.5 16L1.5 9M8.5 16L15.5 9"></path>
                </symbol>
                <symbol id="arrow-left" viewBox="0 0 17 17">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8.5H1M1 8.5L8 1.5M1 8.5L8 15.5">
                    </path>
                </symbol>
                <symbol id="arrow-right" viewBox="0 0 17 17">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M1 8.5H16M16 8.5L9 15.5M16 8.5L9 1.5"></path>
                </symbol>
                <symbol id="arrow-up" viewBox="0 0 16 17">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 16V1M8 1L15 8M8 1L1 8"></path>
                </symbol>
                <symbol id="bulb" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="m3.929 17.356 1.01-1.01m12.122-12.12 1.01-1.01m-14.142 0 1.01 1.01m12.122 12.12 1.01 1.01M1 10.756h1.429m17.143 0H21M11 2.43V1M9.572 21h2.857m4.285-10a5.715 5.715 0 1 0-7.143 5.513v1.63h2.857v-1.63a5.701 5.701 0 0 0 4.286-5.512Z">
                    </path>
                </symbol>
                <symbol id="checklist" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M11 4.333 7 9.667 4.333 7M13 7.667h4m-6 4.666-4 5.334L4.333 15m8.667.667h4M2.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 19.5 1h-17A1.5 1.5 0 0 0 1 2.5v17A1.5 1.5 0 0 0 2.5 21Z">
                    </path>
                </symbol>
                <symbol id="chevron-down" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="m21 6-9.529 8.82A.694.694 0 0 1 11 15a.694.694 0 0 1-.471-.18L1 6"></path>
                </symbol>
                <symbol id="chevron-left" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="m16 21-8.82-9.529A.694.694 0 0 1 7 11c0-.177.065-.346.18-.471L16 1"></path>
                </symbol>
                <symbol id="chevron-right" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="m6 1 8.82 9.529c.115.125.18.294.18.471a.694.694 0 0 1-.18.471L6 21"></path>
                </symbol>
                <symbol id="chevron-up" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="m1 16 9.529-8.82A.694.694 0 0 1 11 7c.177 0 .346.065.471.18L21 16"></path>
                </symbol>
                <symbol id="credit-card" viewBox="0 0 22 18">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M1 5.364h20M5 9.727h7.333M5 12.637h4.667M2.5 17h17a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 19.5 1h-17A1.5 1.5 0 0 0 1 2.5v13A1.5 1.5 0 0 0 2.5 17Z">
                    </path>
                </symbol>
                <symbol id="edit" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M17.416 12.723v6.897c0 .762-.613 1.38-1.368 1.38H2.368A1.374 1.374 0 0 1 1 19.62V5.827c0-.762.612-1.38 1.368-1.38h6.84m2.485 8.863-3.385.488.483-3.414 8.706-8.778a2.04 2.04 0 0 1 2.902 0 2.081 2.081 0 0 1 0 2.926l-8.706 8.778Z">
                    </path>
                </symbol>
                <symbol id="error-circle" viewBox="0 0 24 24">
                    <path fillRule="evenodd"
                        d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25ZM17.0303 6.96869C17.3232 7.26159 17.3232 7.73646 17.0303 8.02935L13.0607 11.999L17.0303 15.9687C17.3232 16.2616 17.3232 16.7365 17.0303 17.0294C16.7374 17.3222 16.2626 17.3222 15.9697 17.0294L12 13.0597L8.03033 17.0294C7.73744 17.3222 7.26256 17.3222 6.96967 17.0294C6.67678 16.7365 6.67678 16.2616 6.96967 15.9687L10.9393 11.999L6.96967 8.02935C6.67678 7.73646 6.67678 7.26159 6.96967 6.96869C7.26256 6.6758 7.73744 6.6758 8.03033 6.96869L12 10.9384L15.9697 6.96869C16.2626 6.6758 16.7374 6.6758 17.0303 6.96869Z"
                        clipRule="evenodd"></path>
                </symbol>
                <symbol id="error" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="m15 7-8 8m0-8 8 8m6-4c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10Z"></path>
                </symbol>
                <symbol id="external-link" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M17.6 12.1v6.6a2.2 2.2 0 0 1-2.2 2.2H3.3a2.2 2.2 0 0 1-2.2-2.2V6.6a2.2 2.2 0 0 1 2.2-2.2h6.6m4.4-3.3h6.6m0 0v6.6m0-6.6L8.8 13.2">
                    </path>
                </symbol>
                <symbol id="faq" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M21.75 18.75h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h19.5a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5Z"
                        clipRule="evenodd"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M9 6.75a3 3 0 1 1 4 2.829 1.5 1.5 0 0 0-1 1.415v.256M12 14.25a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75v0">
                    </path>
                </symbol>
                <symbol id="feedback" viewBox="0 0 25 25">
                    <path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M22 19H11.5L5.5 23.5V19H2.5C1.67157 19 1 18.3284 1 17.5V2.5C1 1.67157 1.67157 1 2.5 1H22C22.8284 1 23.5 1.67157 23.5 2.5V17.5C23.5 18.3284 22.8284 19 22 19Z"
                        clipRule="evenodd"></path>
                    <path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M7.75 9.625C7.54289 9.625 7.375 9.79289 7.375 10C7.375 10.2071 7.54289 10.375 7.75 10.375C7.95711 10.375 8.125 10.2071 8.125 10C8.125 9.79289 7.95711 9.625 7.75 9.625Z"
                        clipRule="evenodd"></path>
                    <path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M12.25 9.625C12.0429 9.625 11.875 9.79289 11.875 10C11.875 10.2071 12.0429 10.375 12.25 10.375C12.4571 10.375 12.625 10.2071 12.625 10C12.625 9.79289 12.4571 9.625 12.25 9.625Z"
                        clipRule="evenodd"></path>
                    <path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M16.75 9.625C16.5429 9.625 16.375 9.79289 16.375 10C16.375 10.2071 16.5429 10.375 16.75 10.375C16.9571 10.375 17.125 10.2071 17.125 10C17.125 9.79289 16.9571 9.625 16.75 9.625Z"
                        clipRule="evenodd"></path>
                </symbol>
                <symbol id="hamburger" viewBox="0 0 22 14">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 13h20M1 7h20M1 1h20"></path>
                </symbol>
                <symbol id="help" viewBox="0 0 25 25">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M9.25 7C9.25029 5.47443 10.3955 4.19201 11.9113 4.01976C13.4271 3.8475 14.8308 4.84028 15.1734 6.32688C15.516 7.81349 14.6883 9.32048 13.25 9.829C12.6504 10.041 12.2497 10.608 12.25 11.244V11.5M22 19H11.5L5.5 23.5V19H2.5C1.67157 19 1 18.3284 1 17.5V2.5C1 1.67157 1.67157 1 2.5 1H22C22.8284 1 23.5 1.67157 23.5 2.5V17.5C23.5 18.3284 22.8284 19 22 19ZM12.25 14.5C12.0429 14.5 11.875 14.6679 11.875 14.875C11.875 15.0821 12.0429 15.25 12.25 15.25C12.4571 15.25 12.625 15.0821 12.625 14.875C12.625 14.6679 12.4571 14.5 12.25 14.5Z">
                    </path>
                </symbol>
                <symbol id="individual" viewBox="0 0 24 24">
                    <path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M12 11.25C14.8995 11.25 17.25 8.89949 17.25 6C17.25 3.10051 14.8995 0.75 12 0.75C9.10051 0.75 6.75 3.10051 6.75 6C6.75 8.89949 9.10051 11.25 12 11.25Z"
                        clipRule="evenodd"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M2.25 23.25C2.25 17.8652 6.61522 13.5 12 13.5C17.3848 13.5 21.75 17.8652 21.75 23.25"></path>
                </symbol>
                <symbol id="info-circle-filled" viewBox="0 0 24 23">
                    <path fillRule="evenodd"
                        d="M12 22.5C18.2132 22.5 23.25 17.4632 23.25 11.25C23.25 5.0368 18.2132 0 12 0C5.7868 0 0.75 5.0368 0.75 11.25C0.75 17.4632 5.7868 22.5 12 22.5ZM9.75 9.75C9.75 9.33579 10.0858 9 10.5 9H11.25C12.0784 9 12.75 9.67157 12.75 10.5V14.25C12.75 14.6642 13.0858 15 13.5 15H14.25C14.6642 15 15 15.3358 15 15.75C15 16.1642 14.6642 16.5 14.25 16.5H13.5C12.2574 16.5 11.25 15.4926 11.25 14.25V10.5H10.5C10.0858 10.5 9.75 10.1642 9.75 9.75ZM11.625 5.25C11.0037 5.25 10.5 5.75368 10.5 6.375C10.5 6.99632 11.0037 7.5 11.625 7.5C12.2463 7.5 12.75 6.99632 12.75 6.375C12.75 5.75368 12.2463 5.25 11.625 5.25Z"
                        clipRule="evenodd"></path>
                </symbol>
                <symbol id="info-circle" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M14.25 16.5H13.5C12.6716 16.5 12 15.8284 12 15V11.25C12 10.8358 11.6642 10.5 11.25 10.5H10.5"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M11.625 6.75C11.4179 6.75 11.25 6.91789 11.25 7.125C11.25 7.33211 11.4179 7.5 11.625 7.5C11.8321 7.5 12 7.33211 12 7.125C12 6.91789 11.8321 6.75 11.625 6.75V6.75">
                    </path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12Z">
                    </path>
                </symbol>
                <symbol id="info" viewBox="0 0 25 25">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M12.1428 6.14288V11.2857M23.2857 12.1429C23.2857 18.2969 18.2969 23.2857 12.1429 23.2857C5.98883 23.2857 1 18.2969 1 12.1429C1 5.98883 5.98883 1 12.1429 1C18.2969 1 23.2857 5.98883 23.2857 12.1429ZM13.0001 16.4286C13.0001 16.9019 12.6163 17.2857 12.1429 17.2857C11.6695 17.2857 11.2858 16.9019 11.2858 16.4286C11.2858 15.9552 11.6695 15.5714 12.1429 15.5714C12.6163 15.5714 13.0001 15.9552 13.0001 16.4286Z">
                    </path>
                </symbol>
                <symbol id="initials" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10"></circle>
                    <path
                        d="M7.085 7.606 5.151 13.5H3.594l2.641-7.11h.992l-.142 1.216ZM8.691 13.5 6.753 7.606l-.156-1.215h1l2.657 7.109H8.69Zm-.087-2.646V12H4.849v-1.147h3.755Zm6.01.786c0-.127-.02-.241-.058-.342a.646.646 0 0 0-.205-.283 1.819 1.819 0 0 0-.425-.26 5.985 5.985 0 0 0-.708-.263 8.967 8.967 0 0 1-.918-.351 3.768 3.768 0 0 1-.762-.454 2.047 2.047 0 0 1-.518-.61 1.682 1.682 0 0 1-.185-.806c0-.297.065-.565.195-.806.13-.244.313-.453.547-.625.235-.176.511-.311.83-.405a3.758 3.758 0 0 1 1.06-.142c.524 0 .981.094 1.372.283.39.189.693.448.908.777.218.328.327.704.327 1.127H14.62c0-.208-.044-.39-.132-.546a.891.891 0 0 0-.39-.376c-.173-.092-.39-.137-.655-.137-.254 0-.465.039-.634.117a.846.846 0 0 0-.381.308.757.757 0 0 0-.127.43c0 .12.03.229.088.327a.99.99 0 0 0 .273.273c.12.085.269.164.444.24.176.074.38.147.61.219.388.117.728.249 1.021.395.297.147.544.311.742.494.2.182.349.389.45.62.1.23.151.493.151.786 0 .31-.06.586-.18.83-.121.244-.295.45-.523.62-.228.17-.5.298-.816.386a3.949 3.949 0 0 1-1.059.132c-.352 0-.698-.046-1.04-.137a3.16 3.16 0 0 1-.933-.425 2.141 2.141 0 0 1-.664-.723c-.166-.293-.249-.64-.249-1.04h1.47c0 .222.034.409.102.562a.939.939 0 0 0 .289.371c.126.095.276.163.449.205.176.043.368.064.576.064.254 0 .462-.036.625-.108a.771.771 0 0 0 .366-.298.779.779 0 0 0 .122-.43Z">
                    </path>
                </symbol>
                <symbol id="logout" viewBox="0 0 25 25">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M20.5 19.0006V20.5006C20.5 21.3291 19.8284 22.0006 19 22.0006H14.5M14.5 4.00062H19C19.8284 4.00062 20.5 4.6722 20.5 5.50062V7.00062M20.5 9.99962L23.5 12.9996M23.5 12.9996H15.25M23.5 12.9996L20.501 15.9996M8.125 11.8756C7.97296 11.8756 7.83598 11.9674 7.77818 12.1081C7.72038 12.2487 7.7532 12.4103 7.86128 12.5172C7.96936 12.6241 8.13131 12.6552 8.2713 12.5959C8.41129 12.5366 8.50162 12.3986 8.5 12.2466C8.50027 12.1471 8.46084 12.0515 8.39046 11.9812C8.32008 11.9108 8.22454 11.8714 8.125 11.8716M10.644 23.4926L1.644 22.2066C1.27466 22.1539 1.00023 21.8377 1 21.4646V3.97162C0.999709 3.61768 1.2469 3.31171 1.593 3.23762L10.593 1.01662C10.8146 0.969193 11.0457 1.02446 11.2218 1.167C11.3979 1.30953 11.5002 1.52405 11.5 1.75062V22.7506C11.4999 22.9679 11.4055 23.1745 11.2412 23.3169C11.077 23.4592 10.8591 23.5233 10.644 23.4926Z">
                    </path>
                </symbol>
                <symbol id="money" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M15.087 7.26087H10.6929C10.1865 7.22044 9.68777 7.40409 9.32854 7.76332C8.96931 8.12255 8.78566 8.62123 8.82609 9.12765C8.82609 11.1739 15.087 12.7391 15.087 14.7854C15.0961 15.2832 14.9024 15.7634 14.5503 16.1155C14.1982 16.4676 13.718 16.6613 13.2202 16.6522H8.82609M11.9565 7.26087V4.91304M11.9565 19V16.6522M11.9565 22.913C18.0076 22.913 22.913 18.0076 22.913 11.9565C22.913 5.9054 18.0076 1 11.9565 1C5.9054 1 1 5.9054 1 11.9565C1 18.0076 5.9054 22.913 11.9565 22.913Z">
                    </path>
                </symbol>
                <symbol id="note" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                        d="M13 20.88v-6.547c0-.736.597-1.333 1.333-1.333h6.547m-7.213-8-4.719 6.291a1.333 1.333 0 0 1-1.965.185L5 9.666M12.448 21H2.333A1.333 1.333 0 0 1 1 19.667V2.333C1 1.597 1.597 1 2.333 1h17.334C20.403 1 21 1.597 21 2.333v10.115c0 .353-.14.692-.39.942l-7.22 7.22c-.25.25-.589.39-.942.39Z">
                    </path>
                </symbol>
                <symbol id="question-filled" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="100%"></circle>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M9.06668 9.06656C9.06678 8.52881 9.21471 8.00144 9.49428 7.54208C9.77386 7.08272 10.1743 6.70905 10.6519 6.46191C11.1295 6.21478 11.6659 6.10368 12.2023 6.14078C12.7388 6.17787 13.2548 6.36172 13.6938 6.67223C14.1328 6.98274 14.4781 7.40797 14.6918 7.90143C14.9055 8.3949 14.9794 8.93761 14.9055 9.47026C14.8316 10.0029 14.6127 10.505 14.2727 10.9216C13.9328 11.3383 13.4848 11.6534 12.9778 11.8327C12.6917 11.9338 12.4441 12.1212 12.2689 12.369C12.0938 12.6168 11.9999 12.9128 12 13.2163V14.1999M12 17.1332C11.9028 17.1332 11.8095 17.1719 11.7407 17.2406C11.672 17.3094 11.6333 17.4027 11.6333 17.4999C11.6333 17.5971 11.672 17.6904 11.7407 17.7592C11.8095 17.8279 11.9028 17.8666 12 17.8666C12.0973 17.8666 12.1905 17.8279 12.2593 17.7592C12.3281 17.6904 12.3667 17.5971 12.3667 17.4999C12.3667 17.4027 12.3281 17.3094 12.2593 17.2406C12.1905 17.1719 12.0973 17.1332 12 17.1332Z">
                    </path>
                </symbol>
                <symbol id="question" viewBox="0 0 24 24">
                    <path
                        d="M8.31668 9.06649C8.3166 9.4807 8.65232 9.81655 9.06654 9.81663C9.48075 9.81671 9.8166 9.48099 9.81668 9.06677L8.31668 9.06649ZM12.9778 11.8328L13.2278 12.5399L12.9778 11.8328ZM12 13.2163H12.75V13.2159L12 13.2163ZM11.25 14.2C11.25 14.6142 11.5858 14.95 12 14.95C12.4142 14.95 12.75 14.6142 12.75 14.2H11.25ZM9.81668 9.06677C9.81676 8.66652 9.92686 8.27398 10.135 7.93207L8.85362 7.15222C8.50255 7.72903 8.31681 8.39124 8.31668 9.06649L9.81668 9.06677ZM10.135 7.93207C10.343 7.59016 10.6411 7.31203 10.9966 7.12809L10.3073 5.79588C9.70754 6.1062 9.20468 6.57541 8.85362 7.15222L10.135 7.93207ZM10.9966 7.12809C11.3521 6.94414 11.7513 6.86145 12.1506 6.88906L12.2541 5.39263C11.5804 5.34605 10.907 5.48555 10.3073 5.79588L10.9966 7.12809ZM12.1506 6.88906C12.5499 6.91666 12.9339 7.05351 13.2607 7.28463L14.1269 6.05996C13.5756 5.67006 12.9277 5.4392 12.2541 5.39263L12.1506 6.88906ZM13.2607 7.28463C13.5875 7.51575 13.8445 7.83225 14.0035 8.19954L15.38 7.60345C15.1117 6.98382 14.6782 6.44987 14.1269 6.05996L13.2607 7.28463ZM14.0035 8.19954C14.1626 8.56684 14.2176 8.97079 14.1626 9.36725L15.6484 9.5734C15.7412 8.90457 15.6484 8.22309 15.38 7.60345L14.0035 8.19954ZM14.1626 9.36725C14.1076 9.76371 13.9447 10.1374 13.6916 10.4475L14.8538 11.3959C15.2807 10.8727 15.5556 10.2422 15.6484 9.5734L14.1626 9.36725ZM13.6916 10.4475C13.4386 10.7577 13.1052 10.9922 12.7278 11.1257L13.2278 12.5399C13.8644 12.3148 14.4269 11.919 14.8538 11.3959L13.6916 10.4475ZM12.7278 11.1257C12.2954 11.2785 11.9211 11.5617 11.6564 11.9362L12.8814 12.8019C12.967 12.6809 13.088 12.5893 13.2278 12.5399L12.7278 11.1257ZM11.6564 11.9362C11.3918 12.3107 11.2498 12.7581 11.25 13.2167L12.75 13.2159C12.7499 13.0677 12.7958 12.923 12.8814 12.8019L11.6564 11.9362ZM11.25 13.2163V14.2H12.75V13.2163H11.25ZM12 16.3833C11.7039 16.3833 11.4198 16.5009 11.2104 16.7104L12.2711 17.771C12.1992 17.8429 12.1017 17.8833 12 17.8833V16.3833ZM11.2104 16.7104C11.001 16.9198 10.8833 17.2038 10.8833 17.5H12.3833C12.3833 17.6016 12.343 17.6991 12.2711 17.771L11.2104 16.7104ZM10.8833 17.5C10.8833 17.7961 11.001 18.0802 11.2104 18.2896L12.2711 17.2289C12.343 17.3008 12.3833 17.3983 12.3833 17.5H10.8833ZM11.2104 18.2896C11.4198 18.499 11.7039 18.6166 12 18.6166V17.1166C12.1017 17.1166 12.1992 17.157 12.2711 17.2289L11.2104 18.2896ZM12 18.6166C12.2962 18.6166 12.5802 18.499 12.7896 18.2896L11.729 17.2289C11.8008 17.157 11.8983 17.1166 12 17.1166V18.6166ZM12.7896 18.2896C12.999 18.0802 13.1167 17.7961 13.1167 17.5H11.6167C11.6167 17.3983 11.6571 17.3008 11.729 17.2289L12.7896 18.2896ZM13.1167 17.5C13.1167 17.2038 12.999 16.9198 12.7896 16.7104L11.729 17.771C11.6571 17.6991 11.6167 17.6016 11.6167 17.5H13.1167ZM12.7896 16.7104C12.5802 16.5009 12.2962 16.3833 12 16.3833V17.8833C11.8984 17.8833 11.8008 17.8429 11.729 17.771L12.7896 16.7104ZM0.25 12C0.25 18.4891 5.51085 23.75 12 23.75V22.25C6.33928 22.25 1.75 17.6607 1.75 12H0.25ZM12 23.75C18.4891 23.75 23.75 18.4891 23.75 12H22.25C22.25 17.6607 17.6607 22.25 12 22.25V23.75ZM23.75 12C23.75 5.51085 18.4891 0.25 12 0.25V1.75C17.6607 1.75 22.25 6.33928 22.25 12H23.75ZM12 0.25C5.51085 0.25 0.25 5.51085 0.25 12H1.75C1.75 6.33928 6.33928 1.75 12 1.75V0.25Z">
                    </path>
                </symbol>
                <symbol id="restart" viewBox="0 0 15 16">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M5.05098 0.666992L2.23047 3.4875L5.05098 6.30802"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M1.6665 9.41038C1.6665 10.5819 2.01389 11.727 2.66472 12.7011C3.31556 13.6751 4.24062 14.4343 5.32292 14.8826C6.40522 15.3309 7.59615 15.4482 8.74511 15.2196C9.89408 14.9911 10.9495 14.427 11.7778 13.5986C12.6062 12.7703 13.1703 11.7149 13.3988 10.5659C13.6274 9.41695 13.5101 8.22602 13.0618 7.14372C12.6135 6.06142 11.8543 5.13636 10.8803 4.48552C9.90622 3.83469 8.76105 3.4873 7.58958 3.4873H2.23061">
                    </path>
                </symbol>
                <symbol id="search" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="m7 15-6 6M13 1a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z"></path>
                </symbol>
                <symbol id="subtract" viewBox="0 0 25 25">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 12.51H23.2857"></path>
                </symbol>
                <symbol id="success-circle" viewBox="0 0 24 24">
                    <path fillRule="evenodd"
                        d="M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12ZM18.5884 7.29307C18.8452 6.9681 18.79 6.49645 18.4651 6.2396C18.1401 5.98275 17.6684 6.03797 17.4116 6.36294L9.5686 16.2859L9.55979 16.2973C9.50134 16.3742 9.40934 16.4182 9.31277 16.4153C9.2162 16.4124 9.12698 16.3631 9.07323 16.2828L9.06309 16.268L6.61309 12.791C6.3745 12.4524 5.9066 12.3713 5.568 12.6099C5.2294 12.8485 5.14833 13.3164 5.38691 13.655L7.83244 17.1257C8.15639 17.6037 8.69034 17.8974 9.26797 17.9146C9.84627 17.9319 10.3974 17.67 10.7493 17.2112L18.5884 7.29307Z"
                        clipRule="evenodd"></path>
                </symbol>
                <symbol id="success" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                        d="m14.331 9-3.536 4.719a.666.666 0 0 1-1.004.07l-2.123-2.122M9.872 1.54a1.448 1.448 0 0 1 2.256 0l1.343 1.672c.31.385.794.586 1.285.533l2.132-.232a1.448 1.448 0 0 1 1.6 1.6l-.232 2.133c-.054.492.147.976.532 1.286l1.672 1.344a1.45 1.45 0 0 1 0 2.257l-1.677 1.338a1.45 1.45 0 0 0-.533 1.286l.232 2.134a1.448 1.448 0 0 1-1.6 1.6l-2.131-.232a1.446 1.446 0 0 0-1.285.533l-1.338 1.666a1.447 1.447 0 0 1-2.256 0l-1.343-1.671a1.449 1.449 0 0 0-1.285-.534l-2.133.232a1.446 1.446 0 0 1-1.599-1.6l.232-2.133a1.45 1.45 0 0 0-.533-1.286l-1.67-1.343a1.448 1.448 0 0 1 0-2.258l1.67-1.344c.386-.31.587-.794.533-1.285l-.232-2.134a1.448 1.448 0 0 1 1.6-1.6l2.132.232a1.45 1.45 0 0 0 1.285-.533l1.343-1.661Z">
                    </path>
                </symbol>
                <symbol id="tick" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                        d="M21 3 10.11 17.75a3.046 3.046 0 0 1-4.535.433L1 13.94"></path>
                </symbol>
                <symbol id="timer" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M12.0769 1C14.2677 1 16.4093 1.64965 18.2309 2.8668C20.0525 4.08394 21.4723 5.81392 22.3107 7.83796C23.149 9.86201 23.3684 12.0892 22.941 14.2379C22.5136 16.3866 21.4586 18.3603 19.9095 19.9095C18.3604 21.4586 16.3866 22.5136 14.2379 22.941C12.0892 23.3684 9.86201 23.149 7.83797 22.3107C5.81393 21.4723 4.08395 20.0525 2.8668 18.2309C1.64966 16.4093 1.00001 14.2677 1.00001 12.0769C0.996496 8.90376 2.21736 5.85159 4.40829 3.55621M4.40829 3.55621L1 4.40856M4.40829 3.55621L5.26035 6.96477M12.0769 6.11208V12.9286L16.5077 15.144">
                    </path>
                </symbol>
                <symbol id="upload" viewBox="0 0 22 17">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M11 11.667V1m0 0 4 4m-4-4L7 5m14 6.667V13a2.667 2.667 0 0 1-2.667 2.667H3.667A2.667 2.667 0 0 1 1 13v-1.333">
                    </path>
                </symbol>
                <symbol id="user-check" viewBox="0 0 22 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M1 15.666a6.003 6.003 0 0 1 8.356-5.518M21 15.667a5.333 5.333 0 1 1-5.333-5.334M21 11.666l-4.862 4.862a.666.666 0 0 1-.942 0L13.667 15M7 8.333a3.667 3.667 0 1 0 0-7.333 3.667 3.667 0 0 0 0 7.333Z">
                    </path>
                </symbol>
                <symbol id="warning-circle" viewBox="0 0 24 24">
                    <path fillRule="evenodd"
                        d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25ZM10.85 16.625C10.85 16.0037 11.3537 15.5 11.975 15.5C12.5963 15.5 13.1 16.0037 13.1 16.625C13.1 17.2463 12.5963 17.75 11.975 17.75C11.3537 17.75 10.85 17.2463 10.85 16.625ZM12.75 5.25C12.75 4.83579 12.4142 4.5 12 4.5C11.5858 4.5 11.25 4.83579 11.25 5.25V13.5C11.25 13.9142 11.5858 14.25 12 14.25C12.4142 14.25 12.75 13.9142 12.75 13.5V5.25Z"
                        clipRule="evenodd"></path>
                </symbol>
                <symbol id="warning" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M12 18.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75v0"></path>
                    <path strokeLinecap="round" strokeWidth="1.5" d="M12 15.75v-7.5"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                        d="M13.621 1.76a1.806 1.806 0 0 0-3.242 0L.906 21.058a1.52 1.52 0 0 0 1.366 2.192h19.456a1.52 1.52 0 0 0 1.366-2.192L13.621 1.76Z"
                        clipRule="evenodd"></path>
                </symbol>
                <symbol id="x" viewBox="0 0 20 22">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m1 1 17.75 20M19 1.08 1 20.84">
                    </path>
                </symbol>
                <symbol id="user" viewBox="0 0 20 20">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-11.000000, -1471.000000)" fill="#888888"><path d="M25.552,1486.998 L11.449,1486.998 C10.667,1485.799 10.984,1483.399 11.766,1482.6 C12.139,1482.219 14.931,1481.5 16.267,1481.172 C14.856,1480.076 13.995,1478.042 13.995,1476.103 C13.995,1473.284 14.813,1470.999 18.498,1470.999 C22.182,1470.999 23,1473.284 23,1476.103 C23,1478.037 22.145,1480.065 20.74,1481.163 C22.046,1481.489 24.88,1482.228 25.241,1482.601 C26.019,1483.399 26.328,1485.799 25.552,1486.998 L25.552,1486.998 Z M24.6,1483.443 C24.087,1483.169 21.881,1482.548 20,1482.097 L20,1480.513 C21.254,1479.659 21.997,1477.806 21.997,1476.12 C21.997,1473.841 21.414,1471.993 18.499,1471.993 C15.583,1471.993 15,1473.841 15,1476.12 C15,1477.807 15.744,1479.662 17,1480.515 L17,1482.112 C15.109,1482.556 12.914,1483.166 12.409,1483.442 C12.082,1483.854 11.797,1485.173 12,1486 L25,1486 C25.201,1485.174 24.922,1483.858 24.6,1483.443 L24.6,1483.443 Z"></path></g></g>
                </symbol>
                <symbol id="lock" viewBox="0 0 20 20">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-288.000000, -1508.000000)" fill="#888888"><path d="M299,1523.998 L290,1523.998 C288.896,1523.998 288,1523.102 288,1521.999 L288,1515.999 C288,1514.895 288.896,1513.998 290,1513.998 L290,1513.998 L290,1512.499 C290,1510.015 292.015,1507.999 294.5,1507.999 C296.985,1507.999 299,1510.015 299,1512.499 L299,1513.999 C300.104,1513.999 301,1514.895 301,1515.999 L301,1521.999 C301,1523.103 300.104,1523.998 299,1523.998 L299,1523.998 Z M298,1512.499 C298,1510.566 296.433,1508.999 294.5,1508.999 C292.567,1508.999 291,1510.566 291,1512.499 L291,1513.998 L298,1513.998 L298,1512.499 L298,1512.499 Z M300,1515.999 C300,1515.446 299.552,1514.998 299,1514.998 L290,1514.998 C289.447,1514.998 289,1515.446 289,1515.999 L289,1521.999 C289,1522.551 289.447,1522.998 290,1522.998 L299,1522.998 C299.552,1522.998 300,1522.551 300,1521.999 L300,1515.999 L300,1515.999 Z M294.5,1520.998 C294.224,1520.998 294,1520.774 294,1520.498 L294,1517.498 C294,1517.223 294.224,1516.999 294.5,1516.999 C294.776,1516.999 295,1517.223 295,1517.498 L295,1520.498 C295,1520.774 294.776,1520.998 294.5,1520.998 L294.5,1520.998 Z"></path></g></g>
                </symbol>
                <symbol id="mail" viewBox="0 0 44 44">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" ><g id="32px" transform="translate(-2155.000000, -2317.000000)" fill="#373A39"><g id="Group-856" transform="translate(1.000000, 1.000000)"  ><path id="Fill-419" d="M2184,2339 C2184,2339.55 2183.55,2340 2183,2340 L2157,2340 C2156.45,2340 2156,2339.55 2156,2339 L2156,2319 C2156,2318.45 2156.45,2318 2157,2318 L2183,2318 C2183.55,2318 2184,2318.45 2184,2319 L2184,2339 L2184,2339 Z M2184,2316 L2156,2316 C2154.89,2316 2154,2316.89 2154,2318 L2154,2340 C2154,2341.1 2154.89,2342 2156,2342 L2184,2342 C2185.1,2342 2186,2341.1 2186,2340 L2186,2318 C2186,2316.89 2185.1,2316 2184,2316 L2184,2316 Z M2176,2322 L2180,2322 L2180,2326 L2176,2326 L2176,2322 Z M2174,2328 L2182,2328 L2182,2320 L2174,2320 L2174,2328 Z M2158,2332 L2172,2332 L2172,2330 L2158,2330 L2158,2332 Z M2158,2336 L2172,2336 L2172,2334 L2158,2334 L2158,2336 Z"></path></g></g></g>
                </symbol>
                <symbol id="profile" viewBox="0 0 444 444" >
                    <path style={{ fill: "#1EA6C6" }} d="M347.415,330.3c0,0.04,0,0.08,0,0.13c-40.37,36.61-93.96,58.91-152.74,58.91  c-58.79,0-112.38-22.3-152.75-58.91c0-0.05,0-0.09,0-0.13c0-60.89,35.63-113.45,87.17-137.98c19.37,19.32,42.05,29.73,65.58,29.73  c23.54,0,46.21-10.41,65.59-29.73C311.805,216.85,347.415,269.41,347.415,330.3z" />
                    <path style={{ fill: "#FCD09F" }} d="M194.675,0c46.66,0,84.49,37.82,84.49,84.48c0,46.67-37.83,110.49-84.49,110.49  s-84.49-63.82-84.49-110.49C110.185,37.82,148.015,0,194.675,0z" />
                </symbol>
                <symbol id="cog" viewBox="0 0 644 644">
                    <path style={{ fill: "#2D527C" }} d="M256,512c-35.567,0-64.503-28.936-64.503-64.502v-4.397c-7.56-2.609-14.969-5.681-22.175-9.2  l-3.121,3.12c-12.142,12.144-28.339,18.833-45.609,18.833s-33.467-6.689-45.612-18.833c-25.147-25.15-25.147-66.071,0-91.222  l3.12-3.118c-3.516-7.205-6.592-14.614-9.199-22.175h-4.397C28.936,320.505,0,291.568,0,256.001s28.937-64.503,64.503-64.503h4.395  c2.609-7.561,5.681-14.969,9.2-22.175l-3.12-3.12c-25.147-25.15-25.147-66.071,0-91.221c12.145-12.145,28.342-18.834,45.612-18.834  s33.467,6.689,45.61,18.834l3.12,3.118c7.206-3.518,14.615-6.592,22.175-9.2v-4.395c0-35.567,28.937-64.503,64.503-64.503  s64.503,28.937,64.503,64.503V68.9c7.56,2.609,14.969,5.683,22.175,9.2l3.12-3.12c12.144-12.144,28.341-18.833,45.61-18.833  s33.467,6.689,45.612,18.833c25.147,25.15,25.147,66.071,0,91.222c-5.751,5.751-15.078,5.751-20.833,0  c-5.752-5.752-5.752-15.078,0-20.831c13.662-13.664,13.662-35.896,0-49.56c-6.58-6.581-15.38-10.205-24.779-10.205  s-18.198,3.624-24.778,10.205l-10.774,10.774c-4.667,4.667-11.867,5.661-17.622,2.43c-11.537-6.471-23.802-11.559-36.456-15.125  c-6.35-1.79-10.735-7.58-10.735-14.178V64.506c0-19.323-15.72-35.043-35.043-35.043c-19.323,0-35.043,15.72-35.043,35.043v15.212  c0,6.598-4.387,12.388-10.735,14.178c-12.653,3.566-24.919,8.654-36.456,15.125c-5.757,3.229-12.955,2.235-17.622-2.43  l-10.774-10.774c-6.58-6.581-15.378-10.205-24.778-10.205s-18.199,3.624-24.779,10.205c-13.662,13.662-13.662,35.894,0,49.56  l10.774,10.772c4.667,4.667,5.659,11.867,2.43,17.622c-6.471,11.535-11.559,23.801-15.125,36.456  c-1.788,6.35-7.58,10.735-14.178,10.735H64.503c-19.323,0-35.043,15.72-35.043,35.043c0,19.323,15.72,35.043,35.043,35.043h15.212  c6.596,0,12.388,4.385,14.178,10.734c3.569,12.659,8.657,24.925,15.125,36.457c3.227,5.755,2.235,12.957-2.432,17.622  l-10.774,10.772c-13.661,13.662-13.661,35.894,0.001,49.558c6.58,6.581,15.38,10.205,24.779,10.205s18.198-3.624,24.778-10.205  l10.775-10.772c4.665-4.667,11.867-5.658,17.619-2.432c11.54,6.471,23.805,11.559,36.457,15.125  c6.35,1.79,10.735,7.58,10.735,14.178v15.213c0,19.322,15.72,35.042,35.043,35.042s35.043-15.72,35.043-35.042v-15.213  c0-6.598,4.387-12.388,10.735-14.178c12.652-3.566,24.918-8.654,36.457-15.125c5.751-3.226,12.952-2.235,17.619,2.432l10.774,10.772  c6.581,6.581,15.38,10.205,24.779,10.205s18.199-3.624,24.779-10.205c13.662-13.662,13.662-35.895,0-49.56l-10.772-10.772  c-4.667-4.665-5.661-11.867-2.432-17.622c6.468-11.532,11.556-23.798,15.125-36.457c1.79-6.35,7.582-10.734,14.178-10.734h15.212  c19.323,0,35.043-15.72,35.043-35.043c0-9.635-4.086-18.97-11.21-25.61c-5.952-5.547-6.281-14.867-0.734-20.818  c5.547-5.951,14.87-6.278,20.818-0.734c13.083,12.192,20.587,29.381,20.587,47.162c0,35.567-28.937,64.503-64.503,64.503h-4.397  c-2.609,7.561-5.683,14.97-9.199,22.175l3.118,3.118c25.149,25.15,25.149,66.071,0.001,91.221  c-12.145,12.145-28.342,18.834-45.612,18.834s-33.467-6.689-45.611-18.834l-3.12-3.118c-7.206,3.519-14.615,6.593-22.175,9.2v4.397  C320.503,483.066,291.566,512,256,512z" />
                    <circle style={{ fill: "#CEE8FA" }} cx="255.996" cy="255.997" r="117.576" />
                    <path style={{ fill: "#2D527C" }} d="M256,388.312c-72.956,0-132.309-59.354-132.309-132.309S183.044,123.692,256,123.692  s132.309,59.355,132.309,132.311S328.956,388.312,256,388.312z M256,153.151c-56.711,0-102.849,46.138-102.849,102.85  c0,56.711,46.138,102.849,102.849,102.849s102.849-46.138,102.849-102.849C358.849,199.289,312.711,153.151,256,153.151z" />
                </symbol>
                <symbol id="logout2" viewBox="0 0 644 644">
                    <polygon style={{ fill: "#F4A026" }} points="491.176,256 323.723,128.652 336.851,217.928 140.291,217.928 140.291,296.697   336.851,296.697 323.723,383.348 " />
                    <path style={{ fill: "#61ACD2" }} d="M391.039,65.641H73.337v380.718h317.703v52.513H46.718c-14.501,0-25.894-11.755-25.894-26.256V39.385  c0-14.501,11.393-26.256,25.894-26.256h344.321V65.641z" />
                    <path d="M499.124,245.551L331.671,118.202c-4.248-3.231-10.027-3.568-14.622-0.856s-7.091,7.936-6.315,13.215l10.917,74.239H139.928  c-7.249,0-12.766,5.878-12.766,13.128v78.769c0,7.251,5.516,13.128,12.766,13.128h181.656l-10.841,71.555  c-0.801,5.285,1.683,10.53,6.281,13.257c2.073,1.23,4.389,1.838,6.698,1.838c2.812,0,5.611-0.902,7.949-2.679l167.453-127.348  c3.264-2.483,5.18-6.348,5.18-10.449C504.304,251.899,502.388,248.034,499.124,245.551z M341.555,353.293l8.276-54.629  c0.574-3.782-0.532-7.626-3.026-10.526c-2.493-2.9-6.128-4.569-9.954-4.569H153.419v-52.513h183.433  c3.815,0,7.441-1.659,9.935-4.546c2.493-2.887,3.608-6.716,3.052-10.492l-8.447-57.435L469.488,256L341.555,353.293z" />
                    <path d="M390.677,433.231H86.465V78.769h304.212c7.249,0,13.491-5.878,13.491-13.128V13.128c0-7.251-6.24-13.128-13.491-13.128  H46.718C25.001,0,7.696,17.668,7.696,39.385v433.231C7.696,494.332,25.001,512,46.718,512h343.959  c7.249,0,13.491-5.877,13.491-13.128v-52.513C404.168,439.108,397.928,433.231,390.677,433.231z M377.911,485.744H46.718  c-7.239,0-12.766-5.889-12.766-13.128V39.385c0-7.239,5.527-13.128,12.766-13.128h331.193v26.256H72.974  c-7.249,0-12.766,5.877-12.766,13.128v380.718c0,7.251,5.516,13.128,12.766,13.128h304.937V485.744z" />
                </symbol>
            </svg>
        </>
    )
}

export default MySVG;