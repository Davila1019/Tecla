const itemContainer = document.querySelector("#items")

    async function getItems(){
        let url = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1747"
        let res = await fetch(url);
        const data = await res.json();
        var item_M = data['results'];
        console.log(item_M);
        mostrarItems(item_M);
    }
    function mostrarItems(item_M){  
        for (let i= 0; i < item_M.length; i++) {
            //construir carrito
            
            //Imagen
            const img = document.createElement('img');
            img.src = item_M[i].thumbnail;
            img.width = "150"
            img.height = "150"
            //Titulos
            const h2 = document.createElement('h2')
            h2.textContent = "$" + item_M[i].price
            //Precio
            const h3 = document.createElement('h3');
            h3.textContent = item_M[i].title;
            //botones
            const btn_view = document.createElement('input');
            const btn_addtoCar = document.createElement('input');
            //Atributos de botones
            btn_view.setAttribute('type','button');
            btn_view.setAttribute('class','btn btn-outline-primary');
            btn_view.setAttribute('value','Ver producto');
            btn_addtoCar.setAttribute('type','button');
            btn_addtoCar.setAttribute('class','btn btn-outline-success');
            btn_addtoCar.setAttribute('value','Agregar producto');
            
            //Div
            const div = document.createElement('div');
            div.setAttribute('class','col-4');
            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(h2);
            div.appendChild(btn_addtoCar);
            div.appendChild(btn_view);
            //agregar item
            itemContainer.appendChild(div);
            //btn_addtoCar.setAttribute("onclick", car.addProduct(item_M[i]));
        }
        
    }

getItems()

class CarShop{

    constructor(nombre){
        this.nombre =nombre;
        this.articles =[];
        this.total = 0;
        this.pagado = false;
    }

    addProduct(article){
        this.articles.push(article);
        alert("Articulo agregado :) !")
        
    }

    deleteProduct(article){
        var removeItemFromArr = ( article ) => {
            var i = this.articles.indexOf( article );
            i !== -1 && this.articles.splice( i, 1 );
        };
    }

    getTotal(){
        var total = 0;
        for (let i = 0; i < this.articles.length; i++) {
            const articlesInCart = this.articles.array[i];
            var total =+ articlesInCart[i];
        }
        this.total = total;
    }

}

car = new CarShop();