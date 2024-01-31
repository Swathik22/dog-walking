import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener("click",(cityClickEvent)=>{
    const cityElement=cityClickEvent.target;
    if(cityElement.dataset.type=="city")
    {
        window.alert(`${cityElement.dataset.walkername} is servicing this city`)
    }
})


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `<li data-type="city" data-walkername="${walker.name}">${walker.city}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

