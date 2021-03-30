function fetchCategories() {
    return fetch('http://localhost:3000/categories')
    .then(r => r.json())
    .then(json => console.log(json)) // do some DOM manipulation here
}