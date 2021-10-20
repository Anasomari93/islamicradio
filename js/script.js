class Player{
    constructor(){
        var player=document.getElementById("player")
        player.style.height=screen.height+"px"
        if(screen.width<600){
            player.style.width=screen.width+"px"

        }
        var maindiv=document.getElementById("content")
        maindiv.style.height=screen.height-250+"px"

    }
}
onload=new Player();


// class buttons

class Audio_player{
    constructor(){
        this.audio_file=document.getElementById("audio_file")
        this.title_file=document.getElementById("title_radio")
        this.play_pause_button=document.getElementById("play_pause")
        this.isplayed;
        this.play_pause_button.addEventListener("click",()=>{
            this.play_pause()

        });
        // names
        this.name_channel=[]
        this.name_channel[0]="الشيخ المنشاوي"
        this.name_channel[1]="الشيخ المعيقلي"
        this.name_channel[2]="الشيخ مشاري العفاسي"
        this.name_channel[3]="الشيخ فارس عباد"
        this.name_channel[4]="الشيخ السديس"
        this.name_channel[5]="الشيخ عبد الباسط"
        this.name_channel[6]="الشيخ سعد الغامدي"
        this.name_channel[7]="الشيخ سعود الشريم"
        this.name_channel[8]="الشيخ احمد العجمي"
        // sources
        
        this.source_channel=[]
        this.source_channel[0]="https://qurango.net/radio/mohammed_siddiq_alminshawi.mp3"
        this.source_channel[1]="https://qurango.net/radio/maher_al_meaqli.mp3"
        this.source_channel[2]="https://qurango.net/radio/mishary_alafasi.mp3"
        this.source_channel[3]="https://qurango.net/radio/fares_abbad.mp3"
        this.source_channel[4]="https://qurango.net/radio/abdulrahman_alsudaes.mp3"
        this.source_channel[5]="https://qurango.net/radio/abdulbasit_abdulsamad_mojawwad.mp3"
        this.source_channel[6]="https://qurango.net/radio/saad_alghamdi.mp3"
        this.source_channel[7]="https://qurango.net/radio/saud_alshuraim.mp3"
        this.source_channel[8]="https://qurango.net/radio/ahmad_alajmy.mp3"
        this.server=0;
        this.set_sourses()
        document.getElementById("next").addEventListener("click",()=>{
            if(this.server<this.source_channel.length-1){
                ++this.server
                this.isplayed=false
                

            }else{
                this.server=0
            }
            localStorage.setItem("channels",this.server)
            this.set_sourses()
            
        })
        document.getElementById("back").addEventListener("click",()=>{
            if(this.server>0){
                --this.server
                this.isplayed=false
            }else{
                this.server=this.source_channel.length-1
            }
            localStorage.setItem("channels",this.server)
            this.set_sourses()
        })

        
        }
    set_sourses(){
        if(localStorage.getItem("channels")!==null){
            this.server=localStorage.getItem("channels")

        }
        
            this.audio_file.src=this.source_channel[this.server]
            this.title_file.innerHTML=this.name_channel[this.server]
            this.play_pause()
            


        
    }    
    play_pause(){
        if(this.isplayed==false){
            this.audio_file.play()
            this.play_pause_button.src="./img/pause.png"
            this.isplayed=true;

        }else{
            this.audio_file.pause();
            this.play_pause_button.src="./img/play.png"
            this.isplayed=false;

        }
    }    

    }
   

onload=new Audio_player();
