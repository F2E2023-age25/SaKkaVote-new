const CITY_URL = "/area_vote.json";

const area = document.getElementById("area");
const town = document.getElementById("town");

const data = JSON.parse(request.responseText);
let option;
for (let i = 0; i < data.length; i++) {
  option = area.createElement("option");
  option.text = data[i].CityName;
  dropdown.add(option);
}
