const container = document.querySelector('.container'); //отримуємо контейнер


fetch('./cards.json') //шлях до списку карток, отримуємо проміс
    .then(response => response.json()) //преобразуємо формат json у JS

      //перебираємо отриманий об'єкт
      .then((cards) => {
        container.innerHTML = cards
          .map((card) => {
            return `
        <div class="card">
            <div class="card-front"></div>
            <div class="card-back" id='${card.id}' >
                
                    <img class="svg" src="${card.rang}" alt="some card"/>
                
            </div>
        </div>`;
          })
          .join(""); //додаємо до html
      })
    .catch((err) => console.log(err)); //відловлюєио помилки
      
    console.log(response.json());