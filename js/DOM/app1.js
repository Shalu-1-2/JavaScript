      let outer = document.getElementById("outer");
        // document.getElementById("outer").innerHTML = "<p>this is pragraph.</p>";
        console.log(outer);
        // let heading = document.querySelector(".heading");
        // console.log(heading);
        // heading.style.backgroundColor ="yellow";

        
        let heading1 = document.getElementsByClassName("heading");
         heading1[0].style.color = "blue";
        console.log(heading1);

        let heading2 = document.querySelectorAll(".heading");
        console.log(heading2);

        heading2.forEach((element) => {
            element.style.backgroundColor ="yellow";
            element.style.color = "red";
        });

        let para = document.getElementsByTagName("p");
        para[0].style.backgroundColor = "green";
        para[0].style.color = "white";

        let para1 = document.querySelectorAll('#p1')
         console.log(para1[0].textContent ="Hello paragraph");
         para1[0].textContent ="Hello paragraph";

         let heading3 = document.querySelectorAll("#heading1");
         heading3[0].style.color ="blue";
         heading3[0].style.backgroundColor ="orange";
         heading3[0].style.fontSize ="40px";
         console.log(heading3[0].getAttribute("id"));

         let photo =document.getElementById("photo");
         photo.src="img7.jpg";

         console.log(photo.getAttribute("src"));

         let link = document.querySelector("a");
         link.setAttribute("href","https://chatgpt.com/");
         

       
        
        

        

