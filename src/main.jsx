import { StrictMode } from 'react' /*checkt fouten*/
import { createRoot } from 'react-dom/client' /*verbindt react met de DOM van de browser. door de componenten om te zetten als echte DOM elementen*/

import './index.css'
import { HashRouter } from "react-router-dom";
/*react-router-dom  zorgt ervoor dat je kunt navigeren tussen paginas zonder te relouden door route,routes, browserroute*/
import App from './App.jsx'





/* ALS 404 github pages krijg vervang browserrouter t hashroute. hashrouter is /#home/ bijv en github kan dit deze route vinden*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> 
    <App />
    </HashRouter>
  </StrictMode>,
)
