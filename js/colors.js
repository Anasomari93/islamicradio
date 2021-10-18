class Color{
    constructor(){
        this.color1=document.getElementById("color1")
        this.color1.addEventListener("click",()=>{
            this.select_color("color1")
        })
        this.color2=document.getElementById("color2")
        this.color2.addEventListener("click",()=>{
            this.select_color("color2")
        })
        this.color3=document.getElementById("color3")
        this.color3.addEventListener("click",()=>{
            this.select_color("color3")
        })
        this.color4=document.getElementById("color4")
        this.color4.addEventListener("click",()=>{
            this.select_color("color4")
        })
        this.color5=document.getElementById("color5")
        this.color5.addEventListener("click",()=>{
            this.select_color("color5")
        })
        if(localStorage.getItem("color")==null){
            document.body.style.background="#333333"

        }
            this.select_color(localStorage.getItem("colors"))
        
        
        

    }
    select_color(color){
        if(color=="color1"){
            document.body.style.background="#333333"

        }else if(color=="color2"){
            document.body.style.background="black"

        }else if(color=="color3"){
            document.body.style.backgroundImage="linear-gradient(to left,#520909,#0a0a28)"

        }else if(color=="color4"){
            document.body.style.backgroundImage="linear-gradient(to left,rgb(207 231 74),rgb(10, 10, 40))"

        }else if(color=="color5"){
            document.body.style.backgroundImage="linear-gradient(to left,rgb(161 53 107),rgb(61 91 145))"

        }
        localStorage.setItem("colors",color)

    }
   
}
onload=new Color();