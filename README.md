## Documentações
- [nodemailer](http://ethereal.email/)
- [handlebars](https://handlebarsjs.com/)
- [Cálculo do NPS](https://marketplace.magazineluiza.com.br/nps/?partner_id=31849&gclid=CjwKCAiA1eKBBhBZEiwAX3gqlxFH0-uD7L80vfdmFeIE1Vln4lIHyo2ctRz-pBFGiGV2ElifrqdebRoCaTYQAvD_BwE)
- [yup validation](https://www.npmjs.com/package/yup)

### iniciar a api 
### e no caso desta api também cria o banco de dados.
```bash
$ yarn dev
```
## Typeorm

### criar um novo arquivo de migration com nome CreateUsers.

```bash
$ yarn typeorm migration:create -n CreateUsers
```
### rodar todas as migrations pendentes.
```bash
$ yarn typeorm migration:run
```
### reverter a última migration executada.
```bash
$ yarn typeorm migration:revert
```

## test
### testar a aplicação.
### flag ```-i```: Executar todos os testes em série no processo atual (em vez de criar um grupo de processos filhos que realizam testes).

```yarn test -i```

obs.: a flag -i foi colocada no script do package.json, portanto o comando é:

```bash
$ yarn test
```
