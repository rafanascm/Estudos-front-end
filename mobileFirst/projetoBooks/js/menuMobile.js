class MenuMobile {
  constructor( mobileMenu, listaMenu, listaMenuItem) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.listaMenu  = document.querySelector(listaMenu)
    this.listaMenuItem = document.querySelectorAll(listaMenuItem)
    this.activeClass = "active"  
    this.handleClick = this.handleClick.bind(this)
  
  }


  handleClick(){
    this.listaMenu.classList.toggle(this.activeClass)
    this.mobileMenu.classList.toggle(this.activeClass)
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick)
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent()
    }
    return this;
  }
}

const menuMobile = new MenuMobile(
  ".mobile-menu",
  ".lista-menu",
  ".lista-menu-item li",
)

menuMobile.init()