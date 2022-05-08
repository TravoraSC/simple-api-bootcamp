  let url = 'https://zoo-animal-api.herokuapp.com/animals/rand'

  fetch (url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('h1').innerText = data.name
    document.querySelector('.latinName').innerText = data.latin_name
    document.querySelector('img').src = data.image_link
    document.querySelector('.animalType').innerText = data.animal_type
    document.querySelector('.lifespan').innerText = 'Lifespan: ' + data.lifespan
    document.querySelector('.geoRange').innerText = 'Georange: ' + data.geo_range
    document.querySelector('.habitat').innerText = 'Habitat: ' + data.habitat
    document.querySelector('.lengthMin').innerText = 'Length: ' + data.length_min
    document.querySelector('.lengthMax').innerText = data.length_max
    document.querySelector('.activeTime').innerText = 'Active Time: ' + data.active_time
    document.querySelector('.diet').innerText = 'Diet: ' + data.diet
    document.querySelector('.weightMin').innerText = 'Weight: ' + data.weight_min
    document.querySelector('.weightMax').innerText = data.weight_max
  })
  .catch(err => {
      console.log(`error ${err}`)
  });