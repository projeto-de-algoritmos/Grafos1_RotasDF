# Grafos 1 

## Rotas DF

Número da Lista: 1  
Conteúdo da Disciplina: Grafos

## Alunos

**Matrícula** | **Aluno** 
:-----------: | :---------:
16/0022673    | Ailamar Alves Guimarães
17/0080307    | Matheus Amaral Moreira

## Sobre

O objetivo do projeto é criar uma aplicação utilizando os conhecimentos sobre Grafos adquiridos nas aulas, para isso pensamos em algo bem conhecido do dia-a-dia das pessoas que 
são os apps de serviço de pesquisa de mapas e rotas. Devido ao prazo de entrega, limitamos nosso escopo em cidades apenas do Distrito Federal. Nossa aplicação consiste em retornar ao usuário o melhor caminho entre uma região administrativa e outra, de acordo com a distância, tempo e também em relação às regiões vizinhas.

## Screenshots
Adicione 3 ou mais screenshots do projeto em funcionamento.

## Instalação 
**Linguagem**: JavaScript <br>
**Framework**: Node JS <br>

Nosso projeto usa apenas NodeJS e um arquivo HTML como motores.

1. Abra um terminal na pasta que vai ficar os arquivos e faça o clone do repositorio do GitHub para sua máquina:
```
$ git clone https://github.com/projeto-de-algoritmos/Grafos1_RotasDF.git
```

2. Segundo passo entrar na pasta do repositório e instalar as dependências do NodeJS (para isso você deve ter o NodeJS instalado):
```
$ cd ./Grafos1_RotasDF
$ npm install
```

3. Inicie o seu servidor NodeJs com o comando:
```
$ node .
```

4. Vá na pasta 'front' do repositório e abra o index.html

## Uso 
Selecione uma cidade no primeiro bloco, selecione uma cidade no segundo bloco e clique em pesquisar. O resultado vai ser uma boa rota da origem até o destino.

## Outros 
Por usar apénas BFS e DFS, não é possível a análise usando pesos de distância, assim, não calculando o melhor caminho real, e sim, o melhor caminho do grafo sem pesos.

Para aperfeiçoar a resposta para o melhor caminho, devemos utilizar uma das funções do módulo Grafos 2.




