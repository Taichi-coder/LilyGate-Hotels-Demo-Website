document.querySelector(".mms").addEventListener("input", (event) => {
      const show = document.querySelector(".mm");
      const regex = /(a-z*)?[@]?(gmail.com|hotmail.com|email.com)$/g;
      const input = document.querySelector(".mms");

      const phone = input.value;
      const found = regex.test(phone);
      if (!found && phone.length) {
        input.classList.add('invalid');
        show.classList.add('format');
    }else {
        input.classList.remove('invalid');
        show.classList.remove('format');
    }
    })

/* Tool-tip */
const tooltips = document.querySelectorAll('.tt')
tooltips.forEach(t => {
    new bootstrap.Tooltip(t)
    })

document.querySelector(".mms");