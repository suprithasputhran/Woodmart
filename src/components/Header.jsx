import React, { useState, useEffect } from 'react'
// import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom'

function Header() {
    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState(false);


    const changeBackground = () => {

        if (window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }


    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    }, [])


    return (
        <header className={navbar ? 'overflow-hidden  z-50 sticky top-0  w-full bg-black h-36 text-white sm:hidden md:hidden' : 'my-2  absolute z-50 top-0  w-full bg-transperent text-white sm:my-0 md:my-0  '}>

            <div className=' flex items-center justify-around font-bold sm:justify-start sm:bg-gradient-to-l sm:from-gray-200 sm:to-avocado md:justify-start md:bg-gradient-to-l md:from-gray-200 md:to-avocado '>
                <div className='flex flex-row gap-4  items-center lg:hidden sm:hidden  md:hidden'>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg></span>
                    <span className=' font-Lexend text-lg '>(406) 555-0120</span>
                </div>
                <div className='text-5xl p-5 font-Alexbrush flex gap-3 ' >
                    <svg id="svg-9641" xmlns="http://www.w3.org/2000/svg" width="40" height="49" viewBox="0 0 40 49" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3205 35.7214C22.6349 34.7069 23.7246 33.2919 24.7463 31.9526C25.0032 31.5959 25.2674 31.2658 25.5314 30.9359C27.0684 28.9979 29.1984 26.6418 31.2403 24.3957C35.6431 19.5588 39.7876 14.9639 39.6731 12.8924C39.6645 12.7508 39.5665 12.6042 39.4079 12.5604C39.2493 12.5165 39.0776 12.5337 38.9896 12.6437C37.1627 14.4866 34.863 15.8803 32.6109 17.2324C30.079 18.746 27.4518 20.3426 25.4718 22.6009C23.9869 24.2947 22.796 26.4279 21.8183 29.1376C21.7884 29.2233 21.7504 29.3228 21.7085 29.4323C21.6573 29.5665 21.6002 29.7157 21.5453 29.8731C21.1584 30.8407 20.806 31.8278 20.569 32.6976C20.1387 30.6531 19.792 28.7015 19.5146 26.7889C19.5807 27.1455 19.6743 27.4948 19.7881 27.8098C19.8241 27.9442 19.9351 28.0296 20.0938 28.0735C20.1558 28.0857 20.2178 28.0979 20.2726 28.0832C20.3548 28.0611 20.4025 28.0196 20.4501 27.978C23.7906 24.5488 25.2795 17.4979 26.2538 12.8022C26.7293 10.6302 27.0246 8.33377 26.1949 6.2236C26.1243 6.06974 25.9858 5.99164 25.8344 5.97463C25.683 5.95761 25.5329 6.05541 25.4593 6.21912C23.7801 10.0382 22.2811 13.9819 20.9956 17.9547L20.8497 18.3969C20.0943 20.7303 19.1208 23.7844 19.4412 26.4054C18.8447 21.9866 18.6158 17.8436 18.8297 13.9276C18.9883 13.9715 19.1325 13.9616 19.297 13.9176L19.3518 13.9029C19.6187 13.8026 19.8567 13.5948 19.929 13.3163C21.0944 9.90214 20.5745 5.10624 20.1956 1.61059L20.1926 1.58306L20.1525 1.10428C20.1223 0.881994 19.9348 0.730641 19.7084 0.762523C19.4819 0.794407 19.3261 0.980151 19.3563 1.20243C19.418 1.76182 19.0366 3.18866 18.6349 4.64971L18.595 4.80197C17.7741 7.93244 16.7822 11.7152 18.0871 13.349C18.0144 14.722 17.9762 16.1144 17.9799 17.5533C16.9845 14.8251 15.1079 11.9876 13.5398 9.64331L13.3366 9.32341C10.5577 5.2014 7.33838 2.17649 3.72767 0.321925C3.56183 0.251173 3.36278 0.275713 3.25454 0.419902C3.1463 0.56409 3.10727 0.747327 3.20528 0.893845C4.81612 3.28629 6.06103 5.96684 7.27554 8.58195L7.38433 8.81616C8.93038 12.1742 10.5398 15.6593 12.9197 18.6212C13.5828 19.4514 16.2542 22.076 17.7616 21.6721C17.8164 21.6574 17.8987 21.6353 17.9463 21.5938C18.0213 21.5449 18.0963 21.496 18.1439 21.4544C18.3331 24.0242 18.668 26.699 19.1556 29.5055C18.4421 28.4873 17.3826 27.2737 16.1284 25.882C16.0692 25.8163 16.0108 25.7539 15.9562 25.6955C15.8565 25.5889 15.769 25.4953 15.7103 25.4181C14.3164 23.8335 12.5691 22.0267 10.3341 20.8114C8.85178 19.9975 7.22171 19.4711 5.64643 18.9623L5.54067 18.9282C3.96733 18.4283 2.35938 17.9088 0.913102 17.1157C0.774675 17.0376 0.575623 17.0622 0.452984 17.1526C0.337544 17.2699 0.298516 17.4532 0.341711 17.6144C1.53033 20.4059 3.04279 21.5557 4.51344 22.659C5.3944 23.3156 6.21334 23.9601 6.93982 24.9173C8.547 27.0783 10.4673 28.9827 12.6661 30.6109C12.7079 30.6573 16.8546 33.6352 19.1294 33.0257C19.3761 32.9596 19.581 32.8471 19.7786 32.7078L20.2147 34.6643C21.3115 39.5249 23.0138 45.0009 26.9756 48.6044C27.0867 48.6898 27.2179 48.741 27.3549 48.7043C27.42 48.6869 27.4634 48.6572 27.5158 48.6214L27.5598 48.5918C27.7228 48.4329 27.7129 48.1764 27.5254 48.0251C24.0365 44.8709 22.3915 40.1571 21.3003 35.7556C21.2967 35.7422 21.2949 35.7355 21.2974 35.7312C21.3 35.7269 21.3068 35.7251 21.3205 35.7214ZM25.475 12.6365L25.459 12.7116C24.6031 16.7306 23.2144 23.2512 20.4608 26.7272C20.4635 26.7216 20.4643 26.7155 20.4622 26.7077C22.1209 23.47 23.3168 20.0396 24.0367 16.4775C24.0822 16.2639 24.1259 16.0436 24.1696 15.8232C24.2133 15.6028 24.2572 15.3817 24.3027 15.168L24.3603 14.8458C24.4823 14.1608 24.6066 13.4624 24.7826 12.7932C24.8318 12.5929 24.8827 12.3993 24.9336 12.2056C24.9845 12.0122 25.0356 11.8182 25.0846 11.6181L25.1096 11.5263C25.4574 10.2506 25.814 8.94255 25.7442 7.61139C25.7634 7.57893 25.7826 7.54647 25.7783 7.52029C26.1267 9.15321 25.839 10.9278 25.475 12.6365ZM20.4458 26.7461C20.4383 26.7539 20.4295 26.7631 20.4218 26.7762L20.4458 26.7461ZM21.6429 18.6163L21.7888 18.1741C22.875 14.773 24.14 11.3816 25.5507 8.09519C25.517 9.28487 25.2078 10.4332 24.8986 11.5815C24.8495 11.7819 24.7985 11.9755 24.7476 12.1691C24.6967 12.3627 24.6457 12.5564 24.5966 12.7567C24.4001 13.5581 24.2584 14.3448 24.1167 15.1314C24.0711 15.3452 24.0274 15.5657 23.9837 15.7862C23.9399 16.0067 23.8962 16.2272 23.8507 16.4409C23.1235 19.9762 21.9479 23.3724 20.3094 26.5759C19.8746 24.0783 20.8826 20.9648 21.6374 18.6333L21.6429 18.6163ZM12.8646 10.0834C14.6633 12.7402 16.8758 16.0637 17.6201 19.0607C17.8086 19.8741 17.8286 20.3871 17.7563 20.6656L14.7001 17.4818C14.0946 16.8665 13.4819 16.2244 12.9514 15.5602C11.4968 13.7447 10.5031 11.5892 9.54975 9.5211L9.45959 9.32556C8.80978 7.88708 8.11815 6.40221 7.31109 5.03465C6.71444 4.01387 6.02256 3.0762 5.27587 2.15321C7.99236 3.95941 10.4705 6.5206 12.6685 9.79037L12.8646 10.0834ZM13.5531 18.1347C11.2741 15.2929 9.72709 11.9539 8.2319 8.72685L8.11575 8.4762L7.76187 7.72198C6.85627 5.78884 5.93624 3.8249 4.81297 1.96048C5.66349 2.94204 6.45337 4.02623 7.13363 5.13979C7.9407 6.50735 8.63232 7.99222 9.28214 9.43071L9.35004 9.57871C10.3171 11.6869 11.3149 13.8623 12.7812 15.6923C13.1873 16.2142 13.6518 16.7041 14.1039 17.1808C14.2504 17.3353 14.3956 17.4883 14.537 17.6407L17.6351 20.8709C17.6149 20.9051 17.5875 20.9124 17.5601 20.9198C16.9657 21.223 14.6905 19.5289 13.5531 18.1347ZM30.6564 23.861C28.5943 26.1413 26.4643 28.4975 24.8999 30.4428C24.8049 30.5615 24.7109 30.6837 24.6158 30.8071C24.4465 31.0269 24.2741 31.2509 24.0874 31.4668L24.0448 31.5226C23.1448 32.7 22.2234 33.9055 21.1652 34.8127L21.1364 34.7053C21.1566 34.6711 21.1854 34.6417 21.2143 34.6124C21.2432 34.5831 21.272 34.5537 21.2922 34.5195C21.3124 34.4853 21.3326 34.4511 21.3601 34.4438C22.2072 33.4393 22.8322 32.2639 23.4371 31.1228C23.5511 30.8906 23.6926 30.6512 23.8341 30.4117C26.6707 25.1018 30.7446 20.353 35.5535 16.7032L35.7512 16.5638L35.8454 16.4915C36.4495 16.0281 37.0693 15.5528 37.5261 14.9651C37.8665 14.7011 38.207 14.4371 38.5403 14.1463C37.4816 16.3145 34.1177 20.0339 31.0183 23.4608L30.6564 23.861ZM33.0174 17.8722C33.3015 17.6974 33.5877 17.5237 33.875 17.3493C34.7608 16.8117 35.6574 16.2674 36.5377 15.6619C36.3696 15.8087 36.1895 15.9486 36.0059 16.0913C35.8775 16.191 35.7474 16.2921 35.6186 16.3978L35.4209 16.5371C30.5643 20.2285 26.4977 25.0041 23.6336 30.3214C23.5629 30.4411 23.499 30.559 23.4351 30.6769C23.3713 30.7948 23.3073 30.9128 23.2367 31.0325C22.6794 32.1321 22.0673 33.2464 21.2679 34.2093C23.4932 28.3721 27.0308 23.0471 31.6324 18.7329C31.8289 18.6091 32.022 18.4912 32.2126 18.3747C32.4849 18.2084 32.7527 18.0448 33.0174 17.8722ZM22.2909 30.134C22.3514 29.9944 22.4011 29.8642 22.4468 29.7447C22.4969 29.6133 22.5421 29.4949 22.5913 29.3913C23.5286 26.75 24.6862 24.712 26.0759 23.1014C27.405 21.5934 29.0744 20.3686 30.8071 19.2708C26.5272 23.47 23.2205 28.5603 21.1092 34.1654C21.1906 32.9342 21.9241 31.0674 22.2909 30.134ZM19.2108 13.0479C19.1906 13.0822 19.143 13.1237 19.143 13.1237L19.0882 13.1384C19.3507 11.6533 19.4602 10.1294 19.5683 8.62568C19.59 8.32358 19.6117 8.02225 19.6345 7.72228L19.7972 5.25978C19.9603 7.95172 19.9676 10.8294 19.2108 13.0479ZM19.4209 4.84226C19.4932 4.56374 19.5654 4.28521 19.6448 4.03355L19.408 7.75416L19.3638 8.38578C19.2572 9.92359 19.1471 11.5105 18.8878 13.0481C17.5626 11.8948 18.6521 7.76012 19.3947 4.94187L19.4209 4.84226ZM9.90249 21.503C12.0063 22.6671 13.7045 24.4005 15.0567 25.9388C15.1021 25.9986 15.1648 26.0682 15.238 26.1494C15.3112 26.2306 15.3948 26.3234 15.482 26.4296C18.554 29.7819 19.2991 31.1373 19.4156 31.682L18.5809 30.869L18.3958 30.7001C18.0603 30.3944 17.71 30.0754 17.3987 29.7459C16.6116 28.8913 15.7625 28.0246 14.9004 27.2189C13.2943 25.7199 11.5324 24.4066 9.70849 23.0812C8.19933 21.9785 6.64395 20.8882 5.11159 19.814L4.7024 19.5272C4.79902 19.5589 4.88699 19.5857 4.97496 19.6125C5.06293 19.6393 5.1509 19.6661 5.24752 19.6979C6.84827 20.1904 8.48362 20.7025 9.90249 21.503ZM19.4054 31.9727C19.3953 31.9898 19.3834 32.0002 19.3715 32.0106C19.3596 32.021 19.3477 32.0313 19.3376 32.0484C18.9597 32.0633 18.5516 31.8559 18.1983 31.6338C14.5835 29.4348 11.3539 26.7006 8.0682 23.8662C6.03968 22.1061 4.03856 20.3386 2.05764 18.5368C2.72098 18.8198 3.40453 19.0686 4.10828 19.2832C5.95186 20.5741 7.80263 21.8918 9.6534 23.2095C11.4773 24.535 13.2337 25.8226 14.8397 27.3216C15.4765 27.9166 16.0912 28.549 16.6944 29.1695C16.9078 29.389 17.1199 29.6073 17.3309 29.8217C17.6422 30.1512 17.9924 30.4702 18.328 30.7759L18.5131 30.9447C18.6731 31.1034 18.8382 31.2536 19.0033 31.4037C19.1683 31.5539 19.3334 31.704 19.4934 31.8627C19.4256 31.9385 19.4054 31.9727 19.4054 31.9727ZM13.1395 29.9657C11.0171 28.4034 9.16601 26.5381 7.57323 24.4308C6.83397 23.4322 5.97618 22.7736 5.13491 22.1276L4.98683 22.0138L4.96486 21.9972C3.79236 21.109 2.5873 20.1962 1.60915 18.3978C3.67367 20.2923 5.79301 22.1722 7.93256 24.0178C11.2183 26.8521 14.455 29.6132 18.0973 31.8049C18.4088 31.9806 18.7202 32.1563 19.0649 32.2367C17.7305 32.7382 14.6173 31.0959 13.1395 29.9657Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.027 10.3792C17.0818 10.3645 17.164 10.3425 17.2116 10.3009C17.607 10.0222 17.4832 9.45063 17.3118 8.92062C16.9056 7.73362 16.2658 6.55163 15.7528 5.62363C15.0293 4.34886 14.2308 3.12299 13.3645 1.97288C12.8615 1.30137 12.3681 1.43356 12.1907 1.5387C12.0334 1.60963 11.9526 1.74648 11.9684 1.91503C12.0141 2.85306 12.3065 3.725 12.6335 4.61646C13.3523 6.64119 14.2023 8.71715 15.9916 10.0231C16.1444 10.1549 16.6159 10.4893 17.027 10.3792ZM12.8435 2.65961C13.6262 3.71694 14.3685 4.84268 15.0083 6.02467C15.5142 6.92581 16.1468 8.08093 16.5314 9.18733L16.6178 9.50974C16.5867 9.49219 16.5611 9.47315 16.5329 9.4522C16.4985 9.42653 16.4601 9.39797 16.4029 9.36573C14.8213 8.17694 14.0347 6.22797 13.3519 4.33758C13.1315 3.73431 12.9601 3.20431 12.8435 2.65961Z" fill="white"></path>
                    </svg>Woodmart</div>
                <div className='flex flex-row items-center gap-5 sm:hidden md:hidden cursor-pointer'>
                    <a href='https://facebook.com' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg></a>
                    <a href='https://twitter.com'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.445-1.815 6.533 6.533 0 0 1-2.085.593A3.286 3.286 0 0 0 5.855 6.03a9.325 9.325 0 0 1-6.565-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.555v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.055 3.283 3.283 0 0 0 3.065 2.255A6.588 6.588 0 0 1 .58 13.58a6.32 6.32 0 0 1-.58-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg></a>
                    <a href='https://instagram.com' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.503.048 3.85.088 3.269.222 2.56.42a3.915 3.915 0 0 0-1.415.923A3.925 3.925 0 0 0 .42 2.56C.222 3.268.085 3.85.048 4.5.01 5.555 0 5.825 0 8.001c0 2.152.01 2.444.048 3.295.04.852.154 1.433.352 1.942.205.526.458.952.923 1.415.444.445.89.519 1.416.923.51.198 1.09.333 1.942.352C5.555 15.99 5.825 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.154 1.943-.352a3.916 3.916 0 0 0 1.416-.923c.445-.445.518-.891.923-1.415.195-.509.332-1.09.352-1.942C15.99 10.445 16 10.153 16 8s-.01-2.445-.048-3.299c-.04-.851-.155-1.433-.352-1.941a3.926 3.926 0 0 0-.923-1.415A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.352C10.443.01 10.152 0 5.998 0h.003zm-.515 1.442h.518c2.136 0 2.389.005 3.232.046.58.035 1.204.166 1.486.255.353.145.64.319.92.599.28.28.453.546.598.92.11.281.24.505.255 1.485.039.843.045 1.096.045 3.231s-.008 2.389-.045 3.232c-.035.58-.166 1.203-.255 1.485a2.45 2.45 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.504.24-1.485.256-.843.038-1.096.045-3.232.045s-2.39-.009-3.233-.045c-.58-.036-1.203-.166-1.485-.256a2.458 2.458 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.505-.255-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.58.166-1.204.256-1.486.145-.353.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.505-.24 1.485-.256.538-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.25 1.122a4.109 4.109 0 1 0 0 8.215 4.109 4.109 0 0 0 0-8.215zm0 1.441a2.665 2.665 0 1 1 0 5.334 2.665 2.665 0 0 1 0-5.334z" />
                    </svg></a>
                    <a href='https://youtube.com'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg></a>
                    <a href='https://pinterest.com'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 0 0-2.915 15.452c-.05-.633-.134-1.606.025-2.295.146-.625.938-3.955.938-3.955s-.239-.459-.239-1.185c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.125 0 .686-.435 1.512-.663 2.663-.188.596.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.355-3.254-3.342-3.254-2.256 0-3.612 1.505-3.612 3.451 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.596-.222.905-.035.146-.116.155-.268.105-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.555 0 4.932 1.955 4.932 4.62 0 2.555-1.539 4.956-4.151 4.956-.811 0-1.553-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.095A8 8 0 1 0 8 0z" />
                    </svg></a>
                </div>
            </div>
            <div onClick={() => setOpen(!open)} className='hidden sm:absolute sm:flex md:absolute md:flex sm:right-9 sm:top-8 md:top-7 md:right-8 '>
                {open ? <button className=' bg-black text-white'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                </svg></button> : <button className=' text-white  '><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg></button>}
            </div>

            <div className={`py-5 m-0 font-bold  flex flex-row gap-11 items-center justify-center font-Lexend tracking-wider cursor-pointer sm:w-full sm:absolute sm:overflow-hidden sm:h-[400px] sm:p-0 sm:m-0 sm:flex-col 
            sm:bg-gradient-to-l sm:from-gray-200 sm:to-avocado md:w-full md:absolute md:overflow-hidden md:h-[400px] md:p-0 md:m-0 md:flex-col 
            md:bg-gradient-to-l md:from-gray-200 md:to-avocado 
 ${open ? 'sm:top-30 md:top-30' : 'sm:-top-[400px] md:-top-[400px] md:z-20 sm:z-20'}`} >

                <NavLink to="/" onClick={() => setOpen(!open)}>Home</NavLink>

                <NavLink to="/services" onClick={() => setOpen(!open)}>Services</NavLink>
                <NavLink to="/portfolio" onClick={() => setOpen(!open)}> Portfolio</NavLink>
                <NavLink to="/ourteam" onClick={() => setOpen(!open)}>Our Team</NavLink>
                {/* <Link to="/">Testimonials</Link> */}
                <NavLink to="/contactus" onClick={() => setOpen(!open)}>Contact Us</NavLink>

            </div>
            <hr className='mx-24 my-2 sm:hidden md:hidden' />
        </header >

    )
}

export default Header