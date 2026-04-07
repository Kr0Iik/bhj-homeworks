let itemsContainer = document.getElementById('items');
let loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        loader.classList.remove('loader_active');

        let data = JSON.parse(xhr.responseText);
        let valutes = data.response.Valute;

        itemsContainer.innerHTML = '';

        for (const key in valutes) {
            let currency = valutes[key];
            let itemHtml = `
                <div class="item">
                    <div class="item__code">${currency.CharCode}</div>
                    <div class="item__value">${currency.Value}</div>
                    <div class="item__currency">руб.</div>
                </div>
            `;
            
            itemsContainer.insertAdjacentHTML('beforeend', itemHtml);
        }
    }
};
xhr.send();
