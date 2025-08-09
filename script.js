window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Thêm class fade-out để loader mờ dần
  loader.classList.add("fade-out");

  // Sau khi fade-out xong, ẩn loader và hiện nội dung
  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 800);
});
