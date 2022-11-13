let btn = document.querySelector("#btn")
let newDeck = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`


btn.addEventListener("click", async function(){

    let promise = await Promise.all([
        $.getJSON(`${newDeck}`)
    ])

    console.log(promise)

    let url = `https://deckofcardsapi.com/api/deck/${promise[0].deck_id}/draw/?count=1`

    let newpromise = await Promise.all([
        $.getJSON(`${url}`)
    ])

    console.log(newpromise)

    img = document.getElementById("img")
    img.setAttribute("src", newpromise[0].cards[0].image)

})
// promise
// .then(c1 =>{console.log(c1.data.deck_id);
//     let card = `https://deckofcardsapi.com/api/deck/${c1.data.deck_id}/draw/?count=1`
//     return axios.get(card)
// })

// .then(c1 =>{console.log(c1.data.cards[0].image)
//    img = document.getElementById("img")
//    img.setAttribute("src", c1.data.cards[0].image)
// })

// .catch(err => {console.log(err)})