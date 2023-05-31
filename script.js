let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return  v.json()
}).then((contests) => {
  console.log(contests)
  ihtml=""
  for(item in contests){
    console.log(contests[item])
    ihtml += `
       <div class="card" style="width: 20rem;">
      <div class="card-body">
        <h5 class="card-title"class="name"><i><b>${contests[item].name}</b></i></h5>
       <p>site : ${contests[item].site}
        <p class="p"><b>start at : ${contests[item].start_time}</b>
        <p class="p"><b>End at : ${contests[item].end_time}</b>
        <br><br>
        <a href='${contests[item].url}'><button class="button">CLICK TO VISIT WEBSITE</button></a>
      </div>
    </div>
      
      `
  }
  cardContainer.innerHTML = ihtml
})
