 const textarea = document.getElementById('textarea');

    function press(val) {
      textarea.value += val;
      textarea.scrollLeft = textarea.scrollWidth; // auto-scroll to right when long
    }

    function calculate() {
      try {
        textarea.value = eval(textarea.value);
      } catch {
        textarea.value = "Error";
      }
    }