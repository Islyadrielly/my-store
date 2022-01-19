# Explicando o projetinho:

---

Começando nesse arquivo > **src/app/product-list/product-list.component.ts** Temos o component composto pelo **selector** [a tag que vai poder ser usada em outros componentes do projeto], o **templateurl** [q contem o link do html do component, sendo o template responsavel apenas por exibir os dados da classe] e o **style** que é o css.

Na classe **ProductListComponent** eu estou atribuindo a products a constante products.

Nessa classe eu também tenho os métodos **share** que dispara um alerta informando que o produto foi compartilhado e o **onNotify** que informa que o cliente vai ser notificado quando o produto estiver a venda.

---

Indo ao arquivo da constante **products, eu vejo então que ela é um objeto do tipo array de product.**

eu sou redirecionada para **src/app/product-list/products.ts**

Na interface eu crio o tipo product com os dados id, name, price etc., já fazendo a tipagem dos dados.

No objeto, temos um array de tamanho 3, que são os três produtos exibidos na tela e nessa mesma constante eu já preencho os dados de cada objeto.

---

Pra isso que eu mostrei até agora ser de fato ser exibido na tela, tem a utilização do html. É no **src/app/product-list/product-list.component.html**  onde os produtos estão sendo definidos. A utilização da diretiva estrutural *ngFor, é a utilização da programação dentro do html, isso é permitido pelo Angular. Significa então, que que eu to repetindo essas propriedades pra cada produto exibido na tela. // em routerlink = personalização do link. Eu faço com que quando eu navegar pela pagina o link seja alterado para xx.xx/product/id.

No **ngIf**, eu estou renderizando a descrição pra cada produto que tenha descrição.  

É aqui também que são criados os botões de share, e notify [os métodos definidos na Classe **ProductListComponent]**.

Em  **<app-product-alerts [product]="product" (notify)="onNotify()">
</app-product-alerts>** podemos observar a utilização de um selector de outro componente, e isso é possível porque o component está no **module.ts.** **Se nao tivesse no modulo eu não conseguiria acessar o componente.**

Então aqui a gente finalizou um componente, vamos para o proximo componente, o product-alerts.

---

No **src/app/product-alerts/product-alerts.component.ts** temos a classe ProductAlertsComponent composta pelos decorators Input e Output. A classe inicia com o input, que é usado para recebe dados do produto. E quando o produto estiver disponível, vai ser emitido um evento (output) que vai notificar o cliente de que o produto esta disponível.

no html do componente, em *ngIF eu estou impondo que o botão só vai ficar disponível para os produtos acima de $700 e estou atribuindo o metodo notify.emit ao botão notify.

---

Antes de ir pro proximo componente, vamos falar do **cart.service.ts.**

Nesse arquivo eu utilizo um decorator **@injectable** (injeção de dependência) é eu fazer com que o angular instancie pra mim essa classe de serviço automaticamente. E nessa classe **cartService** eu tenho os métodos: 

addToCart [*adiciona ao carrinho anexando o item solicitado a um array*] 

getItems [*pega os itens adicionados ao carrinho e retor cada um deles com a quantidade que foi solicitada*]

clearCart [*limpa o carrinho, retornando o array vazio*]

e por fim, o getShippingPrices olha pra rota e encontra o id do produto no array, exibindo os detalhes desse produto na tela.

---

No **product-details-component.html** em *ngIf Se produto, vai ser exibido o nome, preço e descrição.

no botão comprar, ele chama o método addToCart passando o produto em questão como parâmetro.

---

Em **cart-component.ts** na classe CartComponent eu to usando o método getItems do CartService, que serve para pegar os itens adicionados ao carrinho e retorna cada um deles em suas respectivas quantidades.

em seguida tempos um pequeno formulário de checkout que solicita nome e endereço. E quando o usuário clicar em submit, o carrinho é limpo e é exibido o alerta, informando que deu tudo certo resetando o checkoutform.

No html do componente, eu to utilizando routerlink pra que quando o usuario clique em checkout ele seja redirecionado para /shipping;

---

Finalizando no **shipping.component.ts**

**shippingCosts = this.cartService.getShippingPrices();** A propriedade só está pegando o valor de envio baseado no endereço, e isso também é um método do CartService. No **html** do componente estamos interpolando shipping.type e shipping.price pra exibir o tipo e preço da entrega.

---

Acredito que é isso, e vamos para o próximo projeto de aprendizado!

:)