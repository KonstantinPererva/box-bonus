function DropdownBox(node, opt) {
    var self = this;

    self.opt = opt || {};

    self.option = Object.assign({
        accordionParent: null,
        btn: '[data-button]',
        box: '[data-box]',
        indicator: '[data-indicator]',
        onOpen: null
    }, self.opt);

    self.node = node;
    self.btn = self.node.querySelector(self.option.btn);
    self.box = self.node.querySelector(self.option.box);
    self.indicator = self.node.querySelector(self.option.indicator);

    self.toggleOpen = function() {
        $(self.box).slideToggle(200);
        $(self.indicator).toggleClass('open');
    };

    self.closeBox = function(el) {
        $(self.option.accordionParent).find(self.option.box).slideUp(200);
        $(self.option.accordionParent).find(self.option.indicator).removeClass('open');
    };

    self.accordion = function(el) {
        $(el).parents(self.option.accordionParent).find(self.option.box).slideUp(200);
        $(el).parents(self.option.accordionParent).find(self.option.indicator).removeClass('open');

        if($(el).is('.open')){
            $(el).removeClass('open');
            $(el).parent(self.node).find(self.box).slideUp(200);
            $(el).parent(self.node).find(self.indicator).removeClass('open');
        } else {
            $(self.option.accordionParent).find(self.option.btn).removeClass('open');
            $(el).addClass('open');
            $(el).parent(self.node).find(self.box).slideDown(200);
            $(el).parent(self.node).find(self.indicator).addClass('open');
        }
    };

    if (document.querySelector(self.option.accordionParent)) {
        self.btn.addEventListener('click', function() {
            self.accordion(this);

            if (self.option.onOpen && this.classList.contains('open')) {
                setTimeout(self.option.onOpen, 10);
            }
        })
    } else {
        self.btn.addEventListener('click', function() {
            self.toggleOpen();

            if (self.option.onOpen && this.classList.contains('open')) {
                setTimeout(self.option.onOpen, 10);
            }
        })
    }
}

