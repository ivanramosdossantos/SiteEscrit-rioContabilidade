# Nezi & Ecker Contabilidade — site institucional

Site estático, responsivo, sem backend ou dependências de build. As páginas usam HTML, CSS e JavaScript puro. Funciona em hospedagem estática, incluindo a Vercel.

## Executar

Abra `index.html` diretamente no navegador, ou rode um servidor local:

```bash
python -m http.server 8080
```

Acesse `http://localhost:8080`.

## Publicar na Vercel

Importe o repositório como projeto **Other** / estático, sem comando de build e com a pasta raiz como diretório de saída (`.`). Não é necessário instalar dependências.

## Configurações

- WhatsApp: em `script.js`, altere o número `5546999299254`, e no `index.html` confira também a chamada do cabeçalho e os textos visíveis.
- Instagram, localização, endereço e SEO: `index.html`.
- Serviços e mensagens por serviço: lista `SERVICES` no início de `script.js`.
- Fotografias: `assets/rayane.webp` e `assets/valquiria.webp`.
- Imagem de logomarca entregue: `assets/logo-original.webp` (preservada, não exibida devido à divergência do nome). Logo inclui a grafia **Nezi & Ecker**; o usuário informou posteriormente **Nezi & Ecker**. Confirmar identidade antes de publicar. O cabeçalho usa um wordmark tipográfico provisório, sem pretender substituir oficialmente a marca.

## Pendências de conteúdo antes da publicação

1. Confirmar grafia final da marca: a imagem diz **Nezi & Ecker** e o nome informado foi **Nezi & Ecker**.
2. Confirmar endereço completo na Rua Paraná, 190, 2º andar, Pato Branco/PR; link Maps recebido é uma referência Street View, não confirmação postal.
3. Aprovar textos de apresentação das sócias; estão identificados como provisórios.
4. Fotografia da Valquíria apresenta logotipo **CONT&GO** e fundo de outro escritório: validar uso comercial dessa fotografia. Nenhum logotipo foi alterado digitalmente.
5. Verificar autorização de uso e qualidade das duas fotografias.

## Privacidade

Não há formulários, coleta de dados pelo próprio site, cookies próprios ou analytics. Ao clicar em WhatsApp/Instagram/Maps, o usuário acessa sites externos.

## Repositório informado

`https://github.com/ivanramosdossantos/SiteEscrit-rioContabilidade.git`

Nenhuma operação Git foi realizada.


## GitHub Pages

O workflow `.github/workflows/pages.yml` publica automaticamente a branch `main`. Em Settings > Pages escolha GitHub Actions como source.
