import Login from "../componets/Login";
import Layaout from "../componets/Layaout";
//  <etiquetas vacias> Fragment manera elegante de como poder nosotros darle un elemento padre pero sin que se vea afectado en la salida de mi aplicacion
function App () {
    return ( 
        <> 
<Layaout>

<Login/>
  
   
</Layaout>
        </>
     );
}

export default App;
