const CITY_URL =
  "https://f2e2023-age25.github.io/SaKkaVote/data/area_vote.json";

const area = document.getElementById("area");
const town = document.getElementById("town");
const refresh = document.getElementById("cRefresh");
const refresTime = document.getElementById("refresh-time");
const cardVote = document.getElementById("cardVotes");

const voteSection = document.querySelector(".vote-section");
const listChart = document.querySelector("#listChart");
const numsVote = document.querySelector(".nums-vote");
const dataPanelHan = document.querySelector(".data-panel-han");
const dataPanelTsai = document.querySelector(".data-panel-tsai");

let numsVoteHTML = "";

function changeTime() {
  const today = new Date();
  let year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();
  let date = today.getDate().toString();
  let hour = today.getHours().toString();
  let minute = today.getMinutes().toString();

  function addZero(str) {
    if (str.length <= 1) {
      str = "0" + str;
    }
    return str;
  }

  month = addZero(month);
  date = addZero(date);
  hour = addZero(hour);
  minute = addZero(minute);
  refresTime.innerHTML = `上次更新時間：${year}/${month}/${date} ${hour}:${minute} <br />倒數下次更新時間：05分00秒`;
}

changeTime();

// 更新時間
refresh.addEventListener("click", () => {
  changeTime();
});

// 清除頁面
function clear() {
  numsVoteHTML = "";
}

function tsaiNumber(area, t, h, s) {
  numsVoteHTML += `<div class="render-vote"><p class="em-area">${area}</p>蔡英文 : ${t}票    韓國瑜 : ${h}票    宋楚瑜 : ${s}票</div>`;
  numsVote.innerHTML = numsVoteHTML;
}

let cityValue = "";
let areaListHTML = `<option value="" class="city-option">請選擇</option>`;
// let townListHTML = "";
let townListHTML = ` <option value="" class="city-option">請選擇</option>`;
town.innerHTML = townListHTML;

// 取得選取縣市的值
area.addEventListener("change", (event) => {
  cityValue = event.target.value;
  changeArea();
});

town.addEventListener("change", (event) => {
  townValue = event.target.value;
  changeTown(townValue);
});

function areaList(data) {
  areaListHTML += `<option value=${data} class="city-option">${data}</option>`;
  area.innerHTML = areaListHTML;
}

function townList(data) {
  townListHTML += `<option value=${data} class="city-option">${data}</option>`;
  town.innerHTML = townListHTML;
}

