class modalka {
    init() {
        let self = this;
        let modalkaWrappers = document.querySelectorAll('.modalkaWrapper');
        let modalkaCloses = document.querySelectorAll('.modalkaClose');
        let modalkaOpeners = document.querySelectorAll('.modalkaOpener');

        for (const modalkaWrapper of modalkaWrappers) {
            modalkaWrapper.removeEventListener('click', this.close);
            modalkaWrapper.addEventListener('click', (e) => {
                if (e.target !== modalkaWrapper) {return;}
                self.close(modalkaWrapper);
            });
        }
        
        for (const modalkaClose of modalkaCloses) {
            modalkaClose.removeEventListener('click', this.close);
            modalkaClose.addEventListener('click', (e) => {
                this.close(e.target.closest('.modalkaWrapper'));
            });
        }
        
        for (const modalkaOpener of modalkaOpeners) {
            modalkaOpener.removeEventListener('click', this.open);
            modalkaOpener.addEventListener('click', (e) => {
                let modalkaID = modalkaOpener.getAttribute('modalka');
                self.open(document.getElementById(modalkaID));
            });
        }
    }
    open(modalkaWrapper) {
        modalkaWrapper.classList.add('open');
    }
    close(modalkaWrapper) {
        modalkaWrapper.classList.remove('open');
    }
}

let modals = new modalka();
modals.init();