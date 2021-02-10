const bancoLocal = new BancoLocal()
const lista = new lista()

lista.botaoAdicionar.addEventListener('click', () => {
  bancoLocal.gravar(lista.inputItem.value)
  bancoLocal.ler()
  lista.adicionarNaLista(bancoLocal.minhaLista)
})

lista.botaoApagar.addEventListener('click', () => {

})

window.addEventListener('DOMContentLoaded', () => {
  bancoLocal.ler()
  lista.adicionarNaLista(bancoLocal.minhaLista)
})