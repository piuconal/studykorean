document
  .querySelectorAll("img[data-url], span[data-url]")
  .forEach((element) => {
    element.addEventListener("click", function () {
      // Lấy URL từ thuộc tính data-url
      const url = this.getAttribute("data-url");
      // Chuyển hướng đến URL tương ứng
      window.location.href = url;
    });
  });

function playAudio(button) {
  const audio = button.nextElementSibling; // Lấy thẻ <audio> ngay sau thẻ button
  audio.play();
}
