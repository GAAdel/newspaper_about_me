window.onload = function() {
    let months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Ноябрь','Декабрь',];
    let days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    let elm1 = document.getElementById("date");
    let elm2 = document.getElementById("time");
    let now = new Date();
    let month = now.getMonth();
    let day = now.getDay();
    
		tiktak();
		function tiktak(){
      let now = new Date();
			let myHours = now.getHours();
			let myMinutes = now.getMinutes();
			let mySec = now.getSeconds();
			if (myMinutes < 10) myMinutes = "0" + myMinutes;
			if (mySec < 10) mySec = "0" + mySec;

      let info = `MOSCOW, ${days[day]}, ${months[month]} ${now.getDate()}, ${now.getFullYear()}`
      elm1.innerHTML = info;
      elm2.innerHTML = 'Time: ' +  myHours +':' +  myMinutes + ':' + mySec;
			setTimeout(tiktak, 1000);
		}		
}
