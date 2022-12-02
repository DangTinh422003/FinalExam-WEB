const DATA = [
  {
    id: 0,
    songname: "Ai cũng có ngày xưa",
    singer: "Phan Mạnh Quỳnh",
    path: "./music/y2meta.com - Ai Cũng Có Ngày Xưa - Phan Mạnh Quỳnh _ AUDIO LYRIC HD (192 kbps).mp3",
    timer: "00:54",
    img : './image/1.jpg'

  },
  {
    id: 1,
    songname: "Có một nơi như thế",
    singer: "Phan Mạnh Quỳnh",
    path: "./music/y2meta.com - Có Một Nơi Như Thế - Phan Mạnh Quỳnh _ AUDIO LYRIC OFFICIAL (192 kbps).mp3",
    timer: "01:45",
    img : './image/2.jpg'
  },
  {
    id: 2,
    songname: "Khi người mình yêu khóc",
    singer: "Phan Mạnh Quỳnh",
    path: "./music/y2meta.com - Khi Người Mình Yêu Khóc - Phan Mạnh Quỳnh (Official MV) (128 kbps).mp3",
    timer: "02:41",
    img : './image/3.jpg'
  },
  {
    id: 3,
    songname: "Nghĩ Lại",
    singer: "Phan Mạnh Quỳnh",
    path: "./music/y2meta.com - Nghĩ Lại - Phan Mạnh Quỳnh _ AUDIO LYRIC HD (128 kbps).mp3",
    timer: "02:33",
    img : './image/4.jpg'
  },
  {
    id: 4,
    songname: "Tri Kỷ",
    singer: "Phan Mạnh Quỳnh",
    path: "./music/y2meta.com - Tri Kỷ - Phan Mạnh Quỳnh (4K Official MV) (128 kbps).mp3",
    timer: "02:52",
    img : './image/5.jpg'
  },
];
// function render song
const renderListSong = () => {
  const listSong = $(".list-item");
  const htmls = DATA.map((song, index) => {
    return `
      <li class="item">
        <div class="item-left">
          <div class="control-btn">
            <i class="playInListSong fa-solid fa-circle-play" id="songId_${song.id}"></i>
          </div>
          <audio src="${song.path}"></audio>
          <div class="song-info">
            <h3 class="song-name">${song.songname}</h3>
            <h4 class="singer-name">${song.singer}</h4>
          </div>
        </div>
        <div class="item-right"><p class="timer">${song.timer}</p></div>
      </li>`;
  });
  listSong.html(htmls);
};
// next song
function handleNextSong() {
  $(".audio__main-control .fa-forward-step").click((e) => {
    currentSongID + 1 >= DATA.length ? (currentSongID = 0) : currentSongID++;
    const processBar = $('input[type="range"]');
    processBar.val(0);
    // set song infomation
    $(".audio__form .song-name").text(DATA[currentSongID].songname);
    $(".audio__form .singer-name").text(DATA[currentSongID].singer);
    $(".audio__form span:nth-child(2)").text(DATA[currentSongID].timer);
    $(".audio__form audio").attr("id", `songId_${currentSongID}`);
    $('.thumbnail img').attr('src', DATA[currentSongID].img)
    changIconOnListSong(currentSongID);

    play_pauseSong(currentSongID, "play");
    if ($(".audio__main-control .play-btn").hasClass("fa-circle-play")) {
      handleChangIcon();
    }
  });
}
// prev song
function handlePrevSong() {
  $(".audio__main-control .fa-backward-step").click((e) => {
    currentSongID - 1 < 0 ? (currentSongID = DATA.length - 1) : currentSongID--;
    const processBar = $('input[type="range"]');
    processBar.val(0);
    // set song infomation
    $(".audio__form .song-name").text(DATA[currentSongID].songname);
    $(".audio__form .singer-name").text(DATA[currentSongID].singer);
    $(".audio__form span:nth-child(2)").text(DATA[currentSongID].timer);
    $(".audio__form audio").attr("id", `songId_${currentSongID}`);
    $('.thumbnail img').attr('src', DATA[currentSongID].img)
    changIconOnListSong(currentSongID);

    play_pauseSong(currentSongID, "play");
    if ($(".audio__main-control .play-btn").hasClass("fa-circle-play")) {
      handleChangIcon();
    }
  });
}
// change icon
function handleChangIcon() {
  if ($(".audio__main-control .play-btn").hasClass("fa-circle-play")) {
    $(".audio__main-control .play-btn")[0].classList.replace("fa-circle-play", "fa-circle-pause");
    const songId = $(".audio__main-control audio").attr("id");
  } else {
    $(".audio__main-control .play-btn")[0].classList.replace("fa-circle-pause", "fa-circle-play");
    [...$(".list-item .playInListSong")].forEach((item) => {
      item.classList.replace("fa-circle-pause", "fa-circle-play");
    });
  }
}
// chang icon on list song
function changIconOnListSong(songId) {
  [...$(".list-item .playInListSong")].forEach((item) => {
    if (item.id.split("_")[1] == songId) {
      item.classList.replace("fa-circle-play", "fa-circle-pause");
    } else {
      item.classList.replace("fa-circle-pause", "fa-circle-play");
    }
  });
}
// click play and pause on left form
function play_pauseSong(songId, state) {
  const path = DATA[songId].path;
  $("audio").attr("src", path);
  if (state == "play") {
    $("audio")[0].play();
  } else {
    $("audio")[0].pause();
  }
}
// update process
function updateProcess() {
  $("audio").on("timeupdate", (e) => {
    const value = (e.target.currentTime / e.target.duration) * 100;
    $('input[type="range"]').val(value);
    if (e.target.currentTime == e.target.duration) {
      $('input[type="range"]').val(0);
      $(".audio__form span:nth-child(1)").text("00:00");
      handleChangIcon();
    }
    // update time
    const second =
      Math.floor(e.target.currentTime % 60) < 10
        ? `0${Math.floor(e.target.currentTime % 60)}`
        : Math.floor(e.target.currentTime % 60);
    const min =
      Math.floor(e.target.currentTime / 60) < 10
        ? `0${Math.floor(e.target.currentTime / 60)}`
        : Math.floor(e.target.currentTime / 60);
    $(".audio__form span:nth-child(1)").text(`${min}:${second}`);
  });
}

