form = document.querySelector("#form")
input = document.querySelector("#favnum")
const $list = $("#list")

form.addEventListener("submit", async function(e){
    e.preventDefault()
    $list.empty();

    let url = `http://numbersapi.com/${input.value}?json`
    let promise = await Promise.all([
        $.getJSON(`${url}`),
        $.getJSON(`${url}`),
        $.getJSON(`${url}`),
        $.getJSON(`${url}`)
    ])

    for(let i=0; i < promise.length; i++){
        const $item = $(`<li>${promise[i].text}</li>`);
        $list.append($item);
    }

    // promise
    // .then(f1 =>{console.log(f1.data.text);
    //     l1.append(f1.data.text)
    //     return axios.get(`${url}`)
    // })
    // .then(f2 => {console.log(f2.data.text);
    //     l2.append(f2.data.text)
    //     return axios.get(`${url}`);
    // })
    // .then(f3 => {console.log(f3.data.text);
    //     l3.append(f3.data.text)
    //     return axios.get(`${url}`);
    // })
    // .then(f4 => {console.log(f4.data.text)
    //     l4.append(f4.data.text)
    //     return axios.get(`${url}`);
    // })
})