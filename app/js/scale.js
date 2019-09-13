function Scale(node) {
    var _S = this;
    _S.slave = null;
    _S.wrapper = null;
    _S.leading = null;

    _S.node = node || null;

    _S.min = _S.node.dataset.min || null;
    _S.max = _S.node.dataset.max || null;
    _S.dif = parseInt(_S.max, 10) - parseInt(_S.min, 10);

    _S.mark = _S.node.querySelectorAll('[data-mark]') || null;
    _S.band = _S.node.querySelector('[data-band]') || null;

    _S.activeBonus = function() {
        [].forEach.call(_S.mark, function (mark) {
            mark.slave = mark.querySelector('[data-slave]');

            var pos = parseInt(mark.dataset.position, 10);
            var data = parseInt(_S.leading.dataset.leading, 10);

            if (pos <= data) {
                mark.slave.classList.add('active');
            }
        })
    };

    _S.setLeading = function() {
        _S.parentSearch(_S.node);
        _S.leading = _S.wrapper.querySelector('[data-leading]') || null;
    };

    _S.parentSearch = function(el) {
        var parent = el.parentElement;
3
        if (parent.dataset.card === "bonus") {
            return _S.wrapper = parent;
        }

        _S.parentSearch(parent);
    };

    _S.fullness = function() {
        var data = _S.leading.dataset.leading;
        var per = (parseInt(data, 10) - _S.min) * 100 / _S.dif;

        if (per > 100) {
            _S.band.style.width = "100%";
        } else if (per < 0) {
            _S.band.style.width = "0";
        } else {
            _S.band.style.width = per + "%";
        }
    };

    _S.positionMark = function() {
        [].forEach.call(_S.mark, function (mark, ind) {
            var pos = mark.dataset.position;
            var per = (parseInt(pos, 10) - _S.min) * 100 / _S.dif;

            if (_S.mark[0] === _S.mark[ind]) {
                mark.style.left = per + "%";
            } else {
                mark.style.left = "calc(" + per + "% - 1px)";
            }
        })
    };

    _S.init = function() {
        _S.positionMark();
        _S.setLeading();
        _S.fullness();
        _S.activeBonus();
    };

    return {
        init: _S.init,

    }
}