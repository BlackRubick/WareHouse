import Card from "../Card";
import '../src/assets/Style/Login.css'
function Registro() {
    
    const registro=[
      
         {
            tipo : "text" ,
            clase : "controls",
             nombre :"NickName" ,
             id : "NickName",
             placeholder:"Ingrese su Correo o Usuario"      
        },   {
            tipo :"password" ,
            clase :"controls" ,
             nombre :"Contraseña" ,
             id : "Contraseña",
             placeholder:"Ingrese su Contraseña"      
        }
        
    ]

    return ( 
        <>
        
            <section class="form-register">
            <h4>SingUp</h4>
            {registro.map((registro) => {
                return <Card tipo={registro.tipo} 
                clase={registro.clase} Nombre={registro.Nombre} 
                id={registro.id} placeholder={registro.placeholder}/>;
            })}
            <input class="boton" type="submit" value="SingUp"></input>
            <br /><br /><br /><br /><br /><br />
            </section>
        </>
     );
}

export default Registro;