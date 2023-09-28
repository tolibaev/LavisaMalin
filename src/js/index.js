import * as functions from "./modules/functions.js";

functions.isWebp();

functions.inertFunction();

functions.menuBurger();

functions.useDynamicAdapt();

// functions.PopupFunction();

// functions.spollersInit();

// functions.phoneMaskFunction();

// functions.custumSelectFunction();

functions.validationFormFunction();

functions.animationFunction();
//=============================================================================================================================================

import Swiper from 'swiper';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
new Swiper('.swiper', {
   modules: [Pagination, Autoplay, EffectFade],
   pagination: {
      el: '.hero__pagination',
      clickable: true,
   },
   autoplay: {
      delay: 1500,
      disableOnInteraction: false,
   },
   loop: true,
   speed: 1000,
   effect: "fade",
});
//=============================================================================================================================================
// function isMobile() {
//    const mobiles = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
//    return mobiles.test(navigator.userAgent);
// }




