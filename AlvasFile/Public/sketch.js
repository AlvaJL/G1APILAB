getData();

async function getData(){
  const res = await fetch('/api/Plants');
  const myData = await res.json();
  console.log(myData);

  showDataOnPage(myData)

}

function showDataOnPage(data){
  const dataDiv= document.getElementById("showData");
  for (const plant of data.data) {
    console.log(plant.common_name);
    const plantDiv = document.createElement("div").appendChild(document.createTextNode(plant.common_name));
    dataDiv.appendChild(plantDiv);
  }


 // dataDiv.innerHTML= data.data[0].common_name;

}


/*const data = {
  status: 'success',
  data: 'Hello friend!',
}
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}
fetch('/api', options)
.then(response => response.json())
.then(data => console.log(data));*/