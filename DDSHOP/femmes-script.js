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
  const item1 = new Item("/Images/bag2.jpg", "NAUTICA", "MAKEUP BAG",150000);
  const item2 = new Item("/Images/bag3.jpg", "NAUTICA", "MAKEUP BAG",150000);
  const item3 = new Item("/Images/bag4.jpg", "NAUTICA", "MAKEUP BAG",150000);
  const item4 = new Item("/Images/bag5.jpg", "NAUTICA", "MAKEUP BAG",150000);
  const item5 = new Item("/Images/bag6.jpg", "NAUTICA","MAKEUP BAG",150000);
  const item6 = new Item("/Images/beauty1.jpg", "BATH & BODY", "PARFUM",150000);
  const item7 = new Item("/Images/beauty2.jpg", "BATH & BODY", "PARFUM",150000);
  const item8 = new Item("/Images/beauty3.jpg", "BATH & BODY", "PARFUM",150000);
  const item9 = new Item("/Images/beauty4.jpg", "BATH & BODY", "PARFUM",150000);
  const item10 = new Item("/Images/beauty5.jpg", "BATH & BODY", "PARFUM",150000);
  const item11 = new Item("/Images/beauty6.jpg", "BATH & BODY", "PARFUM",150000);
  const item12 = new Item("/Images/lipstick1.jpg", "DITCH PLAIN", "LIPSTICK",100000);
  const item13 = new Item("/Images/lipstick2.jpg", "THE PERFECT NUDE", "LIPSTICK",100000);
  const item14 = new Item("/Images/lipstick3.jpg", "BEAUTY CONCEPTS", "LIPSTICK",100000);
  const item15 = new Item("/Images/lipstick4.jpg", "MATTE LIPSTICK", "LIPSTICK",100000);
  const item16 = new Item("/Images/lipstick5.jpg", "ABSOLUTE", "LIPSTICK",100000);
  const item17 = new Item("/Images/lipstick6.jpg", "ELLEN TRACY", "LIPSTICK",100000);
  const item18 = new Item("/Images/makeup1.jpg", "ASSORTED", "MAKEUP",100000);
  const item19 = new Item("/Images/makeup2.jpg", "ASSORTED", "MAKEUP",100000);
  const item20 = new Item("/Images/makeup3.jpg", "ASSORTED", "MAKEUP",100000);
  const item21 = new Item("/Images/makeup4.jpg", "ASSORTED", "MAKEUP",100000);
  const item22 = new Item("/Images/makeup5.jpg", "ASSORTED", "MAKEUP",100000);
  const item23 = new Item("/Images/robe1.jpg", "US POLO", "SKIRT",400000);
  const item24 = new Item("/Images/robe2.jpg", "US POLO", "SKIRT",400000);
  const item25 = new Item("/Images/robe3.jpg", "US POLO", "SKIRT",400000);
  const item26 = new Item("/Images/robe4.jpg", "US POLO", "SKIRT",400000);
  const item27 = new Item("/Images/robe5.jpg", "US POLO", "SKIRT",400000);

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
  const listOfItems = [item1, item2, item3, item4, item5, item6, item7,item8,item9,
    item10, item11,item12, item13, item14, item15, item16, item17, item18, item19,
    item20, item21, item22, item23, item24, item25, item26, item27]
 
// String template for the content
for(var i = 0; i < listOfItems.length; i++){
  addItem(listOfItems[i].image, listOfItems[i].title, listOfItems[i].description,
     listOfItems[i].price, "main")
}

addTag("main", content)
document.body.style.backgroundColor = "white";
    