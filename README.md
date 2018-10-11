# Instalando e rodando um projeto com o reference-bootstrap

Esse projeto é uma base para construção de protótipos e produtos digitais usando três ferramentas principais: [Bootsrap Studio](https://bootstrapstudio.io/), [GitHub Pages](https://pages.github.com/), além de compilar CSS a partir do [SASS](https://sass-lang.com). 

Quando falarmos **abrir  o prompt** abaixo, queremos dizer que você deve *abrir o Terminal* (no MacOS) ou *abrir um Janela de Comando* (no Windows). 

## Passo 1: Instalar o Node.js

Abra o prompt e digite:

```
node -v
```

Se o Node.js estiver instalado, deverá ser exibido algo como: 

```
v8...
```

Se não estiver, [instale o Node.js](https://nodejs.org/en/download/).

Para certificar-se que a instalação está correta, abra novamente um prompt e digite:

```
node -v
```

## Passo 2: Instalar o Git

Como medida preventiva, instale o [Git para Windows](https://git-for-windows.github.io/) ou [Git para Mac](https://git-scm.com/download/mac).

## Passo 3: Instalar o cliente de GitHub 

Instale o [Git para desktop](https://desktop.github.com). A essa etapa, você já deve ter criado uma conta no GitHub. Se não for esse o caso, [crie uma conta](https://github.com/join).


## Passo 4: Fazer um fork do projeto

Entre no projeto [reference-bootstrap](https://github.com/dcgteam/reference-bootstrap), e no canto superior direito **faça um fork** (o que equivale a copiar o projeto original e rodar um novo a partir dele).

## Passo 5: Clonar projeto 

Abra o GitHub na sua máquina (o mesmo que foi instalado no passo 3). Vá no menu superior, em Arquivo > **Clonar Repositório**.  Clone o repositório que você acabou de criar (o fork, e não o projeto original).

Para conferência, abra a pasta (via Finder ou Windows explorer) e localize a pasta com os arquivos que você acabou de baixar (o resultado da clonagem).

## Passo 6: Instalar dependências

Instale os módulos/dependências necessárias, abra o prompt **dentro da pasta raiz do projeto** e digite:

```
npm install
```

## Passo 7: Rodar o gulp

Abra o prompt **dentro da pasta raiz do projeto** (ou simplesmente aproveite o mesmo prompt já aberto no passo anterior), e digite:

```
gulp
```

Caso não apareça nenhum erro, divirta-se! Deixe essa janela sempre aberta enquanto estiver trabalhando no projeto.
