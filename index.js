setInterval(()=>{

    d = new Date();
    ht = d.getHours();
    mt = d.getMinutes();
    st = d.getSeconds();
    
    hrotation = 30*ht + mt/2;
    mrotation = 6*mt;
    srotation = 6*st;

    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
},1000)