import { Suspense, lazy, useEffect, useState, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsTheme as Steps } from "chakra-ui-steps";

import "./_custom.scss";

import UserProfileProvider from "./contexts/UserProfileContext";
import { DarkModeContext } from "./contexts/DarkModeContext";
import history from "./services/history";

import Loading from "./components/Loading";
import NotificationToast from "./components/NotificationToast";

const Routes = lazy(() => import("./routes"));
const Footer = lazy(() => import("./components/Footer"));

const theme = extendTheme({
  components: {
    Steps,
  },
});

function App() {
  const { isDark } = useContext(DarkModeContext);
  const [notification, setNotification] = useState(false);
  const [darkMode, setDarkMode] = useState("");
  const [info, setInfo] = useState({
    title: "",
    message: "",
    className: "",
  });

  useEffect(() => {
    window.addEventListener("updatefound", () => {
      setInfo({
        title: "Atualização",
        message:
          "Há uma atualização pendente para o app. Para concluir, basta fechar todas as abas do app e entrar novamente (sem reabrir a aba anterior).",
        className: "primary",
      });
      setNotification(true);
    });
  }, []);

  useEffect(() => {
    if (isDark) {
      setDarkMode("bg-dark text-light");
      return;
    }
    setDarkMode("");
  }, [isDark]);

  return (
    <BrowserRouter history={history}>
      <div className={darkMode + " d-flex flex-column min-h-100"}>
        <Suspense fallback={<Loading content="Preparando menu..." />}>
          {notification && (
            <NotificationToast autoHide="false" data={info}>
              <div
                className="d-grid gap-2 d-md-block pt-1"
                style={{ zIndex: 3100 }}
              >
                <button
                  className="btn btn-dark btn-sm"
                  type="button"
                  data-bs-dismiss="toast"
                  onClick={(e) => setNotification(false)}
                >
                  Fechar
                </button>
              </div>
            </NotificationToast>
          )}
          <UserProfileProvider>
            <ChakraProvider theme={theme}>
              <Routes />
              <Footer />
            </ChakraProvider>
          </UserProfileProvider>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
