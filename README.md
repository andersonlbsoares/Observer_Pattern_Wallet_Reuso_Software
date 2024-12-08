## Informações da Atividade

### Padrão de Projeto:

Observador (Observer Pattern)

### Problema:

Precisamos garantir que múltiplos objetos (observadores) sejam automaticamente notificados e atualizados sempre que o estado de um objeto principal (sujeito) mudar, sem criar um acoplamento rígido entre eles. No nosso caso, isso é usado para atualizar automaticamente os valores de moedas diferentes em uma carteira.

### Consequência:

O padrão promove o desacoplamento entre os objetos, permitindo maior flexibilidade e reutilização. Porém, muitos observadores podem levar a notificações excessivas, é preciso avaliar cada situação para ver se esse padão é realemnte necessário.

### Linguagem:

Usei o JavaScript ES6 que trouxe a implementação de class e extends tornando mais legível os codigos em OO.

## Descrição do Projeto

Este projeto é um exemplo prático do <b>Padrão de Projeto Observador</b>, implementado em JavaScript. O objetivo é demonstrar como usar esse padrão para desacoplar classes de modelo e interface, facilitando a expansão e reutilização do código.

### Imagine um sistema que controla uma carteira de moedas com as seguintes funcionalidades:

- Monitora o saldo em diferentes moedas (dólar, euro, real).
- Atualiza automaticamente os valores convertidos quando o saldo mudar.
- Desacopla a lógica da carteira da forma como os dados são exibidos, permitindo futuras implementações de interfaces diferentes (por exemplo, visualizações gráficas).

### Explicação da estrutura

A classe Wallet (sujeito) notifica os observadores (DollarObserver, EuroObserver, RealObserver) quando o saldo é alterado.
Cada observador é responsável por exibir a conversão correspondente.

### Arquivos

- Subject.js: Classe base para gerenciamento de observadores.
- Wallet.js: Classe que armazena e notifica as alterações no saldo.
- Observers.js: Contém as implementações dos observadores.
- main.js: Configura os objetos e executa o exemplo.

### Como Executar

- Clone este repositório.
- Certifique-se de ter o Node.js instalado.
- Execute o comando: node main.js ou npm start
- Observe no console as saídas atualizadas para dólar, euro e real.

#### Saída Esperada

Saldo em Dólares: $ 100.00 \\
Saldo em Euros: € 94.00 \\
Saldo em Reais: R$ 520.00
