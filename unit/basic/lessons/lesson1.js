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

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("audio-container");
  const links = container.getElementsByTagName("a");

  Array.from(links).forEach((link) => {
    if (link.href.endsWith(".mp3")) {
      const audioSrc = link.href;

      // Tạo button và thêm chức năng phát âm thanh
      const button = document.createElement("button");
      button.className = "btn";
      button.textContent = "Play";
      button.onclick = function () {
        const audio = new Audio(audioSrc);
        audio.play();
      };

      // Chèn button vào trước thẻ a
      link.insertAdjacentElement("beforebegin", button);
    }
  });
});
