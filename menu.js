const menu =[
    {
        id:1,
        tittle:"buttermilk Pancakes",
        price: 15.99,
        category:"all",
        img:'./cake1.jpg',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae libero maiores totam non incidunt?",
    },
    {
        id:2,
        tittle:"buttermilk Pancakes",
        price: 15.99,
        category:"breakfast",
        img:'./cake2.jpg',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae libero maiores totam non incidunt?",
    },
    {
        id:3,
        tittle:"buttermilk Pancakes",
        price: 15.99,
        category:"lunch",
        img:'./cake3.jpg',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae libero maiores totam non incidunt?",
    },
    {
        id:4,
        tittle:"buttermilk Pancakes",
        category:"all",
        price: 15.99,
        img:'./cake1.jpg',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae libero maiores totam non incidunt?",
    },
    {
        id:5,
        tittle:"buttermilk Pancakes",
        price: 15.99,
        category:"shakes",
        img:'./cake4.jpg',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae libero maiores totam non incidunt?",
    },
    {
        id:6,
        tittle:"buttermilk Pancakes",
        category:"all",
        price: 15.99,
        img:'./cake2.jpg',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae libero maiores totam non incidunt?",
    },
    {
        id:7,
        tittle:"buttermilk Pancakes",
        price: 15.99,
        category:"breakfast",
        img:'./cake5.jpg',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae libero maiores totam non incidunt?",
    },
    {
        id:8,
        tittle:"buttermilk Pancakes",
        price: 15.99,
        category:"breakfast",
        img:'./cake6.jpg',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae libero maiores totam non incidunt?",
    },
    {
        id:9,
        tittle:"buttermilk Pancakes",
        price: 15.99,
        category:"food",
        img:'./cake6.jpg',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae libero maiores totam non incidunt?",
    },
    
]

const menuContainer = document.querySelector(".menuContainer");

const menuBtn = document.querySelector('.menubtn')

window.addEventListener("DOMContentLoaded",function(item){
    displayMenuItems(menu)
    displaybtn()
 
   
})



function displayMenuItems(menuItem){
    let displayMenu = menuItem.map(function(item){
        // console.log(item)
        return `<div class="menuItem">
        <img src=${item.img} alt=${item.tittle}>
        <div class="box">
            <header>
                <h4 class=${item.tittle}>Buttermilk Pancakes</h4>
                <h4 class=${item.price} style="color: gold;">$19.99</h4>
                
            </header>
            <p>${item.desc}</p>
        </div>
    </div>
  
</div>`
    });
    displayMenu = displayMenu.join("");
    console.log(displayMenu);
    menuContainer.innerHTML = displayMenu;
    
}
function displaybtn(){
    const categories = menu.reduce(function(values,item){
        if (!values.includes(item.category)) {
            values.push(item.category);
                
            }
            return values;
        },['all'])
       const categoriesBtn = categories.map(function(category){
        return ` <button class="fliter-btn" type="button" data-id =${category}>${category}</button>`
       })
       .join("");
       menuBtn.innerHTML = categoriesBtn
       const btn = document.querySelectorAll(".fliter-btn")
       btn.forEach(function (btns){
        btns.addEventListener("click",function(e){
         const category = e.currentTarget.dataset.id;
         const menuCategory = menu.filter(function(menuItem){
             if (menuItem.category === category) {
                 return menuItem;
                 
             }
             console.log(menuItem.category);
            
         })
         // console.log(menuCategory)
         if (category === 'all') {
             displayMenuItems(menu)
             
         }
         else{
             displayMenuItems(menuCategory)
         }
     
        })
     
     })
    
}