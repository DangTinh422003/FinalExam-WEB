function renderCarousel() {
  const carouselList = [...$(".carousel__item img")];
  carouselList.forEach((item) => {
    item.src = `./image/${item.id}.jpg`;
  });
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

// draw chart
function drawChart() {
  var options = {
    series: [
      {
        name: "VPOP",
        data: [74, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "KPOP",
        data: [53, 32, 75, 32, 34, 52, 41],
      },
      {
        name: "US-UK",
        data: [92, 84, 18, 85, 34, 84, 34],
      },
    ],
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}
