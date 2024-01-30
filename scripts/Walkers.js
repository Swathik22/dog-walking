import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (theClickEvent)=>{
        const whatWeClickedOn=theClickEvent.target
        window.alert(`This walker works in ${whatWeClickedOn.dataset.city}`)
    }
)


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                            data-city="${walker.city}">
                        ${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML;
}

