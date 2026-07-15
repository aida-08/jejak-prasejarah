function semakJawapan(){

let markah = 0;

const jawapanBetul = document.querySelectorAll('input[data-answer="true"]');

jawapanBetul.forEach(function(item){

if(item.checked){

markah++;

}

});

let gelaran="";

if(markah>=13){

gelaran="🏆 Pakar Zaman Prasejarah";

}

else if(markah>=10){

gelaran="⭐ Pengembara Hebat";

}

else if(markah>=7){

gelaran="🌿 Pengembara Muda";

}

else{

gelaran="📖 Teruskan Berusaha!";

}

let nama=document.getElementById("nama").value;

let kelas=document.getElementById("kelas").value;

document.getElementById("paparNama").innerHTML="👤 "+nama;

document.getElementById("paparKelas").innerHTML="🏫 "+kelas;

document.getElementById("paparMarkah").innerHTML=markah+"/15";

document.getElementById("paparGelaran").innerHTML=gelaran;

document.getElementById("keputusan").style.display="block";

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}