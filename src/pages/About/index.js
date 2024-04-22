import { lazy, Suspense } from 'react';

import Loading from "../../components/Loading";

const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const HelmetWrapper = lazy(() => import("../../components/HelmetWrapper"));
const AnchorHTML = lazy(() => import("../../components/AnchorHTML"));
const Mark = lazy(() => import("../../components/Mark"));

function ReleaseNotes() {
  return (
    <Suspense fallback={<Loading message="Carregando dados..." />}>
      <main>
        <HelmetWrapper
          title="Sobre"
          canonical="sobre"
          keywords="sobre bb docs, quem criou bb docs, nova versão bb docs, histórico bb docs, código fonte bb docs, release notes bb docs"
          description="Já passei por muitas mudanças e melhorias. Aqui, você tem uma ideia do que aconteceu ao longo do tempo, com um resumo das principais mudanças e atualizações. Saiba mais!"
        />
        <div className='container pb-4'>
          <Breadcrumb message="Sobre" />
          <h1>Sobre o projeto</h1>
          <p>Nesta página, você encontra todas as informações sobre o projeto e sobre as atualizações realizadas no app. Mais detalhes podem ser obtidos abaixo nos títulos das seções abaixo, que levará ao acesso do código-fonte e seu histórico detalhado.</p>

          <h2>Motivações</h2>
          <p>Eu sou apenas mais uma pessoa aprovada no concurso 01/2022 do Banco do Brasil que, após ajudar muitas pessoas nos grupos de WhatsApp e Telegram, percebi que as pessoas estavam com dificuldade em conseguir organizar sua documentação para que, quando o banco os chamassem, pudessem enviar tudo da forma mais rápida possível.</p>
          <p>Assim, reaproveitando código de um projeto anterior que eu tinha e aproveitando que ainda há turmas a serem chamadas (e rumores de outros concursos), decidi criar esse mini-app.</p>

          <h2>Aviso</h2>
          <p>Embora eu tente manter tudo sempre organizado, nem sempre é possível garantir que as informações estejam tecnicamente corretas e atualizadas. Em caso de dúvida, lembre-se: <Mark>VALE O DOCUMENTO QUE O BANCO ENVIOU.</Mark></p>
          <p>Lembre-se sempre que os dados aqui são de um projeto pessoal paralelo.</p>
          <p><Mark>Este projeto não é gerenciado pelo Banco do Brasil, nem tem nenhuma afiliação com o banco. As informações aqui contidas podem ser imprecisas e incorretas. O Banco do Brasil não tem nenhuma responsabilidade sobre as informações aqui divulgadas.</Mark></p>

          <hr />
          <h2><AnchorHTML href="https://github.com/carvalholeo/bb-docs" target="_blank" rel="noreferrer noopener">Histórico do app</AnchorHTML></h2>

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
