---
description: Frontend Dev
---

# Instruções do Agente React

Você opera dentro de uma arquitetura de 3 camadas projetada para construir aplicações React confiáveis, escaláveis e estritamente tipadas. Modelos de linguagem (LLMs) podem ser inconsistentes em escolhas arquiteturais; este sistema impõe uma abordagem estrita e determinante para o desenvolvimento frontend.

## A Arquitetura de 3 Camadas

**Camada 1: Diretiva (As Diretrizes)**
- SOPs (Procedimentos Operacionais Padrão) escritos em Markdown, localizados em `directives/` (ex: `directives/componentizacao.md`, `directives/integracao_api.md`).
- Definem os padrões arquiteturais, convenções de nomenclatura e formas específicas de implementar funcionalidades usando nossa stack.

**Camada 2: Orquestração (Tomada de Decisão)**
- Este é você (o Agente). Seu trabalho: estruturação inteligente e integração.
- Ler as diretivas, entender a funcionalidade solicitada, planejar a árvore de componentes, gerenciar o fluxo de estado e executar a geração de código.
- Você é a ponte entre a intenção de UI/UX do usuário e a base de código determinística.

**Camada 3: Execução (A Base de Código e Ferramental)**
- O ambiente React determinístico alimentado pelo **Vite**.
- Todo o código deve aderir estritamente à stack de tecnologia definida: **React, TypeScript, Vite, Tailwind CSS, Zustand, Axios, React-Router, Zod, React-Toastify e Lucide Icons**.
- Código confiável, fortemente tipado, validado por schemas e sem erros de lint.

---

## Stack de Tecnologias Obrigatória e Regras

Ao gerar ou modificar código, você deve utilizar exclusivamente as seguintes tecnologias:

* **Vite**: O bundler/ferramenta de build. Sempre use `import.meta.env.VITE_...` para variáveis de ambiente, NUNCA `process.env`.
* **TypeScript & Zod**: O modo estrito (`strict`) está sempre ativado. Use o **Zod** para definir schemas de respostas de API e dados de formulários. Infira tipos TypeScript diretamente dos schemas do Zod (ex: `type User = z.infer<typeof userSchema>`). Não use `any`.
* **React-Router**: Usado para toda a navegação/roteamento. Utilize os hooks modernos (`useNavigate`, `useParams`, `useLocation`).
* **Tailwind CSS**: Use classes utilitárias para toda a estilização. Evite arquivos CSS customizados.
* **Zustand**: Usado para todo o gerenciamento de estado global. Mantenha as stores modulares (ex: `useAuthStore`).
* **Axios**: Usado para todas as chamadas de API externas através de instâncias centralizadas em `src/services/api.ts` para lidar com interceptors (como tokens de autenticação).
* **React-Toastify**: Capture erros na UI ou na camada de API e exiba-os usando `toast.error()`, `toast.success()`, etc.
* **Lucide Icons**: A única biblioteca de ícones permitida (ex: `import { ChevronRight } from 'lucide-react'`).

---

## Filosofia de Componentização Explícita

Você deve separar as responsabilidades de forma estrita. Nunca crie componentes massivos ou monolíticos. Siga o padrão **Smart vs. Dumb (Container vs. Apresentação)**:

### 1. Componentes Bobos (Dumb / Apresentação)
* **Objetivo:** Renderizar a interface gráfica e emitir eventos. Eles não sabem *nada* sobre lógica de negócios, chamadas de API ou estado global.
* **Regras:** Recebem dados estritamente via `props`. Emitem ações via funções de callback (ex: `onClick`, `onSubmit`). Dependem fortemente do Tailwind para estilização.
* **Onde ficam:** `src/components/`

### 2. Componentes Inteligentes (Smart / Containers / Features)
* **Objetivo:** Lidar com a lógica de negócios, busca de dados e estado.
* **Regras:** Chamam os serviços do Axios, leem/escrevem nas stores do Zustand, validam dados com o Zod e passam os dados resultantes para os Componentes Bobos via props.
* **Onde ficam:** `src/features/`

### 3. Páginas (Entradas de Rota)
* **Objetivo:** Montar as features e layouts para uma rota de URL específica.
* **Regras:** Leem parâmetros de URL via React-Router, lidam com a autorização nível de página e compõem os componentes de features.
* **Onde ficam:** `src/pages/`

---

## Estrutura de Diretórios Obrigatória

Você deve respeitar e manter rigorosamente a seguinte organização de pastas:

```text
src/
├── components/     # Componentes de UI globais, reutilizáveis e "bobos" (Buttons, Modals, Inputs)
├── features/       # Módulos específicos por domínio (ex: features/auth/, features/produtos/)
│   └── [feature]/  # Cada feature tem seus próprios components, hooks, schemas (Zod) e utils
├── layouts/        # Wrappers de página (ex: DashboardLayout.tsx com Sidebar e Header)
├── pages/          # Componentes de alto nível mapeados para o React-Router
├── routes/         # Configuração de rotas do React-Router (AppRouter.tsx)
├── services/       # Instâncias do Axios e definições de endpoints de API
├── store/          # Stores globais do Zustand
├── types/          # Definições globais do TypeScript (prefira inferir do Zod quando aplicável)
└── utils/          # Funções auxiliares puras, formatadores e constantes

Para validar e testar sempre rode npm run build
Sempre me pergunte se houver duvidas
Faça bom uso do implentation plan! Extremamente importante