// czekam na wczytanie kodu HTML
document.addEventListener('DOMContentLoaded', init);

function init() {
    const formEl = document.querySelector('form');
    const ulEl = document.querySelector('ul');

    // sprawdzam, czy formularz został wyszukany i dopiero przypisuję nasłuchiwanie zdarzenia submit
    if (formEl) {
        formEl.addEventListener('submit', handleSubmit);
    }

    function handleSubmit(e) {
        // blokuję automatyczne wysłanie formularza
        e.preventDefault();

        const errors = [];
        
        const firstNameEl = e.target.elements.firstName;
        const lastNameEl = e.target.elements.lastName;
        const streetEl = e.target.elements.street;
        const houseNumberEl = e.target.elements.houseNumber;
        const flatNumberEl = e.target.elements.flatNumber;
        const zipEl = e.target.elements.zip;
        const cityEl = e.target.elements.city;
        const voivodeshipEl = e.target.elements.voivodeship;

        if(firstNameEl.value.length === 0) {
            errors.push('Dane w polu Imię są niepoprawne!');
        }

        if(lastNameEl.value.length === 0) {
            errors.push('Dane w polu Nazwisko są niepoprawne!');
        }

        if(streetEl.value.length === 0) {
            errors.push('Dane w polu Ulica są niepoprawne!');
        }

        if(houseNumberEl.value.length === 0 || Number.isNaN(houseNumberEl.value)) {
            errors.push('Dane w polu Numer budynku są niepoprawne!');
        }

        if(Number.isNaN(Number(flatNumberEl.value))) {
            errors.push('Dane w polu Numer mieszkania są niepoprawne!');
        }

        if(zipEl.value.length === 0 || !/^[0-9]{2}-[0-9]{3}$/.test(zipEl.value)) {
            errors.push('Dane w polu Kod pocztowy są niepoprawne!');
        }

        if(cityEl.value.length === 0) {
            errors.push('Dane w polu Miasto są niepoprawne!');
        }

        if(voivodeshipEl.value.length === 0) {
            errors.push('Dane w polu Województwo są niepoprawne!');
        }

        // czyszczę listę błędów
        ulEl.innerHTML = '';
        if (errors.length === 0) {
            alert('Dane zostały wypełnione prawidłowo!');
            
            // czyszczę pola po prawidłowym wypełnieniu formularza
            Array.from(formEl.elements).forEach(function(el) {
                el.value = ''
            })
        } else {
            errors.forEach(function (text) {
                const liEl = document.createElement('li');
                liEl.innerText = text;

                ulEl.appendChild(liEl);
            });
        }
    }
}
