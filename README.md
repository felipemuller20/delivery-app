# ✌️ Boas vindas ao repositório do App de Delivery!

Este projeto foi desenvolvido com o intuito de simular um aplicativo de delivery de bebidas!

Desenvolvido utilizando **React.js** no Front-end e **Node.js** pelo Back-end, com conexão à um banco de dados **MySQL** utilizando o ORM **Sequelize**.

Neste aplicativo, é possível acessar através do Login com 3 tipos diferentes de usuários:
_Customer_: Possibilita o usuário acessar as bebidas do aplicativo e realizar um pedido, adicionando as bebidas no carrinho de compras e realizando o checkout. Este usuário consegue visualizar todos os pedidos realizados por ele;

_Seller_: Possibilita o usuário verificar todos os pedidos que foram linkados ao seu nome (criados pelo _customer_) e dar sequência ao pedido, informando quando o pedido está sendo preparado e quando o pedido saiu para envio. Essa informação pode ser confiramda a qualquer momento pelo _customer_;

_Admin_: Possibilita a criação de novos usuários com diferentes tipos de poder (administradores, vendedores ou consumidores).

---

# ⚛️ Tecnologias utilizadas

**Back-end**
- MySQL com ORM Sequelize;
- Node.js utilizando o framework Express;
- Requisições HTTP utilizando a arquitetura REST;
- Jason Web Token para validação de login e usuário;
- MD5 Hash, para criptografar as senhas salvas no banco de dados.

**Front-end**
- React.js com Context API;
- Axios para realiar as requisições à API;

---

# ✍️ Habilidades desenvolvidas

- Manter aderência ao padrão REST na API;
- Relacionamento entre tabelas SQL via Sequelize;
- Requisições da API em Node utilizando Axios no front-end.

Além disso, neste projeto foi utilizado o ESLint, uma ferramenta para identificar divergências nos padrões de códigos JavaScript, garantindo as boas práticas no código e uma melhor legibilidade.

---

# 👀 Acessando o projeto

No seu terminal:

- `git clone git@github.com:felipemuller20/delivery-app.git`
- `npm install`;
- `npm run db:reset` - este comando irá criar o banco de dados e as tabelas utilizadas neste projeto, além de povoar o banco de dados com os seeders que estão definidos no Sequelize;
- `cd back-end`;
- `npm star`;
Abra um novo terminal, ainda neste projeto e digite:
- `cd ..`;
- `cd front-end`;
- `npm start`.

---

# 👥 Autores
- [Felipe Muller](https://github.com/felipemuller20)
- [Carolina Vasconcelos](https://github.com/carolvpinheiro)
- [Michael Peterson](https://github.com/michael-petterson-06)
- [Carol Bitencourt](https://github.com/Carol-Bitencourt)

