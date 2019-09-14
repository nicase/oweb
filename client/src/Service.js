import axios from 'axios'
const url = '/api/'

class Service {
    //Peticions a la api
    static async makeGet() {
        await axios.get(url).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
}

export default Service