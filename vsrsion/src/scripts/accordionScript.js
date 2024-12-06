(function() {
  if (!window.accordionScriptLoaded) {
    window.accordionScriptLoaded = true;

    var initAccordion = function() {
      var accordionContainers = document.querySelectorAll('[data-role="accordion-container"]');
      var accordionContents = document.querySelectorAll('[data-role="accordion-content"]');
      var accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]');
      var accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]');

      accordionContents.forEach((accordionContent) => {
          accordionContent.style.display = "none";
      });

      accordionIconsClosed.forEach((icon) => {
        icon.style.display = "flex"
      });

      accordionIconsOpen.forEach((icon) => {
        icon.style.display = "none"
      });

      accordionContainers.forEach((accordionContainer, index) => {
          accordionContainer.addEventListener("click", () => {
              if (accordionContents[index].style.display === "flex") {
                  accordionContents[index].style.display = "none";
                  accordionIconsClosed[index].style.display = "flex";
                  accordionIconsOpen[index].style.display = "none";
              } else {
                  accordionContents.forEach((accordionContent) => {
                      accordionContent.style.display = "none";
                  });

                  accordionIconsClosed.forEach((accordionIcon) => {
                      accordionIcon.style.display = "flex";
                  });

                  accordionIconsOpen.forEach((accordionIcon) => {
                    accordionIcon.style.display = "none";
                  });
                  
                  accordionContents[index].style.display = "flex";
                  accordionIconsClosed[index].style.display = "none";
                  accordionIconsOpen[index].style.display = "flex";
              }
          });
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAccordion);
    } else {
      initAccordion();
    }
  }
})();