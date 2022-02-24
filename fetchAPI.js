let id = '10000';
let api_url = 'http://ns2.ph.mahidol.ac.th/phonebook/xml/staff-json.php?id=' + id;

fetch(api_url, {
    method: 'GET'
})
.then(function(res){
    console.log(res)
    return res.json()
})
.then(function(data){
    console.log(data)
    data.map((item, index) => {
        document.getElementById('index').innerHTML = 'Index is <strong>' + index + '</strong>'; 
        document.getElementById('name').innerHTML = '<strong>' + item.name + '</strong>';
        document.getElementById('telin').innerHTML = item.telin;
        document.getElementById('imgUrl').src = item.imageUrl;
    })
})
.catch((error) => console.error('ERROR'));