// 進入頁面時，取得所有縣市列表
axios
  .get(CITY_URL)
  .then((response) => {
    const data = response.data;
    // console.log(data)

    data.forEach((item) => {
      cityName = item.CityName;
      areaList(cityName);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
//換地圖
const Green_D = document.getElementById("Green_dom");
const Orange_D = document.getElementById("Orange_dom");
const Blue_D = document.getElementById("Blue_dom");
const cardMap = document.getElementById("cardMap");
let Map_green = document.querySelector(".mapgreen");
var Map_blue = document.querySelector(".mapblue");
var Map_orange = document.querySelector(".maporange");

function changeMap(color) {
  if (color == "Green_dom") {
    Map_green.style = "z-index: 15";
    Map_blue.style = "z-index: -5";
    Map_orange.style = "z-index: -5";
    ChangeMapDIV(color);
  } else if (color == "Blue_dom") {
    Map_blue.style = "z-index: 15";
    Map_green.style = "z-index: -5";
    Map_orange.style = "z-index: -5";
    ChangeMapDIV(color);
  } else if (color == "Orange_dom") {
    Map_orange.style = "z-index: 15";
    Map_green.style = "z-index: -5";
    Map_blue.style = "z-index: -5";
    ChangeMapDIV(color);
  }
}
function ChangeMapDIV(divcolor) {
  if (divcolor == "Green_dom") {
    cardVote.innerHTML = "";
    cardVote.innerHTML = ` <!-- ↓地名+投票率↓ -->
    <div id="placeName">
      <h4>台灣</h4>
      <p>投票率74.9%</p>
    </div>
    <!-- ↓候選人名字+得票數↓ -->
    <div id="candidate">
      <div>
        <h5>辣小英</h5>
        <div id="imgSeal"></div>
      </div>
      <p>得票數8,170,231</p>
    </div>
    <!-- ↓那條%數↓ -->
    <div id="voteRate">
      <div class="cardRectangle"></div>
      <p>　　　　　　　57.1%　　　　　　</p>
      <p>　　　　　　38.6%　　　</p>
      <p>4.3%</p>
      <div class="cardRectangle"></div>
    </div>
    <!-- ↓長條圖塞這裡↓ -->
    <div id="barChart"></div>
    <!-- ↓開票狀態↓ -->
    <div id="voteStatus">
      <p>未開票</p>
    </div>
    <!-- ↓政黨顏色小科普↓ -->
    <div id="partyColor">
      <div id="Green_dom" onclick="changeMap(id)">
        <div class="partySquare" id="squareColor1"></div>
        <p>民進黨</p>
      </div>
      <div id="Blue_dom" onclick="changeMap(id)">
        <div class="partySquare" id="squareColor2"></div>
        <p>國民黨</p>
      </div>
      <div id="Orange_dom" onclick="changeMap(id)">
        <div class="partySquare" id="squareColor3"></div>
        <p>親民黨</p>
      </div>
    </div>
  </div>`;
  } else if (divcolor == "Blue_dom") {
    cardVote.innerHTML = "";
    cardVote.innerHTML = ` <!-- ↓地名+投票率↓ -->
    <div id="placeName">
      <h4>台灣</h4>
      <p>投票率74.9%</p>
    </div>
    <!-- ↓候選人名字+得票數↓ -->
    <div id="candidate">
      <div>
        <h5>韓國瑜</h5>
        <div id="imgSeal"></div>
      </div>
      <p>得票數8,170,231</p>
    </div>
    <!-- ↓那條%數↓ -->
    <div id="voteRate">
      <div class="cardRectangle"></div>
      <p>　　　　　　　57.1%　　　　　　</p>
      <p>　　　　　　38.6%　　　</p>
      <p>4.3%</p>
      <div class="cardRectangle"></div>
    </div>
    <!-- ↓長條圖塞這裡↓ -->
    <div id="barChart"></div>
    <!-- ↓開票狀態↓ -->
    <div id="voteStatus">
      <p>未開票</p>
    </div>
    <!-- ↓政黨顏色小科普↓ -->
    <div id="partyColor">
      <div id="Green_dom" onclick="changeMap(id)">
        <div class="partySquare" id="squareColor1"></div>
        <p>民進黨</p>
      </div>
      <div id="Blue_dom" onclick="changeMap(id)">
        <div class="partySquare" id="squareColor2"></div>
        <p>國民黨</p>
      </div>
      <div id="Orange_dom" onclick="changeMap(id)">
        <div class="partySquare" id="squareColor3"></div>
        <p>親民黨</p>
      </div>
    </div>
  </div>`;
  } else if (divcolor == "Orange_dom") {
    cardVote.innerHTML = "";
    cardVote.innerHTML = ` <!-- ↓地名+投票率↓ -->
    <div id="placeName">
      <h4>台灣</h4>
      <p>投票率74.9%</p>
    </div>
    <!-- ↓候選人名字+得票數↓ -->
    <div id="candidate">
      <div>
        <h5>宋楚瑜</h5>
        <div id="imgSeal"></div>
      </div>
      <p>得票數8,170,231</p>
    </div>
    <!-- ↓那條%數↓ -->
    <div id="voteRate">
      <div class="cardRectangle"></div>
      <p>　　　　　　　57.1%　　　　　　</p>
      <p>　　　　　　38.6%　　　</p>
      <p>4.3%</p>
      <div class="cardRectangle"></div>
    </div>
    <!-- ↓長條圖塞這裡↓ -->
    <div id="barChart"></div>
    <!-- ↓開票狀態↓ -->
    <div id="voteStatus">
      <p>未開票</p>
    </div>
    <!-- ↓政黨顏色小科普↓ -->
    <div id="partyColor">
      <div id="Green_dom" onclick="changeMap(id)">
        <div class="partySquare" id="squareColor1"></div>
        <p>民進黨</p>
      </div>
      <div id="Blue_dom" onclick="changeMap(id)">
        <div class="partySquare" id="squareColor2"></div>
        <p>國民黨</p>
      </div>
      <div id="Orange_dom" onclick="changeMap(id)">
        <div class="partySquare" id="squareColor3"></div>
        <p>親民黨</p>
      </div>
    </div>
  </div>`;
  }
}

// 渲染鄉鎮市區選單&顯示各區候選人票數
function changeArea() {
  townListHTML = `<option value="" class="city-option">請選擇</option>`;
  if (cityValue != "") {
    axios
      .get(CITY_URL)
      .then((response) => {
        const data = response.data;
        const cityData = data.find((city) => city.CityName === cityValue);
        console.log(cityData);
        if (cityData) {
          clear();
          const areas = cityData.AreaList;
          areas.forEach((item) => {
            const area = item.area;
            const songVote = item.song;
            const hanVote = item.han;
            const tsaiVote = item.tsai;
            // 去除值為undefined(Kay為total)
            if (area !== undefined) {
              townList(area);
              tsaiNumber(area, tsaiVote, hanVote, songVote);
            }
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

// 點選鄉鎮市區時，更新下方畫面
function changeTown(townValue) {
  if (townValue != "") {
    axios
      .get(CITY_URL)
      .then((response) => {
        const data = response.data;

        data.forEach((item) => {
          const areaArray = item.AreaList;
          const townData = areaArray.find((town) => town.area === townValue);
          clear();
          if (townData !== undefined) {
            console.log(townData.song);
            const songVote = townData.song;
            const hanVote = townData.han;
            const tsaiVote = townData.tsai;
            tsaiNumber(townValue, tsaiVote, hanVote, songVote);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
