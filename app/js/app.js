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

// set scale
if (document.querySelector('[data-scale="bonus"]')) {
    var scaleList = document.querySelectorAll('[data-scale="bonus"]');
    [].forEach.call(scaleList, function (scale) {
        if(scale){
            let scl = new Scale(scale);
            scl.init();
        }
    });
}

// set tooltip
if (document.querySelector('.bonus-picture')) {
    var pictures = document.querySelectorAll('.bonus-picture');
    [].forEach.call(pictures, function (el) {
        new Tooltip(el);
    });
}

if (document.querySelector('.bonus-info')) {
    var infoBlock = document.querySelectorAll('.bonus-info');
    [].forEach.call(infoBlock, function (el) {
        new Tooltip(el);
    });
}
