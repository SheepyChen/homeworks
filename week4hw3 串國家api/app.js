const form = document.querySelector('#searchform');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.dir(form);
    const searchTerm = form.elements.query.value;
    try {
        const res = await axios.get(` https://restcountries.com/v2/name/${searchTerm}`)
        // console.log(res.data);
        const intro0 = document.createElement('h2');
        intro0.innerText = "國家：" + res.data[0].name;
        const intro1 = document.createElement('h3');
        intro1.innerText = "首都：" + res.data[0].capital;
        const intro2 = document.createElement('h3');
        intro2.innerText = "貨幣：" + res.data[0].cioc;
        const intro3 = document.createElement('h3');
        intro3.innerText = "國碼：" + res.data[0].callingCodes;

        // intro.innerText = "國碼：" + res.data[0].callingcodes;
        document.body.append(intro0);
        document.body.append(intro1);
        document.body.append(intro2);
        document.body.append(intro3);
    }
    catch (e) {
        console.log(e);
        alert("找不到國家資訊");
    }


})
// const makeresult = () => {
//     for (let result of allshows) {
//         if (result.show.image) {
//             const img = document.createElement('img');
//             img.src = result.show.image.medium;
//             document.body.append(img);
//         }
//     }
// }
