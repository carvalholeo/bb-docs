import { lazy, Suspense } from 'react';

import Loading from "../../components/Loading";

const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const HelmetWrapper = lazy(() => import("../../components/HelmetWrapper"));
const AnchorHTML = lazy(() => import("../../components/AnchorHTML"));

function ReleaseNotes() {
  return (
    <Suspense fallback={<Loading message="Carregando dados..." />}>
      <main>
        <HelmetWrapper
          title="Histórico das versões"
          canonical="releasenotes"
          keywords="release notes bot lutero, release notes protestant bot, nova versão protestant bot, histórico protestant bot, código fonte protestant bot, código fonte bot lutero"
          description="Já passei por muitas mudanças e melhorias. Aqui, você tem uma ideia do que aconteceu ao longo do tempo, com um resumo das principais mudanças e atualizações. Saiba mais!"
        />
        <div className='container pb-4'>
          <Breadcrumb message="Histórico das Versões" />
          <h1>Histórico das versões - Release Notes</h1>

          <p>Nesta página, você encontra todas as informações sobre atualizações realizadas no sistema. Mais detalhes podem ser obtidos abaixo nos títulos das seções abaixo, que levará ao acesso do código-fonte e seu histórico detalhado.</p>
          <h2><AnchorHTML href="https://github.com/carvalholeo/protestant-bot-front" target="_blank" rel="noreferrer noopener">Histórico do app</AnchorHTML></h2>

          <details>
            <summary>04 de abril de 2021</summary>
            <ul>
              <li>Versão inicial - 0.1</li>
              <ul>
                <li>Nessa primeira versão, foram liberados no site a opção de bloquear e desbloquear um perfil, a história e motivação do bot, termos de uso e meios de contato com o desenvolvedor.</li>
              </ul>
            </ul>
          </details>
        </div>
      </main>
    </Suspense>
  );
}

export default ReleaseNotes;
