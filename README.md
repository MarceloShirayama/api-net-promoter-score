```!/bin/bash
# inicia a api 
# e no caso desta api também cria o banco de dados.

$ yarn dev
```

```!/bin/bash
# cria um novo arquivo de migration com nome CreateUsers.

$ yarn typeorm migration:create -n CreateUsers
```

```!/bin/bash
# roda todas as migrations pendentes.

$ yarn typeorm migration:run
```

```!/bin/bash
# reverte a última migration executada.

$ yarn typeorm migration:revert
```

```!/bin/bash
# testa a aplicação.

$ yarn test -i
```
