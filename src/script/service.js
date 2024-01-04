const contain = document.querySelector(".contain")
const dadosJson = "./src/dados.json";
const h1 = document.querySelector("h1")

const arr = []

const loadingJson = (dado) => {
  fetch(dado)
    .then((resp) => resp.json())
    .then((json) => {
        const arr = json.workouts
        arr.reverse()
        arr.map((todo) => {
            h1.innerHTML = `Meta ${arr.length} / 200`
            contain.innerHTML += `
            <div class="box">
                <data class="data">${todo.date}</data>
                <h2>Training - ${todo.training}</h2>
                <span>Training location - ${todo.place}</span>
                <p>Energy spent - ${todo.energy}%</p>
                <p class="description">${todo.description}</p>
            </div>
                `
        })
    });
};

loadingJson(dadosJson);
