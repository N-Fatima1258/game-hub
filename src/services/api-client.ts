
import axios from 'axios'

// axios.create to create axios instance with custom configuration ,,, in that config , we will include api key
// with this config, this key will be included in the query string of every http request
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'facf5e3cd18448d88c011ebb8a7457a3'
    }
})

// we will send request to the game endpoint