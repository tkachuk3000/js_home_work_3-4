alert('Драсте... Наконец то 3-4 задания!Для продолжения нажмите - ОК');

var wrapper;
var body;
var test;
var form;

var ol;

var li_question_1;
var li_question_2;
var li_question_3;
// answer
var obj = {
	
	test_1: 'Тест по программированию',
	
	question_1: 'Вопрос №1 :',
	question_2: 'Вопрос №2 :',
	question_3: 'Вопрос №3 :',

	answer: ['Вариант ответа №1',
	         'Вариант ответа №2',
	         'Вариант ответа №3',

	         'Вариант ответа №1',
	         'Вариант ответа №2',
	         'Вариант ответа №3',

	         'Вариант ответа №1',
	         'Вариант ответа №2',
	         'Вариант ответа №3'],

    create_Wrapper: function() {

        wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        body = document.body;
        body.appendChild(wrapper);

        test = document.createElement('div');
        test.classList.add('test');
    
    // test.className='test';   тоже самое что и предыдущая строка????
    
        test.innerHTML = this.test_1;
        wrapper.appendChild(test);
    },

    create_form: function() {
        
        form = document.createElement('form');
        wrapper.appendChild(form);
    },
    
    create_question: function(){
         
        ol = document.createElement('ol');
        form.appendChild(ol);
        
        for(var i=1; i<=3; i++ ){
            var quest = document.createElement('li');
            ol.appendChild(quest);
            quest.classList.add('question');
            
            // var question;
            // var q = this.'question_' + i;
            // quest.innerHTML = q;
            
            if(i==1) {quest.innerHTML = this.question_1}
                else{
                    if(i==2){quest.innerHTML = this.question_2}
                        else{quest.innerHTML = this.question_3}
                };
            
            var ul = document.createElement('ul');
            quest.appendChild(ul);
            ul.className = 'ul_answer';
            
            for(var j=0; j<=2; j++ ){
               var li = document.createElement('li');
               ul.appendChild(li);
               
               var checkBox = document.createElement('input');
               checkBox.setAttribute('type','checkbox');
               li.appendChild(checkBox);

               var span = document.createElement('span');
               li.appendChild(span);
       
            }

        }

    },

    create_answear: function () {

        var span_list = form.getElementsByTagName('span');
        alert('общее количество ответов на 3 вопроса = ' + span_list.length);
        // alert(this.answer.length);

        for(var i=0; i<=8; i++){
            span_list[i].innerHTML = this.answer[i];
        }
       // for (var key in obj) {
            
       //      if (key === Number) {
       //          console.log(key);
       //          span_list.innerHTML = key;
       //      } else{
       //          console.log(key);
       //      }
        
       //  }




    },

    create_submit: function (){
        
        var submit = document.createElement('input');
        submit.setAttribute('type','submit');
        submit.className = 'submit'
        submit.setAttribute('value','Проверить мои результаты');
        form.appendChild(submit);
    }
    

    // create_answear_1: function () {
    //     var elem = document.querySelectorAll('.question');
    //     var ol = document.createElement('ol');
    //     var li = document.createElement('li');
    //     // var i=1;
    //     for(var i=0; i<=2; i++ ){
            
            
    //         elem[i].appendChild(ol);
       
    //     };
    //         // console.log(elem);
    //         // alert(elem);
    // },

}

    // obj.create_question ();


obj.create_Wrapper ();
obj.create_form ();

obj.create_question ();

// obj.create_answear_1();

obj.create_answear();
obj.create_submit();