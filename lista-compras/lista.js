class Lista {
  constructor() {
    this.inputItem = document.querySelector('#item')
    this.botaoAdicionar = document.querySelector('#adicionar')
    this.lista = document.querySelector('#lista')
    this.botaoApagar = document.querySelector('#apagar')
  }

  apagarLista () {

  }

  adicionarNaLista () {
    let listaHTML = ``

    this.lista.innerHTML = listaHTML
  }
}