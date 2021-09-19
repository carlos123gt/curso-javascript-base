function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let autoNuevo = new auto('ford', 'ka', 2005);

autoNuevo

let autoNuevo2 = new auto('Chevrolet', 'aveo', 2007);

let autoNuevo3 = new auto('Toyota', 'corolla', 2007);

//METODOS RECORRIDOS DE ARRAY

let articles = [
    { nombre: "Bici", costo: 300 },
    { nombre: "Tv", costo: 400 },
    { nombre: "Libro", costo: 400 },
    { nombre: "Laptop", costo: 500},
    { nombre: "Cascos", costo: 4000 }
];

let articlesFiltered = articles.filter(function(article){
    return article.costo <= 500;
})

let nombreArticles = articles.map(function(article){
    return article.nombre;
})

let isContened = articles.find(function(article){
    return article.nombre === "Laptop"
})

articles.forEach(function(article){
    console.log(article.nombre)
})

let articlesPretty = articles.some(function(article){
    return article.costo <= 400
})

articlesPretty