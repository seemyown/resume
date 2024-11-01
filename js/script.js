// animate scroll
document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let href = link.getAttribute("href");
    let top = document.querySelector(href).offsetTop;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
});

// form
let form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("send");
  let fd = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "");
  xhr.send(fd);

  xhr.onload = () => {
    let alert = document.querySelector(".uk-alert-success");
    alert.style.display = "block";
    setTimeout(() => {
      alert.classList.add("hide");
      setTimeout(() => {
        alert.classList.remove("hide");
        alert.style.display = "none";
      }, 300);
    }, 1500);
  };
  xhr.onerror = () => {
    console.log(xhr.response);
    let alert = document.querySelector(".uk-alert-danger");
    alert.style.display = "block";
    setTimeout(() => {
      alert.classList.add("hide");
      setTimeout(() => {
        alert.classList.remove("hide");
        alert.style.display = "none";
      }, 300);
    }, 1500);
  };
});
