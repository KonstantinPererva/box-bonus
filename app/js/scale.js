function Scale(node) {
    var _S = this;

    _S.node = node || null;
    _S.min = _S.node.dataset.min || null;
    _S.max = _S.node.dataset.max || null;
    _S.mark = _S.node.querySelectorAll('[data-mark]') || null;
    _S.wrapper = null;

    _S.dif = parseInt(_S.max, 10) - parseInt(_S.min, 10);

    _S.card = function (el) {
        // debugger;
        var parent = el.parentElement;
        _S.wrapper = parent;

        if (parent == document.querySelector('.bonus-card-content')) {return;}

        _S.card(_S.wrapper);
    };

    _S.card(_S.node);

    _S.leading = _S.wrapper.querySelector('[data-leading]') || null;
    _S.band = _S.node.querySelector('[data-band]') || null;

    _S.fullness = function() {
        var data = _S.leading.dataset.leading;
        var per = (parseInt(data, 10) - _S.dif) * 100 / _S.dif;

        console.log(data);
        console.log(parseInt(data, 10));
        console.log(per);

        _S.band.style.width = per + "%";
    };

    _S.positionMark = function () {
        [].forEach.call(_S.mark, function (mark, ind) {
            var pos = mark.dataset.position;
            var per = (parseInt(pos, 10) - _S.dif) * 100 / _S.dif;

            if (_S.mark[0] === _S.mark[ind]) {
                mark.style.left = per;
            } else {
                mark.style.left = "calc(" + per + "% - 1px)";
            }

        })
    };

    _S.positionMark();
    _S.fullness();

}