// start
var currentSongID = 0;
function start() {
  // click play on left form
  $(".audio__main-control .play-btn").click((e) => {
    if (e.target.classList.contains("fa-circle-play")) {
      // play
      handleChangIcon();
      const songId = +$("audio").attr("id").split("_")[1];
      currentSongID = songId;
      changIconOnListSong(songId);
      play_pauseSong(currentSongID, "play");
    } else {
      // pause
      const songId = +$("audio").attr("id").split("_")[1];
      handleChangIcon();
      play_pauseSong(currentSongID, "pause");
    }
  });

  // click play on list song
  $(".list-item").on("click", ".playInListSong", (e) => {
    if (e.target.classList.contains("fa-circle-play")) {
      [...$(".list-item .playInListSong")].forEach((item) => {
        item.classList.replace("fa-circle-pause", "fa-circle-play");
      });
      e.target.classList.replace("fa-circle-play", "fa-circle-pause");
      const songId = +e.target.id.split("_")[1];
      currentSongID = songId;
      play_pauseSong(currentSongID, "play");
      $(".audio__form .song-name").text(DATA[currentSongID].songname);
      $(".audio__form .singer-name").text(DATA[currentSongID].singer);
      $(".audio__form span:nth-child(2)").text(DATA[currentSongID].timer);
      $(".audio__form audio").attr("id", `songId_${currentSongID}`);
      if ($(".audio__main-control .play-btn").hasClass("fa-circle-play")) {
        $(".audio__main-control .play-btn")[0].classList.replace("fa-circle-play", "fa-circle-pause");
        const songId = $(".audio__main-control audio").attr("id");
      }
    } else {
      e.target.classList.replace("fa-circle-pause", "fa-circle-play");
      play_pauseSong(currentSongID, "pause");
      if ($(".audio__main-control .play-btn").hasClass("fa-circle-pause")) {
        $(".audio__main-control .play-btn")[0].classList.replace("fa-circle-pause", "fa-circle-play");
      }
    }
  });

  handleNextSong();
  handlePrevSong();
  updateProcess();
}
start();
