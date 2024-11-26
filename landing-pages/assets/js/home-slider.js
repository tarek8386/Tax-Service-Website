(function ($) {
    "use strict";
  
    $(document).ready(function () {
           
  
      // copy marquee node
      function copyMarqueeNode() {
        var heroMarquee = document.querySelectorAll(".rk--hero--marquee .slide");
        var ParentContainer = document.querySelectorAll(".rk--hero--marquee");
  
        var storiesMarqueeWrapper = document.querySelectorAll(
          ".stories--marquee--slider"
        );
  
        if (heroMarquee) {
          ParentContainer.forEach((container) => {
            heroMarquee.forEach((marquee) => {
              let copySlide = marquee.cloneNode(true);
              container.appendChild(copySlide);
            });
          });
        }
  
        if (storiesMarqueeWrapper) {
          storiesMarqueeWrapper.forEach((storiesMarquee) => {
            var copyStroriesSlide = storiesMarquee
              .querySelector(".slide")
              .cloneNode(true);
            storiesMarquee.appendChild(copyStroriesSlide);
          });
        }
      }
      copyMarqueeNode();
  
    });
  })(jQuery);
  