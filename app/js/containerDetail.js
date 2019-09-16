function ContainerDetail(node) {
    var self = this;
    self.node = node || null;

    self.gallery = self.node.querySelector('[data-popup]') || null;
    self.btnCloseGallery = self.node.querySelector('[data-close-popup]') || null;
    self.btnOpenGallery = self.node.querySelectorAll('[data-open-popup]') || null;
    self.btnCloseContainer = self.node.querySelector('[data-close-container]') || null;
    self.contentDetail = self.node.querySelector('[data-content="detail__content"]') || null;
    self.substrateContainer = self.node.querySelector('[data-substrate-container]') || null;
    self.substrateGallery = self.node.querySelector('[data-substrate-gallery]') || null;

    self.contentBonus = self.node.querySelector('[data-content="bonus__content"]') || null;
    self.contentTable = self.node.querySelector('[data-content="table-bonus"]') || null;
    self.btnCloseContentTable = self.node.querySelector('[data-close-content="table-bonus"]') || null;
    self.btnOpenContentTable = self.node.querySelector('[data-open-content="table-bonus"]') || null;
    self.btnOpenContentBonus = document.querySelector('[data-open-content="bonus"]') || null;

    self.btnOpenContentDetail = self.node.querySelector('.table[data-table="bonus"] .table-body .table-row') || null;

    self.openPopup = function () {
        self.node.classList.add('open');

        setTimeout(function () {
            if(self.substrateContainer){
                self.substrateContainer.classList.add('open');
            }
        },10);
    };

    self.closePopup = function () {
        setTimeout(function () {
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

    self.btnOpenContentBonus.addEventListener('click', function () {
        self.openContent(self.contentBonus);
        self.openPopup();
    });

    self.btnOpenContentTable.addEventListener('click', function () {
        self.openContent(self.contentTable);
    });

    self.btnCloseContentTable.addEventListener('click', function () {
        self.closeContent(self.contentTable);
    });

    self.btnOpenContentDetail.addEventListener('dblclick', function () {
        self.closeContent(self.contentBonus);
        self.openContent(self.contentDetail);
    });

    self.btnCloseGallery.addEventListener('click', function () {
        self.closeGallery();
        self.openContent(self.contentTable);
    });



    // if(self.btnCloseGallery){
    //     self.btnCloseGallery.addEventListener('click', self.closeGallery);
    // }
    //
    // if(self.btnCloseContainer){
    //     self.btnCloseContainer.addEventListener('click', function (){
    //         self.closeContent(self.contentDetail);
    //         self.closePopup();
    //     })
    // }

    if(self.btnOpenGallery.length){
        [].forEach.call(self.btnOpenGallery, function(btn) {
            btn.addEventListener('click', function (){
                self.closeContent(self.contentTable);
                self.openGallery();
            })
        });
    }

    if(self.substrateGallery){
        self.substrateGallery.addEventListener('click', function () {
            self.closeGallery();
            self.closePopup();
        });
    }

    return {
        // open: self.openPopup,
        // close: self.closePopup,
    }
}