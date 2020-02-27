const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) =>{
    
    try{
        const dataOverall = await fetchData(url_api)
        const character = await fetchData(`${API}${dataOverall.results[0].id}`)
        const dimension = await fetchData(character.origin.url)

        console.log(dataOverall.info.count)
        console.log(character.name)
        console.log(dimension.dimension)

    }catch (err){
        console.error(err)
    }
}

anotherFunction(API)