// function loadContent(menu) {
//   var title = "";
//   var content = "";
//   if (menu === "Tiếng Hàn cơ bản") {
//     title = "Tiếng Hàn cơ bản"; // Tiêu đề modal khi nhấn vào Tiếng Hàn cơ bản
//     content = `
//       <ul>
//         <li><a href="#">I. Bài học 1 - 8</a></li>
//         <li><a href="#">II. Bài học 9 - 16</a></li>
//         <li><a href="#">III. Bài học 17 - 25</a></li>
//       </ul>`;
//   } else if (menu === "Tiếng Hàn cho thuyền viên") {
//     title = "Tiếng Hàn cho thuyền viên"; // Tiêu đề modal khi nhấn vào Tiếng Hàn cho thuyền viên
//     content = `
//       <ul>
//         <li><a href="#">I. Từ vựng liên quan đánh bắt</a></li>
//         <li><a href="#">II. Từ vựng sinh hoạt hàng ngày</a></li>
//         <li><a href="#">III. Các cuộc hội thoại</a></li>
//         <li><a href="#">IV. Quy tắc an toàn khi đánh bắt</a></li>
//       </ul>`;
//   }
//   // Cập nhật tiêu đề modal
//   document.getElementById("modalTitle").innerText = title;
//   // Cập nhật nội dung modal
//   document.getElementById("modalBody").innerHTML = content;
// }

// Lắng nghe sự kiện click cho tất cả các thẻ img và span có thuộc tính data-url
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
