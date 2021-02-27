## Documentações
- [nodemailer](http://ethereal.email/)
- [handlebars](https://handlebarsjs.com/)
- [Cálculo do NPS](https://marketplace.magazineluiza.com.br/nps/?partner_id=31849&gclid=CjwKCAiA1eKBBhBZEiwAX3gqlxFH0-uD7L80vfdmFeIE1Vln4lIHyo2ctRz-pBFGiGV2ElifrqdebRoCaTYQAvD_BwE)
- [yup validation](https://www.npmjs.com/package/yup)

### iniciar a api 
### e no caso desta api também cria o banco de dados.
```!/bin/bash
$ yarn dev
```
## Typeorm

### criar um novo arquivo de migration com nome CreateUsers.

```!/bin/bash
$ yarn typeorm migration:create -n CreateUsers
```
### rodar todas as migrations pendentes.
```!/bin/bash
$ yarn typeorm migration:run
```
### reverter a última migration executada.
```!/bin/bash
$ yarn typeorm migration:revert
```

## Supertest
### testar a aplicação.
### flag ```-i```: Executar todos os testes em série no processo atual (em vez de criar um grupo de processos filhos que realizam testes).

```!/bin/bash
$ yarn test -i
```
