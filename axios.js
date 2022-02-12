const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://ns2.ph.mahidol.ac.th/phonebook/xml/staff-json.php', {
    params: {
        id: 10000
    }
})
    .then(function (response) {
        // handle success
        //console.log(response.data);
        response.data.map((item, index) =>{
            console.log(item.name);
            console.log(item.job.position);
            console.log(item.email);
            console.log(item.telin);
        })
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });