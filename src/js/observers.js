import {settings} from "./settings";

export const observers = {
    showUpElements: document.querySelectorAll(`[data-animation='${settings.showUpClass}']`),
    showLeftElements: document.querySelectorAll(`[data-animation='${settings.showLeftClass}']`),
    appearElements: document.querySelectorAll(`[data-animation='${settings.appearClass}']`),


    init() {
        this.showUpObserver = new IntersectionObserver(this.showUpAnimate.bind(this), {threshold: 0.25});
        this.appearObserver = new IntersectionObserver(this.appearAnimate, this.options);
        this.showLeftObserver = new IntersectionObserver(this.showLeftAnimate, this.options);
        this.observerAction()
    },
    showUpAnimate(elements) {
        let index = 0;
        elements.forEach((element) => {
            if (element.isIntersecting) {
                setTimeout(() => {
                    element.target.classList.add(settings.showUpClass)
                    element.target.classList.remove(settings.noOpacityClass)
                }, index * 100)
                index++;
            }
        })
    },
    showLeftAnimate(elements) {
        elements.forEach((element) => {
            if (element.isIntersecting) {
                element.target.classList.add(settings.showLeftClass);
                element.target.classList.remove(settings.noOpacityClass)

            }
        });
    },
    appearAnimate(elements) {
        let index = 0;
        elements.forEach((element) => {
            if (element.isIntersecting) {
                setTimeout(() => {
                    element.target.classList.add(settings.appearClass)
                    element.target.classList.remove(settings.noOpacityClass)
                }, index * 200)
                index++;
            }
        })
    },
    observerAction() {
        this.showUpElements.forEach((element) => {
            this.showUpObserver.observe(element)
        })
        this.appearElements.forEach((element) => {
            this.appearObserver.observe(element)
        })
        this.showLeftElements.forEach((element) => {
            this.showLeftObserver.observe(element)
        })
    }

}