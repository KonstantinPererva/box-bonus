var Tooltip = function (node) {

    var self = this;
    self.node = node;
    self.title = self.node.dataset.title || '';
    self.parent = null;
    self.position = '';

    self.createTooltip = function() {
        self.div = document.createElement('div');
        self.div.classList.add('tooltip');
        self.div.style.cssText = `
        position: absolute;
        z-index: 1;
        top: calc(100% - 1px);
        width: 155px;
        background: #000000;
        color: #ffffff;
        font-size: 10px;
        line-height: 12px;
        padding: 8px 12px;
        border-radius: 4px;
        transform: translateY(8px);
        display: none;
        opacity: 0;
        transition: .2s .2s;
    `;

        self.span = document.createElement('span');
        self.span.classList.add('tooltip__text');

        self.arrow = document.createElement('span');
        self.arrow.classList.add('tooltip__arrow');
        self.arrow.style.cssText = `
        position: absolute;
        bottom: calc(100% - 1px);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px 0 0 13px;
        border-color: transparent transparent transparent #000000;
    `;

        self.span.innerHTML = self.title;
        self.div.appendChild(self.span);
        self.div.appendChild(self.arrow);
        self.node.appendChild(self.div);
    };

    self.getSizeBoxes = function(elem) {
        var elemWidth = elem.getBoundingClientRect().right - elem.getBoundingClientRect().left;
        var elemHeight = elem.getBoundingClientRect().bottom - elem.getBoundingClientRect().top;

        return {
            width: elemWidth,
            height: elemHeight
        };
    };

    self.positionArrow = function() {
        var widthNode = self.getSizeBoxes(self.node).width;
        var widthArrow = self.getSizeBoxes(self.arrow).width;

        if (self.position === "right") {
            self.arrow.style.right = widthNode / 2 - widthArrow + 30 + "px";
            self.arrow.style.left = "auto";
        } else {
            self.arrow.style.left = widthNode / 2 + 30 + "px";
            self.arrow.style.right = "auto";
        }
    };

    self.positionTooltip = function() {
        var posRightTooltip = self.div.getBoundingClientRect().right;

        function parentSearch(parent) {
            var parentEl = parent.parentElement;

            if (parent.dataset.card === "bonus") {
                return self.parent = parentEl;
            }

            parentSearch(parentEl);
        }

        parentSearch(self.div);

        var posRightParent = self.parent.getBoundingClientRect().right;

        if (posRightParent - posRightTooltip < 0) {
            self.position = 'right';
            self.div.style.right = '-30px';
            self.div.style.left = 'auto';
        } else {
            self.position = 'left';
            self.div.style.left = '-30px';
        }
    };

    self.viewTooltip = function() {
        self.div.style.display = 'block';
        if (!self.position) {
            self.positionTooltip();
            self.positionArrow();
        }

        setTimeout(function () {
            self.div.style.opacity = '1';
        },10);
    };

    self.hideTooltip = function() {
        self.div.style.opacity = '0';

        setTimeout(function () {
            self.div.style.display = 'none';
        },200);
    };

    self.node.addEventListener('mouseenter', self.viewTooltip);

    self.node.addEventListener('mouseleave', self.hideTooltip);

    self.createTooltip();
};