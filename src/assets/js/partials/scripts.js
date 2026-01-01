
document.addEventListener("click", function (e) {
  var questionsDivClicked =
    e.target.classList.contains("questions_div") ||
    e.target.closest(".questions_div");
  if (questionsDivClicked) {
    var questionsDiv = e.target.closest(".questions_div");

    var isAlreadyActive = questionsDiv.classList.contains("show_answer");

    var allQuestionsDivs = document.querySelectorAll(".questions_div");
    allQuestionsDivs.forEach(function (div) {
      div.classList.remove("show_answer");
    });

    if (!isAlreadyActive) {
      questionsDiv.classList.add("show_answer");
    }
  }
});

document.querySelectorAll("p, .ql-align-center").forEach((el) => {
  const content = el.innerHTML
    .replace(/\s/g, "")
    .replace(/&nbsp;/g, "")
    .replace(/<br\s*\/?>/g, "");

  if (!content) {
    el.style.display = "none";
  }
});

document.querySelectorAll('.accordion_item').forEach(button => {
  button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const iconAdd = button.querySelector('.sicon-add');
      const iconHr = button.querySelector('.sicon-hr');

      if (content.style.display === 'block') {
          content.style.display = 'none';
          iconAdd.style.display = 'inline-block';
          iconHr.style.display = 'none';
      } else {
          content.style.display = 'block';
          iconAdd.style.display = 'none';
          iconHr.style.display = 'inline-block';
      }
  });
});

(function () {
  function applyFastCheckoutStyle() {
    const widget = document.querySelector("salla-mini-checkout-widget");
    if (!widget || !widget.shadowRoot) return;

    // امنع التكرار
    if (widget.shadowRoot.querySelector("#fast-checkout-style")) return;

    const style = document.createElement("style");
    style.id = "fast-checkout-style";
    style.textContent = `
      .s-fast-checkout-button.outline {
        background-color: transparent !important;
        border: 1px solid var(--color-primary) !important;
        color: var(--color-primary) !important;
        padding: 24px 12px !important;
        border-radius: 50px !important;
      }
    `;
    widget.shadowRoot.appendChild(style);
  }

  // أول تحميل
  document.addEventListener("DOMContentLoaded", applyFastCheckoutStyle);

  // مراقبة أي تغييرات في الصفحة
  const observer = new MutationObserver(() => {
    applyFastCheckoutStyle();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
