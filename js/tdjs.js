const selbtn = document.querySelectorAll(".selbtn");
const sel2btn = document.querySelectorAll(".sel2btn");

selbtn.forEach( function(e) {
  e.addEventListener("click", function(e) {
    e.target.classList.toggle("click");
  });
});

sel2btn.forEach( function(e) {
  e.addEventListener("click", function(e) {
    if (e.target.classList.contains("click")) {
      e.target.classList.remove("click");
      return;
    }
    sel2btn.forEach((e) => {
      e.classList.remove("click");
    });
    e.target.classList.add("click");
  });
});
