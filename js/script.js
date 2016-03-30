alert('Драсте... Наконец то я добрался к 3-4 заданиям!Для продолжения нажмите - ОК');
	
  // console.log(document.body);
var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

var body = document.body;
    body.appendChild(wrapper);

var test = document.createElement('div');
    test.classList.add('test');
    
    // test.className='test';   тоже самое что и предыдущая строка????
    
    test.innerHTML='Тест по программированию';

wrapper.appendChild(test);

var form = document.createElement('form');
wrapper.appendChild(form);

             //созжаём нумерованный список из трёх вопросов

var question = document.createElement('ol');

  form.appendChild(question);
     question.className='question';

            //ниже идут три вопроса  li которые наверное будут содержать
            //три варианта ответа

var question_1 = document.createElement('li');
  question_1.innerHTML = 'Вопрос №1'
  question.appendChild(question_1);

  
