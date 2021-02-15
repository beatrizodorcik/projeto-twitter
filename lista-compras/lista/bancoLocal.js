class BancoLocal {
  constructor() {
    this.minhaLista = JSON.parse(localStorage.getItem("lista-de-compras")) || []
  }

  ler() {
    this.minhaLista = JSON.parse(localStorage.getItem("lista-de-compras"))
  }

  gravar(itens) {
    let lista = this.minhaLista || []
    lista.push(itens)
    localStorage.setItem("lista-de-compras", JSON.stringify(lista))
  }
  
  apagar() {
    localStorage.clear()
  }
}