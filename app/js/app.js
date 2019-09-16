var detail = new ContainerDetail(document.querySelector('[data-container="detail"]'));

var btnOpenBonuses = document.querySelector('.open-popup-bonuses');


// dropdown box
if (document.querySelectorAll('[data-container="bonus-card"]').length) {
    var infoBox = document.querySelectorAll('[data-container="bonus-card"]');
    [].forEach.call(infoBox, function (el) {
        new DropdownBox(el);
    });
}

// custom scrollbar
if (document.querySelector('.bonus-scroll')) {
    new SimpleBar(document.querySelector('.bonus-scroll'), {
        autoHide: false
    });
}

if (document.querySelector('[data-scale="bonus"]')) {
    var scaleList = document.querySelectorAll('[data-scale="bonus"]');
    [].forEach.call(scaleList, function (scale) {
        if(scale){
            let scl = new Scale(scale);
            scl.init();
        }
    });
}

// open bonus table
$('.bonus-button').click(function () {
    $('.bonus__table').addClass('open');
});