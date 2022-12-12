function renderCarousel() {
  const carouselList = [...$(".carousel__item img")];
  carouselList.forEach((item) => {
    item.src = `./image/carousel_img/${item.id}.jpg`;
  });
}
function renderJustHead() {
  const data = [
    {
      img: "./image/justHead_img/1.jpg",
      tittle: "R.A.P",
    },
    {
      img: "./image/justHead_img/2.jpg",
      tittle: "Chi Dân",
    },
    {
      img: "./image/justHead_img/3.jpg",
      tittle: "Nhạc trẻ",
    },
    {
      img: "./image/justHead_img/4.jpg",
      tittle: "Karik",
    },
    {
      img: "./image/justHead_img/5.jpg",
      tittle: "Phan Mạnh Quỳnh",
    },
    {
      img: "./image/justHead_img/6.jpg",
      tittle: "Hoàng Tôn",
    },
  ];
  const listItem = $(".justHeard .row ");
  listItem.html(
    data
      .map((item) => {
        return `
          <div class="item col-lg-2 col-md-2 col-4">
          <div class="card">
            <img
              src="${item.img}"
              alt="" />
            <div class="card__heading">${item.tittle}</div>
          </div>
        </div>
      `;
      })
      .join("")
  );
}
async function renderListSong() {
  let data;
  await fetch("http://localhost:8080/admin/load_full_music.php")
    .then((res) => res.json())
    .then((res) => {
      data = res.data;
    });
  // render
  if (data) {
    const listSong = $(".listSong__list-item .row");
    listSong.html(
      data
        .map((item) => {
          return `
          <div class="col-lg-4 col-md-6 col-12">
          <div class="item">
            <img
              src="http://localhost:8080/image/${item.path_anh}"
              alt="" />
            <div class="body-item">
              <h4 class="songname">${item.ten_bai_hat}</h4>
              <a class="singlename">${item.ten_tac_gia}</a>
              <p class="datetime">${item.ngay_phat_hanh}</p>
            </div>
            <!-- play btn -->
            <div class="play-btn" data-songid="${item.id}">
              <i class="fa-solid fa-play"></i>
            </div>
          </div>
        </div>
      `;
        })
        .join("")
    );
  }
}
function handleCarousel() {
  //  default
  renderCarousel();
  // handle click
  const nextBtn = $(".carousel__next");
  nextBtn.click((e) => {
    console.log("oke");
    const carouselList = [...$(".carousel__item img")];
    carouselList.forEach((item) => {
      // 6 là số lượng carousel đang có trong folder image
      +item.id + 1 === 6 ? (item.id = 0) : (item.id = +item.id + 1);
    });
    renderCarousel();
  });

  const prevBtn = $(".carousel__prev");
  prevBtn.click((e) => {
    const carouselList = [...$(".carousel__item img")];
    carouselList.forEach((item) => {
      +item.id - 1 === -1 ? (item.id = 5) : (item.id = +item.id - 1);
    });
    renderCarousel();
  });
}
function handleCickOnListSong() {
  const listSong = $(".listSong__list-item .play-btn");
  $("body").on("click", ".listSong__list-item .play-btn", async function (e) {
    currentSongId = +this.dataset.songid;
    if (this.querySelector("i").classList.contains("fa-play")) {
      await callApiChangeInfo(currentSongId);
      [...$(".listSong_list-item i")].forEach((item) => {
        item.classList.replace("fa-pause", "fa-play");
      });
      this.querySelector("i").classList.replace("fa-play", "fa-pause");
      $("footer .play-btn")[0].classList.replace("fa-play", "fa-pause");
      $("footer audio")[0].play();
    } else {
      this.querySelector("i").classList.replace("fa-pause", "fa-play");
      $("footer .play-btn")[0].classList.replace("fa-pause", "fa-play");
      $("footer audio")[0].pause();
    }
  });
}
// --------------- just footer  -----------------------------------------------------------------------------
function handleAudioLoading() {
  // update process
  $("footer audio").on("timeupdate", async function (e) {
    const audio = $("footer .songControl-menu audio");
    const processTime = (this.currentTime / this.duration) * 100;
    const processLine = $(".songControl-processbar-line").css("width", `${processTime}%`);
    let timeStart = "00:00";
    if (this.currentTime < 60) {
      this.currentTime < 10
        ? (timeStart = `00:0${Math.floor(this.currentTime)}`)
        : (timeStart = `00:${Math.floor(this.currentTime)}`);
    } else {
      let minute = Math.floor(this.currentTime / 60);
      let second = Math.floor(this.currentTime % 60);
      minute < 10 ? (timeStart = `0${minute}:`) : (timeStart = `${minute}:`);
      second < 10 ? (timeStart += `0${second}`) : (timeStart += `${second}`);
    }
    $("footer .time-start").text(timeStart);
    // end song
    if (this.duration === this.currentTime) {
      processLine.css("width", "0%");
      $("footer .time-start").text("00:00");
      if (currentSongId == 15) {
        currentSongId = 1;
      } else {
        currentSongId++;
      }
      await callApiChangeInfo(currentSongId);
      await $("footer audio")[0].play();
    }
  });
}
async function callApiChangeInfo(songid) {
  let data;
  await fetch(`http://localhost:8080/admin/get_music_by_id.php?id=${songid}`)
    .then((res) => res.json())
    .then((res) => {
      data = res.data;
    });
  // change info
  await $("footer audio").attr("src", `http://localhost:8080/music/${data.path_nhac}`);
  await $("footer audio").attr("data-songid", data.id);
  await $("footer .songInfo-img img").attr("src", `http://localhost:8080/image/${data.path_anh}`);
  await $("footer .songInfo-detail .songname").text(data.ten_bai_hat);
  await $("footer .songInfo-detail .singer-name").text(data.ten_tac_gia);
}
function handleMenuSong() {
  // change heart icon when click
  const heartBtn = $(".songInfo-more .heart");
  heartBtn.on("click", function (e) {
    e.target.classList.toggle("active");
  });

  // next song
  const nextBtn = $(".songControl-menu .next-btn");
  nextBtn.on("click", async function (e) {
    if (currentSongId < countSong) {
      currentSongId++;
    } else {
      currentSongId = 1;
    }
    await callApiChangeInfo(currentSongId);
    const playBtn = $(".songControl-menu .play-btn");
    await playBtn[0].classList.replace("fa-play", "fa-pause");
    await $("footer audio")[0].play();
  });
  // prev song
  const prevBtn = $(".songControl-menu .prev-btn");
  prevBtn.on("click", async function (e) {
    if (currentSongId > 1) {
      currentSongId--;
    } else {
      currentSongId = countSong;
    }
    await callApiChangeInfo(currentSongId);
    // auto play
    const playBtn = $(".songControl-menu .play-btn");
    await playBtn[0].classList.replace("fa-play", "fa-pause");
    await $("footer audio")[0].play();
  });

  // on off volume
  const volumeBtn = $(".songMenu .volume-btn");
  volumeBtn.on("click", function (e) {
    if (this.classList.contains("fa-volume-up")) {
      this.classList.replace("fa-volume-up", "fa-volume-mute");
      $("footer audio")[0].volume = 0;
    } else {
      this.classList.replace("fa-volume-mute", "fa-volume-up");
      $("footer audio")[0].volume = 1;
    }
  });

  // random current song and auto play
  const randomBtn = $(".songControl-menu .random-btn");
  randomBtn.on("click", async function (e) {
    console.log("random");
    currentSongId = Math.floor(Math.random() * countSong + 1);
    await callApiChangeInfo(currentSongId);
    $("footer audio")[0].play();
    // chane UI
    const playBtn = $(".songControl-menu .play-btn");
    playBtn[0].classList.replace("fa-play", "fa-pause");
  });

  // repeat current song and auto play
  const repeatBtn = $(".songControl-menu .repeat-btn");
  repeatBtn.on("click", async function (e) {
    console.log("repeat");
    await callApiChangeInfo(currentSongId);
    $("footer audio")[0].play();
    // chane UI
    const playBtn = $(".songControl-menu .play-btn");
    playBtn[0].classList.replace("fa-play", "fa-pause");
  });
}
var currentSongId = 1;
var countSong = 15;
function handlePlaySong() {
  callApiChangeInfo(currentSongId);

  // change UI
  const playBtn = $(".songControl-menu .play-btn");
  playBtn.on("click", function (e) {
    if (this.classList.contains("fa-play")) {
      this.classList.replace("fa-play", "fa-pause");
      $("footer audio")[0].play();
    } else {
      this.classList.replace("fa-pause", "fa-play");
      $("footer audio")[0].pause();
    }
  });

  handleAudioLoading();
  handleMenuSong();
  handleCickOnListSong();
}
// ----------------- start ---------------------------

function start() {
  handleCarousel();
  renderJustHead();
  renderListSong();
  handlePlaySong();
}
