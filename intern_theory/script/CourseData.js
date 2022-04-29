
function appendOnlineData(OnlineData,main){

    OnlineData.forEach(function(el){

    let div=document.createElement("div")
    // div.setAttribute("class","divmain")

    let div1=document.createElement("div")
    div1.setAttribute("class","div1")

    let div2=document.createElement("div")
    div2.setAttribute("class","div2")

    let div3=document.createElement("div")
    div3.setAttribute("class","div3")

    let div4=document.createElement("div")
    div4.setAttribute("class","div4")

    

    let image=document.createElement("img")
    image.src=el.images
    image.setAttribute("class","images")

    let title=document.createElement("h4")
    title.innerHTML=el.title

    let description=document.createElement("p")
    description.innerHTML=el.description

    div1.append(title,description)

    let line=document.createElement("p")
    line.innerHTML="----------------------------------------"

    let emi=document.createElement("p")
    emi.innerHTML=el.emi+ " "+`<i class="fa fa-question-circle-o" aria-hidden="true"></i>`
    emi.setAttribute("class","emi")

    let know=document.createElement("button")
    know.innerHTML=el.know
    know.setAttribute("class","know")

    // let strikethrough_Price=document.createElement("p")
    // strikethrough_Price.innerHTML=el.strikethrough_Price
    // strikethrough_Price.setAttribute("class","strikethrough_Price")

    let Price=document.createElement("p")
    Price.innerHTML= "₹" + " " + el.Price;
    Price.setAttribute("class","Price")
    // div2.append(strikethrough_Price,Price)
    div2.append(Price)
   
    let btn=document.createElement("button")
    btn.innerHTML="ADD TO CART"
    btn.setAttribute("class","btn")
  
    div4.append(know,btn)
    div3.append(div2,emi)
    div.append(image,div1,line,div3,div4);

    main.append(div)
    })
}

function appendclassroomData(classroomData,train_main){

    classroomData.forEach(function(el){

        let div=document.createElement("div")
        // div.setAttribute("class","divmain")
    
        let div1=document.createElement("div")
        div1.setAttribute("class","div1")
    
        let div2=document.createElement("div")
        div2.setAttribute("class","div2")
    
        let div3=document.createElement("div")
        div3.setAttribute("class","div3")
    
        let div4=document.createElement("div")
        div4.setAttribute("class","div4")
    
        let image=document.createElement("img")
        image.src=el.images
        image.setAttribute("class","images")
    
        let title=document.createElement("h4")
        title.innerHTML=el.title
    
        let description=document.createElement("p")
        description.innerHTML=el.description
    
        div1.append(title,description)
    
        let line=document.createElement("p")
        line.innerHTML="----------------------------------------"
    
        let emi=document.createElement("p")
        emi.innerHTML=el.emi+ " "+`<i class="fa fa-question-circle-o" aria-hidden="true"></i>`
        emi.setAttribute("class","emi")
    
        let know=document.createElement("button")
        know.innerHTML=el.know
        know.setAttribute("class","know")
    
        let strikethrough_Price=document.createElement("p")
        strikethrough_Price.innerHTML=el.strikethrough_Price
        strikethrough_Price.setAttribute("class","strikethrough_Price")
    
        let Price=document.createElement("p")
        Price.innerHTML= "₹" + " " + el.Price;
        Price.setAttribute("class","Price")
        div2.append(strikethrough_Price,Price)
        // div2.append(Price)
       

        let btn=document.createElement("button")
        btn.textContent="Add To Cart"
        btn.setAttribute("class","btn")
      

        div4.append(know,btn)
        div3.append(div2,emi)
        div.append(image,div1,line,div3,div4);
        train_main.append(div)
    })
}
export {appendOnlineData,appendclassroomData}