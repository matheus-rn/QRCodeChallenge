## Sobre o desafio

Nesse desafio você deve criar uma aplicação para treinar Node.js junto ao Typescript, sinta-se livre para utilizar controllers, services ou qualquer conceito que achar necessário.

Essa será uma aplicação para simular de forma bem simples a geração de um qrcode para pagamento de débitos via PIX.

## Template da aplicação

Para te ajudar nesse desafio, criamos nesse repositório um modelo que você deve utilizar como um template do Github.

Após criar seu repositório a partir desse template e clona-lo em sua máquina, utilize os seguintes comandos para ver se tudo está rodando corretamente:

- Para instalar as dependencias `yarn` ou `npm install`
- Para rodar em modo desenvolvimento `yarn dev:server` ou `npm run dev:server`

## Rotas da aplicação

Agora que você já está com o template clonado, e pronto para continuar, você deve verificar os arquivos da pasta src e completar onde não possui código com o código para atingir os objetivos de cada rota.

- **`POST /transactions`**: A rota deve receber `payerIdentifier`, `value` e `recieverIdentifier` dentro do corpo da requisição, sendo `payerIdentifier` o identificador do pagador, `recieverIdentifier` o identificador do recebedor e `value` o valor da transação. Ao criar uma nova transação ela deve gerar uma `qrCodeString` que é uma string codificada gerada a partir das informações recebidas na rota.

**Exemplo de corpo da requisição**:

```json
{
  "payerIdentifier": "51101547081",
  "value": 500,
  "recieverIdentifier": "04396243049"
}
```

**Exemplo de retorno**:

```json
{
  "qrCodeString": "$2a$10$fIxPB0Ls3c2U.JzH/VyDs.D1A58JdC5BGQeRTeeEWYDDCJQeJSoiq",
}
```

**Dica**: você pode utilizar a função core do Node.js `JSON.stringfy` para transformar o corpo da requisição(JSON) em uma string.
**Dica 2**: você pode utilizar a lib `bcryptjs` para codificar uma string.


## Especificação dos testes

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Para esse desafio temos os seguintes testes:

- **`should be able to generate a new qrcode`**: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a string do qrcode.

Sempre que desejar rodar os testes da aplicação você pode utilizar o comando `yarn test` ou `npm run test`.

## Prazo de entrega

O prazo de entrega do desafio é até o dia 17/09 às 15h.
