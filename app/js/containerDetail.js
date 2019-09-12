function ContainerDetail(node) {
    var self = this;
    self.node = node || null;
    self.gallery = self.node.querySelector('[data-popup]') || null;
    self.btnCloseGallery = self.node.querySelector('[data-close-popup]') || null;
    self.btnOpenGallery = self.node.querySelectorAll('[data-open-popup]') || null;
    self.btnCloseContainer = self.node.querySelector('[data-close-container]') || null;
    self.content = self.node.querySelector('[data-content]') || null;
    self.substrateContainer = self.node.querySelector('[data-substrate-container]') || null;
    self.substrateGallery = self.node.querySelector('[data-substrate-gallery]') || null;

    self.openPopupDetail = function () {
        self.node.classList.add('open');

        setTimeout(function () {
            if(self.substrateContainer){
                self.substrateContainer.classList.add('open');
            }
            if(self.content){
                self.content.classList.add('open');
            }
        },10);
    };

    self.closePopupDetail = function () {
        setTimeout(function () {
            self.node.classList.remove('open');
        },300);

        if(self.substrateContainer){
            self.substrateContainer.classList.remove('open');
        }
        if(self.content){
            self.content.classList.remove('open');
        }
    };

    self.openGallery = function () {
        if(self.gallery){
            self.gallery.classList.add('open');
        }
    };

    self.closeGallery = function () {
        if(self.gallery){
            self.gallery.classList.remove('open');
        }
    };

    if(self.btnCloseGallery){
        self.btnCloseGallery.addEventListener('click', self.closeGallery);
    }

    if(self.btnCloseContainer){
        self.btnCloseContainer.addEventListener('click', self.closePopupDetail);
    }

    if(self.btnOpenGallery.length){
        [].forEach.call(self.btnOpenGallery, function(btn) {
            btn.addEventListener('click', self.openGallery);
        });
    }

    if(self.substrateGallery){
        self.substrateGallery.addEventListener('click', function () {
            self.closeGallery();
            self.closePopupDetail();
        });
    }

    return {
        open: self.openPopupDetail,
        close: self.closePopupDetail,
    }
}