document.addEventListener('DOMContentLoaded', function () {

    let formData = {};
    const form = document.querySelector('form');
    const LS = localStorage;

    // получить данные из input

    form.addEventListener('input', function (event) {
        formData[event.target.name] = event.target.value;
        console.log(formData);
        LS.setItem('formData', JSON.stringify(formData));

    })

    // восстановить данные

    if (LS.getItem('formData')) {
        formData = JSON.parse(LS.getItem('formData'));
        console.log(formData);
        console.log(form.elements);
        //form.elements[name];

        for (let key in formData) {
            console.log(form.elements[key].type);
            console.log(formData[key]);
            if (form.elements[key].type === 'checkbox' && formData[key] === 'on') {
                form.elements[key].checked = true;
            }
            else {
                form.elements[key].value = formData[key];
            }
        }
    }
});

