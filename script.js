window.onload = () => {
  const form = document.querySelector("#font-family-form");
  const fontSelector = document.querySelector("#font-family-selector");
  const fontSizeInput = document.querySelector("#font-size");
  const textArea = document.querySelector(".scroll_text");
  console.log(textArea.style.fontSize);
  fontSelector.addEventListener("change", (e) => {
    const value = fontSelector.options[fontSelector.selectedIndex].value;
    const text = `"${value}", cursive`;
    console.log(`"${value}", cursive`);
    textArea.style.fontFamily = text;
  });

  fontSizeInput.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    console.log(value);
    textArea.style.fontSize = `${value}px`;
  });
};
