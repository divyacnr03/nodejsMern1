const { default: Axios } = require('axios');
const axios = require('axios');



(async function invoke() {
    // axios.get('http://localhost:9000/users')
    //     .then(function (response) { console.log(response.data) })
    //     .catch(function (err) { console.log(err) })

    // try{
    //     const response = await axios.get('http://localhost:9000/dfhghfkgjhfdjk');

    //     console.log(response.data)
    // } catch(err) {
    //     console.log(err.message)

    // }


        const response = await axios.get('http://localhost:9000/dsfjdf');
        if(response.status != '200'){
            return;
        } else {
            console.log(response.data)

        }

    

    console.log("this will get executed at the last")
    
})();