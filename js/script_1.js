alert('Драсте... Наконец то 3-4 задания!Для продолжения нажмите - ОК');

var wrapper;
var body;
var test;
var form;

// var ol;

// var quest_1;
// var quest_2;
// var quest_3;

var ol;

var li_question_1;
var li_question_2;
var li_question_3;

var obj = {
	
	test_1: 'Тест по программированию',
	
	question_1: 'Вопрос №1 :',
	question_2: 'Вопрос №2 :',
	question_3: 'Вопрос №3 :',

	answer1_1: 'Вариант ответа №1',
	answer1_2: 'Вариант ответа №2',
	answer1_3: 'Вариант ответа №3',

	answer2_1: 'Вариант ответа №1',
	answer2_2: 'Вариант ответа №2',
	answer2_3: 'Вариант ответа №3',

	answer3_1: 'Вариант ответа №1',
	answer3_2: 'Вариант ответа №2',
	answer3_3: 'Вариант ответа №3',

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
    
    // create_question: function(){
         
    //     ol = document.createElement('ol');
    //     form.appendChild(ol);
        
    //     for(var i=1; i<=3; i++ ){
    //     	quest_[i] = document.createElement('li');
    //         form.appendChild(quest_[i]);
    //         quest_[i].innerHTML = this.question_[i];
    //         // var questi_ +i = quest_[i];
    //     };

    // },


    create_question_all: function(){
         
        ol = document.createElement('ol');
        form.appendChild(ol);
 		ol.className='ol_question'; 
        
        li_question_1 = document.createElement('li');
        li_question_1.innerHTML = this.question_1;
        ol.appendChild(li_question_1);

        li_question_2 = document.createElement('li');
        li_question_2.innerHTML = this.question_2;
        ol.appendChild(li_question_2);

        li_question_3 = document.createElement('li');
        li_question_3.innerHTML = this.question_3;
        ol.appendChild(li_question_3);

    },
    
    create_answear_1: function (){
     
        var ul_answer = document.createElement('ul');
        li_question_1.appendChild(ul_answer);
        ul_answer.className='ul_answer'; 
 		
 		var li_answer_1 = document.createElement('li');
 		ul_answer.appendChild(li_answer_1);
 		var checkBox_1 = document.createElement('input');
        checkBox_1.setAttribute('type','checkbox');
        li_answer_1.appendChild(checkBox_1);
        var li_span_1 = document.createElement('span');
        li_answer_1.appendChild(li_span_1);
        li_span_1.innerHTML = this.answer1_1;

        var li_answer_2 = document.createElement('li');
 		ul_answer.appendChild(li_answer_2);
 		var checkBox_2 = document.createElement('input');
        checkBox_2.setAttribute('type','checkbox');
        li_answer_2.appendChild(checkBox_2);
        var li_span_2 = document.createElement('span');
        li_answer_2.appendChild(li_span_2);
        li_span_2.innerHTML = this.answer1_2;

        var li_answer_3 = document.createElement('li');
 		ul_answer.appendChild(li_answer_3);
 		var checkBox_3 = document.createElement('input');
        checkBox_3.setAttribute('type','checkbox');
        li_answer_3.appendChild(checkBox_3);
        var li_span_3 = document.createElement('span');
        li_answer_3.appendChild(li_span_3);
        li_span_3.innerHTML = this.answer1_3;
    },

     create_answear_2: function (){
     
        var ul_answer = document.createElement('ul');
        li_question_2.appendChild(ul_answer);
        ul_answer.className='ul_answer'; 
 		
 		var li_answer_1 = document.createElement('li');
 		ul_answer.appendChild(li_answer_1);
 		var checkBox_1 = document.createElement('input');
        checkBox_1.setAttribute('type','checkbox');
        li_answer_1.appendChild(checkBox_1);
        var li_span_1 = document.createElement('span');
        li_answer_1.appendChild(li_span_1);
        li_span_1.innerHTML = this.answer2_1;

        var li_answer_2 = document.createElement('li');
 		ul_answer.appendChild(li_answer_2);
 		var checkBox_2 = document.createElement('input');
        checkBox_2.setAttribute('type','checkbox');
        li_answer_2.appendChild(checkBox_2);
        var li_span_2 = document.createElement('span');
        li_answer_2.appendChild(li_span_2);
        li_span_2.innerHTML = this.answer2_2;

        var li_answer_3 = document.createElement('li');
 		ul_answer.appendChild(li_answer_3);
 		var checkBox_3 = document.createElement('input');
        checkBox_3.setAttribute('type','checkbox');
        li_answer_3.appendChild(checkBox_3);
        var li_span_3 = document.createElement('span');
        li_answer_3.appendChild(li_span_3);
        li_span_3.innerHTML = this.answer2_3;
    },

    create_answear_3: function (){
     
        var ul_answer = document.createElement('ul');
        li_question_3.appendChild(ul_answer);
        ul_answer.className='ul_answer'; 
 		
 		var li_answer_1 = document.createElement('li');
 		ul_answer.appendChild(li_answer_1);
 		var checkBox_1 = document.createElement('input');
        checkBox_1.setAttribute('type','checkbox');
        li_answer_1.appendChild(checkBox_1);
        var li_span_1 = document.createElement('span');
        li_answer_1.appendChild(li_span_1);
        li_span_1.innerHTML = this.answer3_1;

        var li_answer_2 = document.createElement('li');
 		ul_answer.appendChild(li_answer_2);
 		var checkBox_2 = document.createElement('input');
        checkBox_2.setAttribute('type','checkbox');
        li_answer_2.appendChild(checkBox_2);
        var li_span_2 = document.createElement('span');
        li_answer_2.appendChild(li_span_2);
        li_span_2.innerHTML = this.answer3_2;

        var li_answer_3 = document.createElement('li');
 		ul_answer.appendChild(li_answer_3);
 		var checkBox_3 = document.createElement('input');
        checkBox_3.setAttribute('type','checkbox');
        li_answer_3.appendChild(checkBox_3);
        var li_span_3 = document.createElement('span');
        li_answer_3.appendChild(li_span_3);
        li_span_3.innerHTML = this.answer3_3;
    },

    create_submit: function (){
    	
    	var submit = document.createElement('input');
 		submit.setAttribute('type','submit');
 		submit.className = 'submit'
 		submit.setAttribute('value','Проверить мои результаты');
 		form.appendChild(submit);
    }

}

obj.create_Wrapper ();
obj.create_form ();

// obj.create_question ();

obj.create_question_all();

obj.create_answear_1();

obj.create_answear_2();

obj.create_answear_3();

obj.create_submit();