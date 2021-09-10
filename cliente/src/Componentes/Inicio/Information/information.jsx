import React from 'react';
import './information.css'

function Information(){
    return(
        <section className="content">
            <section className="Mantenimiento">
                <section className="icon-mantenimiento">
                    <img src={process.env.PUBLIC_URL + '/maintence.png'} alt="" />
                </section>
                <section className="texto-mantenimiento">
                    <section><h3>SERVICIOS DE MANTENIMIENTO</h3></section>
                    <section>El taller cuenta con servicios de mantenimiento para las motocicletas...
                    </section>
                </section>

            </section>
            <section className="Reparacion">
                <section className="icon-reparacion">
                    <img src={process.env.PUBLIC_URL + '/repair.png'} alt="" />
                </section>
                <section className="texto-reparacion">
                    <section><h3>SERVICIOS DE REPARACIÓN</h3></section>
                    <section>El taller cuenta con servicios de reparación para las motocicletas...
                    </section>
                    
                </section>

            </section>
            <section className="Piezas">
                <section className="icon-piezas">
                    <img src={process.env.PUBLIC_URL + '/change.png'} alt="" />
                </section>
                <section className="texto-piezas">
                    <section><h3>VENTA DE PIEZAS</h3></section>
                    <section>El taller cuenta con venta de piezas y repuestos para los diferentes modelos de 
                        motocicletas
                    </section>
                    
                </section>

            </section>
        </section>
    )
}

export default Information;