
      const btn_menu = document.querySelector(".btn-menu");
      const side_bar = document.querySelector(".sidebar");

      btn_menu.addEventListener("click", function () {
        side_bar.classList.toggle("expand");
        changebtn();
      });

      // function changebtn() {
      //   if (side_bar.classList.contains("expand")) {
      //     btn_menu.classList.replace("bx-menu", "bx-chevron-left");
      //   } else {
      //     btn_menu.classList.replace("bx-chevron-left", "bx-menu");
      //   }
      // }

      function changebtn() {
        if (side_bar.classList.contains("expand")) {
          btn_menu.classList.replace("bx-chevron-right", "bx-chevron-left");
        } else {
          btn_menu.classList.replace("bx-chevron-left", "bx-chevron-right");
        }
      }