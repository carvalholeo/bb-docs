import { lazy, Suspense, useEffect, useContext } from "react";

import { useColorModeValue, useColorMode } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";

import Loading from "../../components/Loading";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import "./index.css";

const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const HelmetWrapper = lazy(() => import("../../components/HelmetWrapper"));
const AnchorHTML = lazy(() => import("../../components/AnchorHTML"));
const AnchorLink = lazy(() => import("../../components/AnchorLink"));

const steps = [
  {
    label: "Step 1",
    description: "This is the first step",
    component: AnchorHTML,
  },
  {
    label: "Step 2",
    description: "This is the second step",
    component: AnchorLink,
  },
  {
    label: "Step 3",
    description: "This is the third step",
    component: AnchorLink,
  },
  {
    label: "Step 4",
    description: "This is the third step",
    component: AnchorLink,
  },
];

function About() {
  const { isDark } = useContext(DarkModeContext);
  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0,
  });
  const isLastStep = activeStep === steps.length - 1;
  const hasCompletedAllSteps = activeStep === steps.length;
  const bg = useColorModeValue("gray.200", "gray.700");

  const { setColorMode } = useColorMode();

  useEffect(() => {
    if (isDark) {
      setColorMode("dark");
      return;
    }
    setColorMode("light");
  }, [isDark]);

  return (
    <Suspense fallback={<Loading message="Carregando dados..." />}>
      <main>
        <HelmetWrapper
          title="Página inicial"
          canonical="/"
          keywords="o que é bot lutero, detalhes bot lutero, o que é protestant bot, detalhes protestant bot"
          description="O BotLutero é um perfil no Twitter criado na Reforma Protestante de 2020 e dá RT em tweets sobre cristianismo, em especial todo dia 31 de outubro. Saiba mais!"
        />
        <div className="container clearfix">
          <Breadcrumb message="Página inicial" />
          <Flex flexDir="column" width="100%">
            <Steps
              onClickStep={(i) => {
                setStep(i);
              }}
              variant="circles"
              orientation="vertical"
              colorScheme="blue"
              activeStep={activeStep}
            >
              {steps.map(({ label, description, component }, index) => (
                <Step label={label} key={label} description={description}>
                  <Box
                    sx={{
                      p: 8,
                      bg,
                      my: 8,
                      rounded: "md",
                    }}
                  >
                    <Heading fontSize="xl" textAlign="center">
                      {component}
                      Step {index + 1}
                    </Heading>
                  </Box>
                </Step>
              ))}
            </Steps>
            {hasCompletedAllSteps && (
              <Box sx={{ bg, my: 8, p: 8, rounded: "md" }}>
                <Heading fontSize="xl" textAlign={"center"}>
                  Woohoo! All steps completed! 🎉
                </Heading>
              </Box>
            )}
            <Flex width="100%" justify="flex-end" gap={4}>
              {hasCompletedAllSteps ? (
                <Button size="sm" onClick={reset}>
                  Reset
                </Button>
              ) : (
                <>
                  <Button
                    isDisabled={activeStep === 0}
                    onClick={prevStep}
                    size="sm"
                    variant="ghost"
                  >
                    Prev
                  </Button>
                  <Button size="sm" onClick={nextStep}>
                    {isLastStep ? "Finish" : "Next"}
                  </Button>
                </>
              )}
            </Flex>
          </Flex>
        </div>
      </main>
    </Suspense>
  );
}

export default About;
