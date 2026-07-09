const rooms=document.getElementById("rooms"),stairs=document.getElementById("stairs"),condition=document.getElementById("condition"),pets=document.getElementById("pets"),upholstery=document.getElementById("upholstery"),protector=document.getElementById("protector"),city=document.getElementById("city"),estimatePrice=document.getElementById("estimatePrice"),whatsappQuote=document.getElementById("whatsappQuote");
    function calculateEstimate(){
      let base=80, roomCount=Number(rooms.value);
      base+=roomCount*40; base+=Number(stairs.value)*45; base+=Number(pets.value)*45; base+=Number(upholstery.value)*55; base+=Number(protector.value)*Math.max(35,roomCount*20);
      if(condition.value==="heavy") base+=45; if(condition.value==="severe") base+=90;
      const low=Math.round(base*.92/5)*5, high=Math.round(base*1.15/5)*5;
      estimatePrice.textContent=`$${low}–$${high}`;
      const customerCity=city.value||"Niagara Region";
      const message=`Hi Falls Fresh Carpet Cleaning, I used the instant estimator on your website.%0A%0AEstimated price: $${low}–$${high}%0ARooms: ${rooms.value}%0AStairs: ${stairs.options[stairs.selectedIndex].text}%0ACondition: ${condition.options[condition.selectedIndex].text}%0APet stains/odours: ${pets.options[pets.selectedIndex].text}%0AUpholstery: ${upholstery.options[upholstery.selectedIndex].text}%0AFabric protection: ${protector.options[protector.selectedIndex].text}%0ACity/area: ${encodeURIComponent(customerCity)}%0A%0ACan you confirm availability and final pricing?`;
      whatsappQuote.href=`https://wa.me/12892190062?text=${message}`;
    }
    [rooms,stairs,condition,pets,upholstery,protector,city].forEach(field=>{field.addEventListener("input",calculateEstimate);field.addEventListener("change",calculateEstimate);});
    document.getElementById("year").textContent=new Date().getFullYear(); calculateEstimate();