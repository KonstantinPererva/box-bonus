function ContainerDetail(node) {
    var self = this;
    self.node = node || null;

    self.contentDetail = self.node.querySelector('[data-content="detail__content"]') || null;
    self.gallery = self.node.querySelector('[data-popup]') || null;
    self.substrateGallery = self.node.querySelector('[data-substrate-gallery]') || null;
    self.substrateContainer = self.node.querySelector('[data-substrate-container]') || null;

    self.btnCloseGallery = self.node.querySelector('[data-close-popup]') || null;
    self.btnOpenGallery = self.node.querySelectorAll('[data-open-popup]') || null;
    self.btnCloseContentDetail = self.node.querySelector('[data-close-container="detail"]') || null;

    self.contentBonus = self.node.querySelector('[data-content="bonus__content"]') || null;
    self.contentTable = self.node.querySelector('[data-content="table-bonus"]') || null;

    self.btnCloseContentTable = self.node.querySelector('[data-close-content="table-bonus"]') || null;
    self.btnOpenContentTable = self.node.querySelectorAll('[data-open-content="table-bonus"]') || null;
    self.btnCloseContainerBonus = self.node.querySelector('[data-close-container="bonus"]') || null;

    self.btnOpenPopupBonus = document.querySelector('[data-open-content="bonus"]') || null;
    self.btnOpenPopupDetail = document.querySelector('[data-open-content="detail"]') || null;

    self.btnOpenContentDetail = self.node.querySelectorAll('.table[data-table="bonus"] .table-body .table-row') || null;

    self.openPopup = function() {
        self.node.classList.add('open');

        setTimeout(function() {
            if(self.substrateContainer){
                self.substrateContainer.classList.add('open');
            }
        },10);
    };

    self.closePopup = function() {
        setTimeout(function() {
            self.node.classList.remove('open');
        },300);

        if(self.substrateContainer){
            self.substrateContainer.classList.remove('open');
        }
    };

    self.openContent = function (section){
        function addClassSection() {
            if(section){
                section.classList.add('open');
            }
        }

        setTimeout(addClassSection,10);
    };

    self.closeContent = function (section){
        if(section){
            section.classList.remove('open');
        }
    };

    self.openGallery = function() {
        if(self.gallery){
            self.gallery.classList.add('open');
            self.substrateGallery.classList.add('open');
        }
    };

    self.closeGallery = function() {
        if(self.gallery){
            self.gallery.classList.remove('open');
            self.substrateGallery.classList.remove('open');
        }
    };

    self.openDetail = function() {
        self.openPopup();
        self.openContent(self.contentDetail);
    };

    self.closeDetail = function() {
        self.closePopup();
        self.closeContent(self.contentDetail);
    };

    self.openBonus = function() {
        self.openContent(self.contentBonus);
        self.openPopup();
        self.contentBonus.dataset.status = "main";
        self.contentDetail.dataset.status = "secondary";
    };

    if (self.btnOpenPopupBonus) {
        self.btnOpenPopupBonus.addEventListener('click', self.openBonus);
    }

    if (self.btnOpenPopupDetail) {
        self.btnOpenPopupDetail.addEventListener('click', self.openDetail);
    }


    if (self.btnCloseContentTable) {
        self.btnCloseContentTable.addEventListener('click', function() {
            self.closeContent(self.contentTable);
            self.contentTable.dataset.open = "false";
        });
    }


    if (self.btnCloseContentDetail) {
        self.btnCloseContentDetail.addEventListener('click', function() {
            if (self.contentBonus.dataset.status === "main") {
                self.openContent(self.contentBonus);
                self.openContent(self.contentTable);
            } else {
                self.closePopup();
            }

            self.closeGallery();
            self.closeContent(self.contentDetail);
        });
    }


    if (self.btnCloseContainerBonus) {
        self.btnCloseContainerBonus.addEventListener('click', function() {
            if (self.contentBonus.dataset.status === "main") {
                self.closeContent(self.contentTable);
                self.closeContent(self.contentBonus);
                self.closePopup();
                self.contentBonus.dataset.status = "secondary";
                self.contentDetail.dataset.status = "main";
            }
        });
    }


    if (self.btnCloseGallery) {
        self.btnCloseGallery.addEventListener('click', function() {
            if (self.contentBonus.dataset.status === "main") {
                self.openContent(self.contentTable);
            }

            self.closeGallery();
        });
    }


    if(self.btnOpenContentTable.length){
        [].forEach.call(self.btnOpenContentTable, function(btn) {
            btn.addEventListener('click', function() {
                if (self.contentTable.dataset.open === "false") {
                    self.contentTable.dataset.open = "true";

                    self.openContent(self.contentTable);
                } else {
                    self.closeContent(self.contentTable);

                    setTimeout(function() {
                        self.openContent(self.contentTable);
                    } , 400);
                }


            });
        });
    }

    if(self.btnOpenContentDetail.length){
        [].forEach.call(self.btnOpenContentDetail, function(btn) {
            btn.addEventListener('dblclick', function() {
                self.closeContent(self.contentBonus);
                self.openContent(self.contentDetail);
            });
        });
    }

    if(self.btnOpenGallery.length){
        [].forEach.call(self.btnOpenGallery, function(btn) {
            btn.addEventListener('click', function() {
                self.closeContent(self.contentTable);
                self.openGallery();
            })
        });
    }

    if(self.substrateGallery){
        self.substrateGallery.addEventListener('click', function() {
            if (self.contentBonus.dataset.status === "main") {
                self.openContent(self.contentTable);
            }

            self.closeGallery();
        });
    }

    return {
        open: self.openDetail,
        close: self.closeDetail,
        openBonus: self.openBonus,
    }
}