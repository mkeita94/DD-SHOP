class Item{
    constructor(image, title, description, price){
      this.image = image;
      this.title = title;
      this.description = description;
      this.price = price;
    }
    // Update the item price
    updatePrice(newPrice){
      this.price = newPrice;
    }
    // Update the title of the item
    updateTitle(newTitle){
      this.title = newTitle;
    }
    // Update the description of the item
    updateTitle(newDescription){
      this.description = newDescription;
    }
}
  // Create item object for each product
  const item1 = new Item("/Images/deo1.jpg", "AXE", "DEOD0RANT",50000);
  const item2 = new Item("/Images/deo2.jpg", "AXE", "DEOD0RANT",50000);
  const item3 = new Item("/Images/deo3.jpg", "RIGHT GUARD", "STICK",50000);
  const item4 = new Item("/Images/deo4.jpg", "DOVE", "DEODORANT",50000);
  const item5 = new Item("/Images/deo5.jpg", "DOVE", "DEODORANT",50000);
  const item6 = new Item("/Images/food2.jpg", "BREAKFAST", "BISCUIT",50000);
  const item7 = new Item("/Images/food3.jpg", "BREAKFAST", "BISCUIT",50000);
  const item8 = new Item("/Images/food4.jpg", "BREAKFAST", "BISCUIT",50000);
  const item9 = new Item("/Images/food5.jpg", "BREAKFAST", "BISCUIT",50000);
  const item10 = new Item("/Images/food6.jpg", "BREAKFAST", "BISCUIT",50000);
  const item11 = new Item("/Images/food7.jpg", "EUROPEAN COOKIES", "BISCUIT",50000);
  const item12 = new Item("/Images/food8.jpg", "SPAGHETTI", "REGANO",50000);
  const item13 = new Item("/Images/food9.jpg", "STACKERZ", "CHIPS",50000);
  const item14 = new Item("/Images/food10.jpg", "FRUTESSA", "CONFITURE",50000);
  

  const content = `<div></div>`
  /* This function add a tag and its content 
  to the tag main in the dom*/
  function addTag(tag, content) {
      const newTag = document.createElement(tag);
      const mainElem = document.querySelector("main");
      mainElem.append(newTag);
      newTag.innerHTML = content;
  }
  /**This function add a new item to the dom */
    function addItem(image, title, description, price, tag){
      const divElm1 = document.createElement("div")
      divElm1.classList.add("list-hommes-item")
      const divElm2 = document.createElement("div")
      divElm2.classList.add("hommes-item")
      const newImg = document.createElement("img")
      newImg.src = `${image}`
      const divElm3 = document.createElement("div")
      divElm3.classList.add("card-body")
      const hElm = document.createElement("h5")
      hElm.classList.add("card-title")
      hElm.innerHTML = `${title}`
      const pElm = document.createElement("p")
      pElm.classList.add("card-text")
      pElm.innerHTML = `${description}`
      const spanElm = document.createElement("span")
      spanElm.innerHTML = `${price} GNF`
      divElm3.append(hElm)
      divElm3.append(pElm)
      divElm3.append(spanElm)
      divElm2.append(newImg);
      divElm2.append(divElm3);
      divElm1.append(divElm2);

      const mainContener = document.querySelector(tag);
      mainContener.append(divElm1);
    }

  // list of items
  const listOfItems = [item1, item2, item3, item4, item5, item6, item7, item8, 
    item9, item10, item11, item12, item13, item14]
 
// String template for the content
for(var i = 0; i < listOfItems.length; i++){
  addItem(listOfItems[i].image, listOfItems[i].title, listOfItems[i].description,
     listOfItems[i].price, "main")
}

addTag("main", content)
document.body.style.backgroundColor = "white";
    