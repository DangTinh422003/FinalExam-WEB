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
  let data 
  await fetch("http://localhost:8080/admin/load_full_music.php")
    .then((res) => res.json())
    .then((res) => {
      data = res.data
    });
  // render
  if (data) {
    console.log(data)
    const listSong = $(".listSong__list-item .row");
    listSong.html(
      data.map((item) => {
        return `
          <div class="col-lg-4 col-md-6 col-12">
          <div class="item">
            <img
              src="http://localhost:8080/image/${item.path_anh}"
              alt="" />
            <div class="body-item">
              <h4 class="songname">${item.ten_bai_hat}</h4>
              <a class="singlename">${item.singer}</a>
              <p class="datetime">${item.ngay_phat_hanh}</p>
            </div>
            <!-- play btn -->
            <div class="play-btn" data-songid="${item.id}">
              <i class="fa-solid fa-play"></i>
            </div>
          </div>
        </div>
      `;
      }).join('')
    )
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
function renderAlbum() {
  const data = [
    {
      img: 'https://bom.so/gJ9DXe',
      
    }
  ]

}
// -----------------------------------------------------------------------------------------------------
function handleFooter(songid) {
  $('.footer .songControl-menu i.play-btn').on('click',(e) => {
    e.target.classList.toggle('fa-play')
    e.target.classList.toggle('fa-pause')
  })
}
