//Verifica se foram informados os nomes e os códigos do produto

function authenticateProduct(idName, idBarCode, idquantity){
    let name = document.getElementById(idName).value;
    let barcode = document.getElementById(idBarCode).value;
    let qtity = document.getElementById(idquantity).value;

    if (name == ""){
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
       
    }
    else if (barcode == ""){
        alert("Código do produto não pode estar em branco. Favor preenchê-lo");
       
    }
    else registerProduct(name, barcode, parseInte(qtity));
}

//Registrar produto
function registerProduct(product,code,qtity){
    let newProduct = {name: product, barcode: code, quantity: qtity};

    if(typeof(Storage) !== "undefined"){
        let products = localStorage.getItem("products");
    }
    else if ( products == null)
    {
        products = [];
    } else {
        products = JSON.parse(products);
        products.push(newProduct);
        localStorage.setItem("products", JSON.stringify(products))
        alert("Foram cadastradas com sucesso "+qtity+" unidades do produto "+product+"!");
        updateTotalInventory("totalInventory");
        location.reload();
    }

}

function updateTotalInventory(idCampo){
    localStorage.setItem("totalInventory", ++document.getElementById(idCampo).innerHTML)
}