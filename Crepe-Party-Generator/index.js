let IngredientsObj = [
    {
        name: "farine",
        quantite: 63,
        unite: "grammes",
    },
    {
        name: "oeuf",
        quantite: 1,
    },
    {
        name: "lait",
        quantite: 0.2,
        unite: "Litre"
    },
    {
        name: "sucre",
        quantite: 0.5,
        unite: "cuillière à soupe",

    },
    {
        name: "beurre",
        quantite: 13,
        unite: "grammes",
    }
];

// Vue

let ingredients = document.querySelector('.Ingredients')

// let form = document.querySelector('#form')
let generator = document.querySelector("#btn")
let input = document.querySelector('input')
let div = document.getElementsByClassName("farine")


// let value = document.getElementById("input").value
//
// value.addEventListener("change", () => {
//     if (value === 0) {
//         alert("Veuillez renseigner au moins 1 invité")
//     }
//     return value
//
// })
makeCrepe = () => {
    generator.addEventListener("click", () => {

        let value = document.getElementById("input").value



        farineValue = IngredientsObj[0].quantite * value
        oeufValue = IngredientsObj[1].quantite * value
        laitValue = (IngredientsObj[2].quantite * value).toFixed(2)
        sucreValue = IngredientsObj[3].quantite * value
        beurreValue = IngredientsObj[4].quantite * value
        console.log(farineValue)


        // ******************* Farine

        let liQuantityFarine = farineValue
        let liNameFarine = IngredientsObj[0].name
        let soldByFarine = 250
        let achatFarine = Math.ceil(farineValue / soldByFarine)


        document.getElementById("quantityFarine").innerHTML = `Il vous faudra ${liQuantityFarine} ${IngredientsObj[0].unite} de ${liNameFarine}`

        document.getElementById("nameFarine").innerHTML = ("Il faut acheter " + achatFarine + " pack de " + soldByFarine + " grammes de farine")


        // *********************Oeuf
        soldByOeuf = 6
        let liQuantityOeuf = oeufValue
        let liNameOeuf = IngredientsObj[1].name
        document.getElementById("quantityOeuf").innerHTML = `Il vous faudra ${liQuantityOeuf}  ${liNameOeuf}`

        let achatOeuf = Math.ceil(oeufValue / soldByOeuf);
        document.getElementById("nameOeuf").innerHTML = ("Il faut acheter " + achatOeuf + " pack de " + soldByOeuf + " oeufs")


        // ********** Lait
        let soldbyLait = 6
        let liQuantityLait = laitValue
        let liLaitName = IngredientsObj[2].name
        let achatLait = Math.ceil(laitValue / soldbyLait)
        document.getElementById("quantityLait").innerHTML = `Il vous faudra ${liQuantityLait} ${IngredientsObj[2].unite} de ${liNameFarine}`
        document.getElementById("nameLait").innerHTML = ("Il faut acheter " + achatLait + " pack de " + soldbyLait + " bouteilles de lait")

        //     *********** Sucre
        let liSucreQuantity = sucreValue
        let soldBySucre = 250
        let achatSucre = Math.ceil(sucreValue / soldBySucre)
        let liSucreName = IngredientsObj[3].name
        document.getElementById("quantitySucre").innerHTML = `Il vous faudra ${liSucreQuantity} ${IngredientsObj[3].unite} de ${liSucreName}`
        document.getElementById("nameSucre").innerHTML = ("Il faut acheter " + achatSucre + " pack de " + soldBySucre + " grammes de sucre")


        //     ********** Beurre
        let liBeurreQuantity = beurreValue
        let liBeurreName = IngredientsObj[4].name
        let soldBybeurre = 250
        let achatBeurre = Math.ceil(beurreValue / soldBybeurre)
        document.getElementById("quantityBeurre").innerHTML = `Il vous faudra ${liBeurreQuantity} ${IngredientsObj[4].unite} de ${liBeurreName}`
        document.getElementById("nameBeurre").innerHTML = ("Il faut acheter " + achatBeurre + " plaquette de " + soldBybeurre + "  grammes de beurre")
    })

}


//
// console.log(IngredientsObj)

// console.log(
//     IngredientsObj[0].quantite * nombreinvite + " " + IngredientsObj[0].unite + " de " + IngredientsObj[0].name,
//     IngredientsObj[1].quantite * nombreinvite + " " + IngredientsObj[1].name,
//     (IngredientsObj[2].quantite * nombreinvite).toFixed(2) + " " + IngredientsObj[2].unite + " de " + IngredientsObj[2].name,
//     IngredientsObj[3].quantite * nombreinvite + " " + IngredientsObj[3].unite + " de " + IngredientsObj[3].name,
//     IngredientsObj[4].quantite * nombreinvite + " " + IngredientsObj[4].unite + " de " + IngredientsObj[4].name
// );
//
//
// let farine =  "Il vous faudra " + IngredientsObj[0].quantite * nombreinvite + " gramme de farine.";
// let oeuf =  "Il vous faudra " + IngredientsObj[1].quantite * nombreinvite + " oeuf.";
// let lait =  "Il vous faudra " + (IngredientsObj[2].quantite * nombreinvite).toFixed(2) + " Litre de lait.";
// let sucre =  "Il vous faudra " + IngredientsObj[3].quantite * nombreinvite + " cuillière à soupe de sucre.";
// let beurre =  "Il vous faudra " + IngredientsObj[4].quantite * nombreinvite + " gramme de beurre.";
// recette = farine + oeuf + lait + sucre + beurre;
// console.log(recette);

