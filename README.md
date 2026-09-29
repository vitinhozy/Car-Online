# CAR ON LINE — MVP para GitHub Pages

Demonstração estática, responsiva e navegável em EN/PT/ES. Mantém o visual, vídeo, imagens, catálogo, filtros, detalhes, formulários, uploads e painel demonstrativo da versão original.

## Publicar pelo site do GitHub — sem instalar nada

1. Extraia este ZIP no computador.
2. Crie ou abra o repositório de destino no GitHub.
3. Envie os arquivos e pastas extraídos para a raiz do repositório. **Não envie apenas o ZIP.** A pasta `docs` deve ficar na raiz, e não dentro de outra pasta `car-on-line-pages`.
4. Abra **Settings → Pages**.
5. Em **Build and deployment → Source**, selecione **Deploy from a branch**.
6. Selecione a branch **main** (ou a branch em que enviou os arquivos) e a pasta **/docs**. Salve.
7. Aguarde a publicação. O GitHub mostrará o endereço em Pages.

A pasta `docs` já está compilada e pronta. Também é possível enviar **somente o conteúdo de `docs` para a raiz de um repositório** e escolher a pasta **/(root)** em Pages.

Exemplo de endereço: `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/#/en`.

Não é necessário editar o nome do repositório no código: os recursos usam caminhos relativos. As rotas usam `#/` para funcionar ao abrir links diretos, atualizar a página e usar os botões voltar/avançar do navegador.

## Atualizações automáticas a partir do código

O arquivo `.github/workflows/pages.yml` pode recompilar e publicar o projeto ao enviar alterações para `main`. Para usar essa alternativa, selecione **GitHub Actions** como Source em Settings → Pages. O workflow precisa estar incluído no repositório; não é necessário usar os dois métodos de publicação ao mesmo tempo.

Se usar publicação pela branch `/docs`, depois de alterar o código execute `pnpm build` e envie também os arquivos atualizados de `docs`.

## O que o cliente consegue testar

- Página inicial, vídeo otimizado, serviços e animações.
- Idiomas inglês, português e espanhol.
- Veículos e serviços, filtros e ordenação, detalhes e solicitação.
- Painel: clique em **Administration / Administração** no rodapé e depois em **Entrar no painel demonstrativo**. Não existe senha real.
- Criar, editar, excluir, ativar e destacar registros, gerenciar parceiros, categorias, banners, depoimentos e textos da página inicial.
- Enviar uma solicitação com dados fictícios e consultá-la em **Leads / Solicitações**, no mesmo navegador.
- Alterar o status dos pedidos e anexar arquivos de teste.
- Restaurar os dados iniciais em **Administração → Configurações → Restaurar demonstração**.

## Diferenças necessárias da versão completa

Esta versão **não se conecta ao servidor original**. Os registros e anexos de teste ficam apenas no **IndexedDB do navegador**. Nenhum pedido é enviado à empresa. Não há autenticação segura, usuários reais, banco compartilhado, sincronização entre dispositivos ou entrega de e-mails. O painel é demonstrativo e está disponível a qualquer visitante.

As alterações feitas pelo cliente são visíveis apenas no navegador dele. Limpar os dados do site ou usar outro navegador retorna ao catálogo inicial. Em navegação privada ou quando o armazenamento está cheio/bloqueado, o salvamento pode falhar e a interface informa o erro.

Use dados fictícios. O código e as imagens publicados são acessíveis aos visitantes. Não inclua senhas, chaves nem dados reais de clientes no repositório.

A busca por raio mantém os seis ZIP Codes de demonstração da versão original: 33101, 32801, 33602, 90001, 10001 e 75201. Outros ZIPs fazem apenas correspondência exata; não existe integração nacional de geolocalização.

## Desenvolvimento local

Node.js 22.13+ e pnpm 11.25.0:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

Abra o endereço exibido pelo servidor. Não abra `index.html` diretamente pelo explorador de arquivos, pois os módulos precisam ser servidos via HTTP.

`docs/` é a saída de publicação. `main.tsx`, `components/`, `lib/`, `app/globals.css` e `public/` são os fontes. O adaptador local `lib/demo-store.ts` preserva as operações do painel sem servidor.

## Versão original preservada

A versão completa continua em https://car-on-line.victorrodrigo04.chatgpt.site, com o backend, armazenamento e acesso administrativo originais. Esta cópia não modifica o site original nem seus dados.

Referência de recuperação do código original: commit `8de5c5d54fc2afb9ee7ffb27b62c54477afaf73a` da versão publicada em 28/09/2026. O código original permanece no histórico do projeto CAR ON LINE.

## Documentação oficial

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

Créditos das imagens e vídeo: `ASSET_CREDITS.md`.

## Verificações desta entrega

- Compilação estática e TypeScript aprovados.
- Operações do adaptador local verificadas com IndexedDB emulado: dados iniciais, validação, criação de pedidos, troca de status, cadastro/edição/desativação/exclusão de veículos, anexos após reabertura e restauração.
- Caminhos de imagens e recursos verificados para publicação em subpasta de repositório.
- Não foi executado teste visual em navegador nesta entrega.
