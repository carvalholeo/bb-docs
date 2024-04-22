import { lazy, Suspense } from "react";

import Loading from "../../components/Loading";

const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const HelmetWrapper = lazy(() => import("../../components/HelmetWrapper"));
const AnchorHTML = lazy(() => import("../../components/AnchorHTML"));
const Mark = lazy(() => import("../../components/Mark"));

function PrivacyPolicy() {
  return (
    <Suspense fallback={<Loading message="Carregando dados..." />}>
      <main>
        <HelmetWrapper
          title="Termos e privacidade"
          canonical="privacy"
          keywords="privacidade protestant bot, termos de uso protestant bot, regras protestant bot, regulamento protestant bot, privacidade bot lutero, termos de uso bot lutero, regras bot lutero, regulamento bot lutero"
          description="Eu sei, ninguém lê essa página, nem aguenta esse papo de advogado. Mas talvez você queira saber os seus direitos, o que pode ou não fazer comigo. Dá uma lida aqui."
        />
        <div className="container">
          <Breadcrumb message="Termos e privacidade" />

          <h1>Termos e privacidade</h1>
          <p>
            Fico feliz que você esteja interessado em entender a parte jurídica
            do no programa. O código do site, tem uma licença (uma espécie de
            contrato) específica. O funcionamento em si segue as regras abaixo.
          </p>
          <p>
            Tentei simplificar ao máximo os termos e cobrir a maior quantidade
            de casos possíveis. Mas espero que você entenda que isso é
            impossível. Por isso, se estiver em dúvida sobre alguma coisa nos
            termos de uso, por favor, me chama pra conversar.
          </p>
          <p>
            Inicialmente, preciso dizer que, ao usar usar o aplicativo de acordo
            com os critérios definidos abaixo,{" "}
            <Mark>você concorda integralmente com os termos.</Mark> Se você não
            concorda com algo, por gentileza, <Mark>NÃO USE O APP.</Mark>
          </p>

          <details>
            <summary>
              <h2 className="d-inline-block">Termos de uso</h2>
            </summary>
            <p>
              Este aplicativo tem como público-alvo pessoas aprovadas nos
              concursos do Banco do Brasil, ajudando-os a entender sua situação
              durante o processo de admissão.
            </p>
            <p>
              Todas as informações disponíveis aqui são públicas e não há, de
              qualquer maneira, informações privadas ou que estejam em
              desconformidade com o Código de Ética do Banco do Brasil, bem como
              suas normas internas.
            </p>
            <p>
              As informações aqui contidas podem ficar desatualizadas. Tenha
              isso em mente antes de tomar tudo como verdade. Em caso de
              dúvidas, consulte a Atendimento BB para Funcis.
            </p>
            <p>
              Este aplicativo não tem garantias de permanência no ar. Isso
              significa que pode ser retirado a qualquer momento, sem nenhum
              tipo de aviso prévio em nenhum lugar. Isso também significa que
              não serão aceitas nenhuma forma de reclamação ou indenização em
              caso de informações desatualizadas ou indisponíveis.
            </p>
            <p>
              Casos não cobertos ou omissos nesses termos de uso não significam
              proibição ou liberação. Tenha isso em mente e, em caso de dúvidas,
              entre em contato comigo. Em geral, use seu bom senso.
            </p>
          </details>

          <details>
            <summary>
              <h2 className="d-inline-block">Política de Privacidade</h2>
            </summary>
            <p>
              Este documento estabelece a política de privacidade deste serviço.
              Estou comprometidos com a proteção da privacidade e dos dados
              pessoais de nossos usuários. Em conformidade com as melhores
              práticas de segurança da informação e com a Lei Geral de Proteção
              de Dados (LGPD), declaro que nenhum dado pessoal dos usuários é
              transmitido para servidores externos.
            </p>

            <p>
              A única coleta de dados realizada em nosso serviço é a telemetria,
              que é estritamente utilizada para fins de análise e melhoria da
              experiência do usuário. Essa telemetria é processada através do
              <AnchorHTML
                href="https://plausible.io"
                target="_blank"
                rel="noreferrer noopener"
              >
                Plausible Analytics
              </AnchorHTML>
              , uma ferramenta de análise de dados respeitável e confiável, que
              é hospedada em meu próprio servidor, garantindo assim maior
              controle e segurança dos dados.{" "}
              <Mark>
                Todos os dados coletados são anônimos e não identificáveis.
              </Mark>
            </p>

            <p>
              O servidor fica localizado no Brasil, através da Oracle Cloud,
              também em conformidade com a LGPD. Durante seu acesso, este
              aplicativo pode acessar o servidor para tentar verificar se há
              atualizações.{" "}
              <Mark>Nenhum dado identificável é transmitido.</Mark>
            </p>

            <p>
              Os dados coletados por meio da telemetria são anônimos e não
              permitem a identificação individual dos usuários. Eles incluem as
              seguintes informações:
              <ul>
                <li>
                  origem do acesso (se foi direto ou através de outros sites),
                </li>
                <li>
                  página acessada (mais acessadas, página de entrada e de
                  saída),
                </li>
                <li>país de acesso,</li>
                <li>navegador,</li>
                <li>sistema operacional,</li>
                <li>tamanho aproximado da tela da tela, e</li>
                <li>indicadores do Web Core Vitals.</li>
              </ul>
              Essas informações são úteis para auxiliar na melhoria das
              informações do site, bem como em projetos de layouts específicos
              para cenários de maiores acessos. Todas as informações coletadas
              são anônimas e não rastráveis pela internet.
            </p>

            <p>
              Nenhum dado da telemetria é ou será vendido, é apenas usado por
              mim para melhoria do aplicativo.
            </p>

            <p>
              Esta política de privacidade está em plena conformidade com as
              leis e regulamentos aplicáveis de proteção de dados. Ela é
              continuamente revisada para garantir que ela atenda ou exceda os
              padrões da indústria e as expectativas dos usuários.
            </p>

            <p>
              Se tiver alguma dúvida ou preocupação sobre como seus dados são
              gerenciados, por favor, entre em contato comigo. Estou sempre
              disponível para fornecer esclarecimentos e garantir a sua
              tranquilidade em relação à segurança dos seus dados.
            </p>

            <p>
              Segundo a LGPD, você deve poder ter uma forma de exercer seus
              direitos conosco. Para exercer esses direitos previstos na LGPD ou
              nesta política de privacidade, por favor, entre em contato abaixo:
            </p>
            <ul>
              <li>Leonardo Carvalho</li>
              <li>
                <AnchorHTML
                  href="mailto:leo@leocarvalho.dev"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  leo@leocarvalho.dev
                </AnchorHTML>
              </li>
            </ul>
            <p>
              O prazo para resposta é de até 10 dias úteis, considerando os
              Feriados Nacionais para contabilizar esse prazo.
            </p>
          </details>

          <details className="mb-4">
            <summary>
              <h3 className="d-inline block">Informações legais</h3>
            </summary>
            <p>
              Esse site é feito com várias tecnologias. Abaixo, há uma lista das
              que estão sendo utilizadas
            </p>
            <ul>
              <li>
                <AnchorHTML
                  href="https://plausible.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Plausible Analytics
                </AnchorHTML>
                , sistema que coleta dados de acesso ao app
              </li>
              <li>
                <AnchorHTML
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Bootstrap
                </AnchorHTML>
                , framework que cria visual dos sites de forma rápida
              </li>
              <li>
                <AnchorHTML
                  href="https://icons.getbootstrap.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Bootstrap Icons
                </AnchorHTML>
                , biblioteca de ícones que não sejam emojis
              </li>
              <li>
                <AnchorHTML
                  href="https://create-react-app.dev/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Create React App
                </AnchorHTML>
                , estrutura que acelera a criação do app
              </li>
              <li>
                <AnchorHTML
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  React
                </AnchorHTML>
                , que torna o site o mais parecido com um app
              </li>
              <li>
                <AnchorHTML
                  href="https://twemoji.twitter.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Twemoji
                </AnchorHTML>
                , biblioteca que deixa todos os emojis do site no formato padrão
                do Twitter
              </li>
            </ul>
          </details>
        </div>
      </main>
    </Suspense>
  );
}

export default PrivacyPolicy;
