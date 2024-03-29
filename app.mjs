function startApp() {
    const carrierPrefixes = {
        "0701": "airtel",
        // "07020": "smile",
        "07025": "mtn",
        "07026": "mtn",
        // "07027": "multi-links",
        // "07028": "starcomms",
        // "07029": "starcomms",
        "0703": "mtn",
        "0704": "mtn",
        "0705": "glo",
        "0706": "mtn",
        // "0707": "zoom-mobile",
        "0708": "airtel",
        // "0709": "multi-links",
        "0802": "airtel",
        "0803": "mtn",
        "0804": "mtel",
        "0805": "glo",
        "0806": "mtn",
        "0807": "glo",
        "0808": "airtel",
        "0809": "9mobile",
        "0810": "mtn",
        "0811": "glo",
        "0812": "airtel",
        "0813": "mtn",
        "0814": "mtn",
        "0815": "glo",
        "0816": "mtn",
        "0817": "9mobile",
        "0818": "9mobile",
        // "0819": "starcomms",
        "0909": "9mobile",
        "0908": "9mobile",
        "0901": "airtel",
        "0902": "airtel",
        "0903": "mtn",
        "0904": "airtel",
        "0905": "glo",
        "0906": "mtn",
        "0907": "airtel",
        "0915": "glo",
        "0913": "mtn",
        "0912": "airtel",
        "0916": "mtn",
    };
    const suggestionList = Object.keys(carrierPrefixes)

    let phoneInp = document.querySelector("input[type='tel']");
    let telLogo = document.getElementById("tel-logo");
    let carriers = document.getElementsByClassName("carrier")

    phoneInp.addEventListener("input", handleLogo)
    


    function handleLogo(e) {
        let el = e.currentTarget

        // Unhighlight previously highlighted logo 
        for (let carrier of carriers) {
            carrier.style.opacity = 0.5
        }

        telLogo.replaceChildren()

        if (el.value.length >= 4) {
            Object.entries(carrierPrefixes).forEach(([key, value]) => {
                if (el.value.startsWith(key)) {
                    let logo = document.getElementById(`carrier--${value}`)

                    // Highlight the right logo
                    logo.style.opacity = 1

                    const img = document.createElement("img")
                    img.src = `images/logos/${value}.png`
                    telLogo.appendChild(img)

                    return
                }
            })

        }

    }

    // Autocomplete feature
    let suggestions = document.getElementById("suggestions");

    phoneInp.addEventListener("input", changeAutoComplete);
    suggestions.addEventListener("click", selectItem);

    function changeAutoComplete(e) {
        // Clear previous suggestions
        suggestions.innerHTML = ''

        // Grab the value of input
        const el = e.currentTarget;

        // compare with list of values and filter
        const filteredList = suggestionList.filter((x) => { return x.startsWith(el.value) })

        // display list of values in alphabetical order
        filteredList.forEach((x) => {
            // Create a new 'li' element
            const li = document.createElement("li")
            li.innerText = x

            // Add new 'li' to suggestions
            suggestions.appendChild(li)

        })
    }


    function selectItem({ target }) {
        // Set the input value to the suggestion
        phoneInp.value = target.innerText

        // Clear all suggestions
        suggestions.innerHTML = ""

        // Put the input element back in focus
        phoneInp.focus()
    }

    

};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //
