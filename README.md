# Sistema de Vendas

Esse projeto representa o frontend de um sistema de vendas para um estabelecimento qualquer

O backend para esta aplicação se encontra em:

https://github.com/fmanechini/sistemaVendasBackend

O projeto foi desenvolvido utilizando JavaScript e React/Redux.

## O sistema permite:
  - Cadastro de Clientes
  - Cadastro de Vendedores
  - Cadastro de Produtos ou Serviços com seus preços e comissões
  - Cadastro de Vendas com Data da venda, vendedor e cliente associados, produtos e quantidades

## Algumas particularidades do sistema:
  - As comissões de um Produto ou serviço devem ter entre 0 e 10% de comissão
  - Vendas ocorridas entre 00:00 e 12:00 a comissão de cada item deve ser no máximo 5%
  - Vendas ocorridas entre 12:00:01 e 23:59:59 a comissão de cada item deve ser no mínimo 4%

# Instruções para utilização do Projeto:

Na pasta raiz do projeto executar

### Instalação de Dependencias

``` npm install ```

### Inicial Aplicação

``` npm start ```