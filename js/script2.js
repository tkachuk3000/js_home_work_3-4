alert('Сейчас будем заносить имена в массив...');
var mass = [];


for (var i = 0; i < 5; i++) {
	var name = prompt('введите имя');
    mass.push(name);
}

console.log(mass);
alert('в массиве эти имена: '+mass);

alert('Теперь будем сравнивать введенное имя с именами в массиве...')

var a = prompt('введите имя для сравнения');
for (var i=0; i<mass.length; i++) {
	if (a == mass[i]) {
       var b = a
	}
}
if (b == a) {
	alert(b+' поздравляем,вы успешно вошли..')
} else{
	alert('ошибка')
}