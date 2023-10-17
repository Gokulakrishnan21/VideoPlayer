window.addEventListener("load", function () {
  let media = document.querySelector("#video");
  let playbtn = document.querySelector(".play");
  let pausebtn = document.querySelector(".pause");
  let resetbtn = document.querySelector(".reset");
  let player = document.querySelector(".player");
  let zoomin = document.querySelector(".zoom-in");
  let zoomout = document.querySelector(".zoom-out");
  let Progress = document.querySelector(".timeline span:nth-child(2) span ")
  let volume = this.document.querySelector(".volume");

  playbtn.addEventListener("click", function () {
    media.play();
    playbtn.classList.add("d-none");
    pausebtn.classList.remove("d-none");
    resetbtn.classList.remove("d-none");
  });
  pausebtn.addEventListener("click", function () {
    media.pause();

    playbtn.classList.remove("d-none");
    pausebtn.classList.add("d-none");
    resetbtn.classList.remove("d-none");
  });

  resetbtn.addEventListener("click", function () {
    media.play();
    resetbtn.classList.add("d-none");
    playbtn.classList.add("d-none");
    pausebtn.classList.remove("d-none");
  });

  zoomin.addEventListener("click", function () {
    player.requestFullscreen();
    zoomin.classList.add("d-none");
    zoomout.classList.remove("d-none");
  });

  zoomout.addEventListener("click", function () {
    zoomin.classList.remove("d-none");
    zoomout.classList.add("d-none");
    document.exitFullscreen();
  });
volume.addEventListener("click", function(){
  media.volume =0;
});
volume.addEventListener("click", function(){
  media.volume =100;
});

  media.addEventListener("timeupdate", function () {
    console.log("time");

  let cursec = media.currentTime % 60;
  let curmin = media.currentTime / 60;

  curmin = Math.floor(curmin);
  curmin = curmin < 10 ? "0" + curmin : curmin;
  cursec = Math.floor(cursec);
  cursec = cursec < 10 ? "0" + cursec : cursec;
  document.querySelector(".start").innerHTML = `${curmin}:${cursec}`;

let width =(media.currentTime / media.duration)*100;
console.log(width);
Progress.style.width= width + "%";

});
  let dursec = media.duration % 60;
  let durmin = media.duration / 60;

  durmin = Math.floor(durmin);
  durmin = durmin < 10 ? "0" + durmin : durmin;
  dursec = Math.floor(dursec);
  dursec = dursec < 10 ? "0" + dursec : dursec;

  document.querySelector(".total").innerHTML = `${durmin}:${dursec}`;

});
