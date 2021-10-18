class Volume{
    constructor(){
        this.audio_file=document.getElementById("audio_file")
        this.audio_file.volume=50/100;
        this.input_volume=document.getElementById("input_volume")
        this.input_volume.addEventListener("change",()=>{
            this.audio_file.volume=this.input_volume.value/100;

        })
        this.input_speed=document.getElementById("input_speed");
        this.input_speed.playbackRate=1
        this.input_speed.addEventListener("change",()=>{
            this.audio_file.playbackRate=this.input_speed.value/100
        })

    }
}
onload=new Volume();