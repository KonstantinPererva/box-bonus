var bonus = new ContainerDetail(document.querySelector('[data-container="bonus"]'));

var btnOpenBonuses = document.querySelector('.open-popup-bonuses');

btnOpenBonuses.addEventListener('click', function () {
    bonus.open();
});

// dropdown box
if (document.querySelectorAll('[data-container="bonus-card"]').length) {
    var infoBox = document.querySelectorAll('[data-container="bonus-card"]');
    [].forEach.call(infoBox, function (el) {
        new DropdownBox(el);
    });
}

// custom scrollbar
if (document.querySelector('.detail-info__hold')) {
    new SimpleBar(document.querySelector('.detail-info__hold'), {
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