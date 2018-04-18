if(localStorage.getItem('number') != null) {
$('#tel').text(localStorage.getItem('number'));
}
if(localStorage.getItem('name') != null) {
$('#name').text(localStorage.getItem('name'));
}
if(localStorage.getItem('mail') != null) {
$('#email').text(localStorage.getItem('mail'));
}

// УПРАВЛЕНИЕ ТАБАМИ
    $(function() {
        $('ul.tabs').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('main').find('div.tab').removeClass('active').eq($(this).index()).addClass('active');
        });
    });

//Изменение имени
$(function() {
    var $a = $('#name');
    var $b = $('#usrName');

    $a.on('click', function(){
        $a.hide();
        $b.attr('value', $a.text());
        $b.show();
        $b.focus();
    });

//Изменение введенного имени
        $b.on('blur', function (e) {
            e.preventDefault();
            var $newName = $b.val();
            if($newName === "") {
                alert('Введите имя пользователя');
            } else {
                $a = $a.text($newName);
                localStorage.setItem('name', $a.text());
                $a.show();
                $b.hide();
            }
        });

});

// Изменение Телефона
$(function(){
    var $tel = $('#tel');
    var $num = $('#telNum');

    $tel.on('click', function(){
        $tel.hide();
        $num.attr('value', $tel.text());
        $num.show();
        $num.focus();
    });

    $num.on('blur', function() {

        var $valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        var $newTel = $num.val();
        if($newTel.match($valid)) {
            $tel = $tel.text($newTel);
            localStorage.setItem('number', $tel.text());
            $num.hide();
            $tel.show();
        } else{
            alert('Введите правильный номер телефона');
        }
    });


});

//Изменение Почты
$(function(){
    var $mail = $('#email');
    var $mailbox = $('#mailbox');

    $mail.on('click', function(){
        $mail.hide();
        $mailbox.attr('value', $mail.text());
        $mailbox.show();
        $mailbox.focus();
    });

    $mailbox.on('blur', function() {

        var $valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var $newMail = $mailbox.val();
        if($newMail.match($valid)) {
            $mail = $mail.text($newMail);
            localStorage.setItem('mail', $mail.text());
            $mailbox.hide();
            $mail.show();
        } else{
            alert('Введите правильный email');
        }
    });

});

// Добавление интересов
$(function() {
    var $list, $newInterestForm, $newInterestButton;
    var item= '';
    $list = $('#add');
    $newInterestForm = $('#itemDescription');
    $newInterestButton = $('#int_but');

// Появление формы
    $newInterestButton.on('click', function() {
        $newInterestButton.hide();
        $newInterestForm.show();
        $newInterestForm.focus();

    });

// Добавление в список
    $newInterestForm.on('change', function(e){
        e.preventDefault();
        var text = $('input:text').val();
        if(text != ''){
            $list.prepend('<li>'+text+'</li>');
            $('input:text').val('');
        }
        else {
            alert('Введите Ваши интересы');
        }
    });

    $list.on('click', 'li', function(){
        var $this = $(this);
        $this.remove();
    });

});
