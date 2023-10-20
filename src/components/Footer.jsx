import React from 'react'

function Footer() {
    return (
        <footer className='py-5  sm:py-2 md:py-2 text-white bg-avocado z-20 '>
            <hr className='mx-24 pt-10 sm:mx-10 md:mx-10 sm:pt-5 md:pt-5' />
            <div className=' px-24 flex flex-row items-center justify-between sm:px-10 md:px-10'>
                <div className='flex flex-row items-center justify-center gap-1'>
                    <p className='flex uppercase font-Cormorantupright text-base sm:text-sm'>Woodmart</p>
                    <span className=' font-Aleo font-semibold text-lg sm:text-base'> &copy;</span>

                    <p className='px-5 text-sm font-medium font-Aleo'>2023</p>
                </div>
                <div className=' flex flex-row items-center gap-2 '>
                    <span className='sm:hidden md:hidden'><svg id="svg-9641" xmlns="http://www.w3.org/2000/svg" width="40" height="49" viewBox="0 0 40 49" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3205 35.7214C22.6349 34.7069 23.7246 33.2919 24.7463 31.9526C25.0032 31.5959 25.2674 31.2658 25.5314 30.9359C27.0684 28.9979 29.1984 26.6418 31.2403 24.3957C35.6431 19.5588 39.7876 14.9639 39.6731 12.8924C39.6645 12.7508 39.5665 12.6042 39.4079 12.5604C39.2493 12.5165 39.0776 12.5337 38.9896 12.6437C37.1627 14.4866 34.863 15.8803 32.6109 17.2324C30.079 18.746 27.4518 20.3426 25.4718 22.6009C23.9869 24.2947 22.796 26.4279 21.8183 29.1376C21.7884 29.2233 21.7504 29.3228 21.7085 29.4323C21.6573 29.5665 21.6002 29.7157 21.5453 29.8731C21.1584 30.8407 20.806 31.8278 20.569 32.6976C20.1387 30.6531 19.792 28.7015 19.5146 26.7889C19.5807 27.1455 19.6743 27.4948 19.7881 27.8098C19.8241 27.9442 19.9351 28.0296 20.0938 28.0735C20.1558 28.0857 20.2178 28.0979 20.2726 28.0832C20.3548 28.0611 20.4025 28.0196 20.4501 27.978C23.7906 24.5488 25.2795 17.4979 26.2538 12.8022C26.7293 10.6302 27.0246 8.33377 26.1949 6.2236C26.1243 6.06974 25.9858 5.99164 25.8344 5.97463C25.683 5.95761 25.5329 6.05541 25.4593 6.21912C23.7801 10.0382 22.2811 13.9819 20.9956 17.9547L20.8497 18.3969C20.0943 20.7303 19.1208 23.7844 19.4412 26.4054C18.8447 21.9866 18.6158 17.8436 18.8297 13.9276C18.9883 13.9715 19.1325 13.9616 19.297 13.9176L19.3518 13.9029C19.6187 13.8026 19.8567 13.5948 19.929 13.3163C21.0944 9.90214 20.5745 5.10624 20.1956 1.61059L20.1926 1.58306L20.1525 1.10428C20.1223 0.881994 19.9348 0.730641 19.7084 0.762523C19.4819 0.794407 19.3261 0.980151 19.3563 1.20243C19.418 1.76182 19.0366 3.18866 18.6349 4.64971L18.595 4.80197C17.7741 7.93244 16.7822 11.7152 18.0871 13.349C18.0144 14.722 17.9762 16.1144 17.9799 17.5533C16.9845 14.8251 15.1079 11.9876 13.5398 9.64331L13.3366 9.32341C10.5577 5.2014 7.33838 2.17649 3.72767 0.321925C3.56183 0.251173 3.36278 0.275713 3.25454 0.419902C3.1463 0.56409 3.10727 0.747327 3.20528 0.893845C4.81612 3.28629 6.06103 5.96684 7.27554 8.58195L7.38433 8.81616C8.93038 12.1742 10.5398 15.6593 12.9197 18.6212C13.5828 19.4514 16.2542 22.076 17.7616 21.6721C17.8164 21.6574 17.8987 21.6353 17.9463 21.5938C18.0213 21.5449 18.0963 21.496 18.1439 21.4544C18.3331 24.0242 18.668 26.699 19.1556 29.5055C18.4421 28.4873 17.3826 27.2737 16.1284 25.882C16.0692 25.8163 16.0108 25.7539 15.9562 25.6955C15.8565 25.5889 15.769 25.4953 15.7103 25.4181C14.3164 23.8335 12.5691 22.0267 10.3341 20.8114C8.85178 19.9975 7.22171 19.4711 5.64643 18.9623L5.54067 18.9282C3.96733 18.4283 2.35938 17.9088 0.913102 17.1157C0.774675 17.0376 0.575623 17.0622 0.452984 17.1526C0.337544 17.2699 0.298516 17.4532 0.341711 17.6144C1.53033 20.4059 3.04279 21.5557 4.51344 22.659C5.3944 23.3156 6.21334 23.9601 6.93982 24.9173C8.547 27.0783 10.4673 28.9827 12.6661 30.6109C12.7079 30.6573 16.8546 33.6352 19.1294 33.0257C19.3761 32.9596 19.581 32.8471 19.7786 32.7078L20.2147 34.6643C21.3115 39.5249 23.0138 45.0009 26.9756 48.6044C27.0867 48.6898 27.2179 48.741 27.3549 48.7043C27.42 48.6869 27.4634 48.6572 27.5158 48.6214L27.5598 48.5918C27.7228 48.4329 27.7129 48.1764 27.5254 48.0251C24.0365 44.8709 22.3915 40.1571 21.3003 35.7556C21.2967 35.7422 21.2949 35.7355 21.2974 35.7312C21.3 35.7269 21.3068 35.7251 21.3205 35.7214ZM25.475 12.6365L25.459 12.7116C24.6031 16.7306 23.2144 23.2512 20.4608 26.7272C20.4635 26.7216 20.4643 26.7155 20.4622 26.7077C22.1209 23.47 23.3168 20.0396 24.0367 16.4775C24.0822 16.2639 24.1259 16.0436 24.1696 15.8232C24.2133 15.6028 24.2572 15.3817 24.3027 15.168L24.3603 14.8458C24.4823 14.1608 24.6066 13.4624 24.7826 12.7932C24.8318 12.5929 24.8827 12.3993 24.9336 12.2056C24.9845 12.0122 25.0356 11.8182 25.0846 11.6181L25.1096 11.5263C25.4574 10.2506 25.814 8.94255 25.7442 7.61139C25.7634 7.57893 25.7826 7.54647 25.7783 7.52029C26.1267 9.15321 25.839 10.9278 25.475 12.6365ZM20.4458 26.7461C20.4383 26.7539 20.4295 26.7631 20.4218 26.7762L20.4458 26.7461ZM21.6429 18.6163L21.7888 18.1741C22.875 14.773 24.14 11.3816 25.5507 8.09519C25.517 9.28487 25.2078 10.4332 24.8986 11.5815C24.8495 11.7819 24.7985 11.9755 24.7476 12.1691C24.6967 12.3627 24.6457 12.5564 24.5966 12.7567C24.4001 13.5581 24.2584 14.3448 24.1167 15.1314C24.0711 15.3452 24.0274 15.5657 23.9837 15.7862C23.9399 16.0067 23.8962 16.2272 23.8507 16.4409C23.1235 19.9762 21.9479 23.3724 20.3094 26.5759C19.8746 24.0783 20.8826 20.9648 21.6374 18.6333L21.6429 18.6163ZM12.8646 10.0834C14.6633 12.7402 16.8758 16.0637 17.6201 19.0607C17.8086 19.8741 17.8286 20.3871 17.7563 20.6656L14.7001 17.4818C14.0946 16.8665 13.4819 16.2244 12.9514 15.5602C11.4968 13.7447 10.5031 11.5892 9.54975 9.5211L9.45959 9.32556C8.80978 7.88708 8.11815 6.40221 7.31109 5.03465C6.71444 4.01387 6.02256 3.0762 5.27587 2.15321C7.99236 3.95941 10.4705 6.5206 12.6685 9.79037L12.8646 10.0834ZM13.5531 18.1347C11.2741 15.2929 9.72709 11.9539 8.2319 8.72685L8.11575 8.4762L7.76187 7.72198C6.85627 5.78884 5.93624 3.8249 4.81297 1.96048C5.66349 2.94204 6.45337 4.02623 7.13363 5.13979C7.9407 6.50735 8.63232 7.99222 9.28214 9.43071L9.35004 9.57871C10.3171 11.6869 11.3149 13.8623 12.7812 15.6923C13.1873 16.2142 13.6518 16.7041 14.1039 17.1808C14.2504 17.3353 14.3956 17.4883 14.537 17.6407L17.6351 20.8709C17.6149 20.9051 17.5875 20.9124 17.5601 20.9198C16.9657 21.223 14.6905 19.5289 13.5531 18.1347ZM30.6564 23.861C28.5943 26.1413 26.4643 28.4975 24.8999 30.4428C24.8049 30.5615 24.7109 30.6837 24.6158 30.8071C24.4465 31.0269 24.2741 31.2509 24.0874 31.4668L24.0448 31.5226C23.1448 32.7 22.2234 33.9055 21.1652 34.8127L21.1364 34.7053C21.1566 34.6711 21.1854 34.6417 21.2143 34.6124C21.2432 34.5831 21.272 34.5537 21.2922 34.5195C21.3124 34.4853 21.3326 34.4511 21.3601 34.4438C22.2072 33.4393 22.8322 32.2639 23.4371 31.1228C23.5511 30.8906 23.6926 30.6512 23.8341 30.4117C26.6707 25.1018 30.7446 20.353 35.5535 16.7032L35.7512 16.5638L35.8454 16.4915C36.4495 16.0281 37.0693 15.5528 37.5261 14.9651C37.8665 14.7011 38.207 14.4371 38.5403 14.1463C37.4816 16.3145 34.1177 20.0339 31.0183 23.4608L30.6564 23.861ZM33.0174 17.8722C33.3015 17.6974 33.5877 17.5237 33.875 17.3493C34.7608 16.8117 35.6574 16.2674 36.5377 15.6619C36.3696 15.8087 36.1895 15.9486 36.0059 16.0913C35.8775 16.191 35.7474 16.2921 35.6186 16.3978L35.4209 16.5371C30.5643 20.2285 26.4977 25.0041 23.6336 30.3214C23.5629 30.4411 23.499 30.559 23.4351 30.6769C23.3713 30.7948 23.3073 30.9128 23.2367 31.0325C22.6794 32.1321 22.0673 33.2464 21.2679 34.2093C23.4932 28.3721 27.0308 23.0471 31.6324 18.7329C31.8289 18.6091 32.022 18.4912 32.2126 18.3747C32.4849 18.2084 32.7527 18.0448 33.0174 17.8722ZM22.2909 30.134C22.3514 29.9944 22.4011 29.8642 22.4468 29.7447C22.4969 29.6133 22.5421 29.4949 22.5913 29.3913C23.5286 26.75 24.6862 24.712 26.0759 23.1014C27.405 21.5934 29.0744 20.3686 30.8071 19.2708C26.5272 23.47 23.2205 28.5603 21.1092 34.1654C21.1906 32.9342 21.9241 31.0674 22.2909 30.134ZM19.2108 13.0479C19.1906 13.0822 19.143 13.1237 19.143 13.1237L19.0882 13.1384C19.3507 11.6533 19.4602 10.1294 19.5683 8.62568C19.59 8.32358 19.6117 8.02225 19.6345 7.72228L19.7972 5.25978C19.9603 7.95172 19.9676 10.8294 19.2108 13.0479ZM19.4209 4.84226C19.4932 4.56374 19.5654 4.28521 19.6448 4.03355L19.408 7.75416L19.3638 8.38578C19.2572 9.92359 19.1471 11.5105 18.8878 13.0481C17.5626 11.8948 18.6521 7.76012 19.3947 4.94187L19.4209 4.84226ZM9.90249 21.503C12.0063 22.6671 13.7045 24.4005 15.0567 25.9388C15.1021 25.9986 15.1648 26.0682 15.238 26.1494C15.3112 26.2306 15.3948 26.3234 15.482 26.4296C18.554 29.7819 19.2991 31.1373 19.4156 31.682L18.5809 30.869L18.3958 30.7001C18.0603 30.3944 17.71 30.0754 17.3987 29.7459C16.6116 28.8913 15.7625 28.0246 14.9004 27.2189C13.2943 25.7199 11.5324 24.4066 9.70849 23.0812C8.19933 21.9785 6.64395 20.8882 5.11159 19.814L4.7024 19.5272C4.79902 19.5589 4.88699 19.5857 4.97496 19.6125C5.06293 19.6393 5.1509 19.6661 5.24752 19.6979C6.84827 20.1904 8.48362 20.7025 9.90249 21.503ZM19.4054 31.9727C19.3953 31.9898 19.3834 32.0002 19.3715 32.0106C19.3596 32.021 19.3477 32.0313 19.3376 32.0484C18.9597 32.0633 18.5516 31.8559 18.1983 31.6338C14.5835 29.4348 11.3539 26.7006 8.0682 23.8662C6.03968 22.1061 4.03856 20.3386 2.05764 18.5368C2.72098 18.8198 3.40453 19.0686 4.10828 19.2832C5.95186 20.5741 7.80263 21.8918 9.6534 23.2095C11.4773 24.535 13.2337 25.8226 14.8397 27.3216C15.4765 27.9166 16.0912 28.549 16.6944 29.1695C16.9078 29.389 17.1199 29.6073 17.3309 29.8217C17.6422 30.1512 17.9924 30.4702 18.328 30.7759L18.5131 30.9447C18.6731 31.1034 18.8382 31.2536 19.0033 31.4037C19.1683 31.5539 19.3334 31.704 19.4934 31.8627C19.4256 31.9385 19.4054 31.9727 19.4054 31.9727ZM13.1395 29.9657C11.0171 28.4034 9.16601 26.5381 7.57323 24.4308C6.83397 23.4322 5.97618 22.7736 5.13491 22.1276L4.98683 22.0138L4.96486 21.9972C3.79236 21.109 2.5873 20.1962 1.60915 18.3978C3.67367 20.2923 5.79301 22.1722 7.93256 24.0178C11.2183 26.8521 14.455 29.6132 18.0973 31.8049C18.4088 31.9806 18.7202 32.1563 19.0649 32.2367C17.7305 32.7382 14.6173 31.0959 13.1395 29.9657Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.027 10.3792C17.0818 10.3645 17.164 10.3425 17.2116 10.3009C17.607 10.0222 17.4832 9.45063 17.3118 8.92062C16.9056 7.73362 16.2658 6.55163 15.7528 5.62363C15.0293 4.34886 14.2308 3.12299 13.3645 1.97288C12.8615 1.30137 12.3681 1.43356 12.1907 1.5387C12.0334 1.60963 11.9526 1.74648 11.9684 1.91503C12.0141 2.85306 12.3065 3.725 12.6335 4.61646C13.3523 6.64119 14.2023 8.71715 15.9916 10.0231C16.1444 10.1549 16.6159 10.4893 17.027 10.3792ZM12.8435 2.65961C13.6262 3.71694 14.3685 4.84268 15.0083 6.02467C15.5142 6.92581 16.1468 8.08093 16.5314 9.18733L16.6178 9.50974C16.5867 9.49219 16.5611 9.47315 16.5329 9.4522C16.4985 9.42653 16.4601 9.39797 16.4029 9.36573C14.8213 8.17694 14.0347 6.22797 13.3519 4.33758C13.1315 3.73431 12.9601 3.20431 12.8435 2.65961Z" fill="white"></path></svg></span>
                    <span className='text-sm font-Cormorantupright italic sm:text-xs'>Made with Love</span></div>
            </div>

        </footer>
    )
}

export default Footer