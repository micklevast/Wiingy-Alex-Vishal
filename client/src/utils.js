//convert timestamp to date
export const dateConvertor = (timestamp) => {

    const fullDate = new Date(timestamp)
    const year = fullDate.getFullYear()
    const month = ("0" + (fullDate.getMonth()+1)).slice(-2)
    const day = ("0" + fullDate.getDate()).slice(-2)
    const pastDate = `${month}/${day}/${year}`

    //convert to days
    const today = new Date()

    const pastMonth = Number(pastDate.slice(0,2))-1
    const pastDay = Number(pastDate.slice(3,5))
    const pastYear = Number(pastDate.slice(6,10))
    const past = new Date(pastYear, pastMonth, pastDay)

    //calculate millisecond to day difference
    let difference = today.getTime() - past.getTime()
    difference = difference/(24*60*60*1000)
    
    if (difference < 1){
        return `today`
    }else if (difference < 31){
        return `${parseInt(difference)} days ago`
    } else if (difference < 365){
        return `${parseInt(difference/30)} months ago`
    } else if (difference > 365){
        return `${parseInt(difference/365)} years ago`
    }
    
}

export const api_url = "https://project-2-api.herokuapp.com"
export const api_key = "?api_key=aa05f080-f144-46ca-9d40-4da1dca490e0"

export default dateConvertor