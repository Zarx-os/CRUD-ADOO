import { useState,useEffect } from 'react';
import _ from "lodash"
import Latex from 'react-latex'; 
import "katex/dist/katex.min.css";
import Highcharts from 'highcharts';
import ztable from 'ztable';

export default function Graphics(){

    const [user, setUser] = useState(false);
    const [grafica,setGrafica]=useState({
        lowerBound:"",
        upperBound:"",
        stdDev:"",
        mu:""
    });
    const[zs,setZs]=useState({z1:0.0,z2:0.0});
    const [selected,setSelect]=useState("masmenos");
    
    
    let strings={a:`$P(${grafica.lowerBound}<X<${grafica.upperBound})=${(ztable(zs.z2)-ztable(zs.z1)).toFixed(4)}$`,
    b:`$P(X>${grafica.lowerBound})=${(1-ztable(zs.z1)).toFixed(4)}$`,
    c:`$P(X<${grafica.upperBound})=${(1-ztable(-zs.z2)).toFixed(4)}$`,
    d:` $\\color{black}\\text{Desde }\\mu=${grafica.mu} \\text{ y } \\sigma=${grafica.stdDev} \\\\\\\\
    P(${grafica.lowerBound}<X<${grafica.upperBound})
    =P(${grafica.lowerBound}-\\color{blue} ${grafica.mu} \\color{black} <X-\\color{blue}\\mu\\color{black}<${grafica.upperBound}-\\color{blue}${grafica.upperBound}\\color{black})
    =P(\\frac{${grafica.lowerBound}-${grafica.mu}}{\\color{blue}${grafica.stdDev}\\color{black}}<\\frac{X-\\mu}{\\color{blue}\\sigma\\color{black}}<\\frac{${grafica.lowerBound}-${grafica.mu}}{\\color{blue}${grafica.stdDev}\\color{black}})
    \\\\\\\\
    \\text{Desde }Z=\\frac{X-\\mu}{\\sigma},\\frac{${grafica.lowerBound}-${grafica.mu}}{${grafica.stdDev}}=${zs.z1} \\text{ y } \\frac{${grafica.upperBound}-${grafica.mu}}{${grafica.stdDev}}=${zs.z2}\\text{ nosotros tenemos:}\\\\\\\\
    P(${zs.z1}<Z<${zs.z2})=${(ztable(zs.z2)-ztable(zs.z1)).toFixed(4)}$`,
    e:`$\\text{Nosotros concluimos que} \\\\
    P(${zs.z1}<Z<${zs.z2})=${(ztable(zs.z2)-ztable(zs.z1)).toFixed(4)}$`,
    f:`$\\text{Desde }\\mu=${grafica.mu}\\text{ y }\\sigma=${grafica.stdDev}\\\\\\\\
    P(X>${grafica.lowerBound})
    =P(X-\\color{blue}\\mu\\color{black}>${grafica.mu}-\\color{blue}${grafica.mu}\\color{black})
    =P\\left(\\frac{X-\\mu}{\\color{blue}\\sigma\\color{black}}>\\frac{${grafica.lowerBound}-${grafica.mu}}{\\color{blue}${grafica.stdDev}\\color{black}}\\right)\\\\\\\\
    \\text{Desde }Z=\\frac{X-\\mu}{\\sigma} \\text{ y } \\frac{${grafica.lowerBound}-${grafica.mu}}{${grafica.stdDev}}=${zs.z1} \\text{ Nosotros tenemos:}\\\\\\\\
    P(X>${grafica.lowerBound})=P(Z>${zs.z1})$`,
    g:`$\\text{Desde }\\mu=${grafica.mu}\\text{ y }\\sigma=${grafica.stdDev}\\\\\\\\
    P(X<${grafica.upperBound})=P(X-\\color{blue}\\mu\\color{black}<${grafica.upperBound}-\\color{blue}${grafica.mu}\\color{black})
    =P\\left(\\frac{X-\\mu}{\\color{blue}\\sigma\\color{black}}<\\frac{${grafica.upperBound}-${grafica.mu}}{\\color{blue}${grafica.stdDev}\\color{black}}\\right)\\\\\\\\
    \\text{Desde }Z=\\frac{X-\\mu}{\\sigma} \\text{ y } \\frac{${grafica.upperBound}-${grafica.mu}}{${grafica.stdDev}}=${zs.z2} \\text{ Nosotros tenemos:}\\\\\\\\
    P(X<${grafica.upperBound})=P(Z<${zs.z2})$`,
    h:`$\\text{Usando la tabla normal concluimos que:}\\\\\\\\
    P(Z<${grafica.lowerBound})=${(1-ztable(zs.z1)).toFixed(4)}$`,
    i:`$\\text{Usando la tabla normal concluimos que:}\\\\
    P(Z<${grafica.upperBound})=${(1-ztable(-1*zs.z2)).toFixed(4)}$`


};


    let dta={x:"$\\text{X}$",mu:"$\\mu = $",sigma:"$\\sigma =$",Xx:"$<X<$",pmas:"$P(X>$",pmen:"$P(X<$"};
    let caracteres={a:"<",b:">"};
    const cambiarUser = () => {
        
        if(grafica.mu =="" ||grafica.stdDev=="")
        window.alert("No puedes continuar si faltan datos");
        else
        user?setUser(false):setUser(true);
    }

    useEffect(() => {
        if(user==true){


            setZs({
                z1:(parseFloat(grafica.lowerBound)-parseFloat(grafica.mu))/parseFloat(grafica.stdDev),
                z2:(parseFloat(grafica.upperBound)-parseFloat(grafica.mu))/parseFloat(grafica.stdDev)
            }
            );

            const normalY = (x, mean, stdDev) => Math.exp((-0.5) * Math.pow((x - mean) / stdDev, 2)) * 100000;

            const generatePoints = (lowerBound, upperBound) => {
            let min = lowerBound - 5 * parseInt(grafica.stdDev);
            let max = upperBound + 5 * parseInt(grafica.stdDev);
            let unit = (max - min) / 100;
            return _.range(min, max, unit);
            }

            
            let points = generatePoints(parseInt(grafica.lowerBound), parseInt(grafica.upperBound));


            let seriesData = points.map(x => ({ x, y: normalY(x, parseInt(grafica.mu) , parseInt(grafica.stdDev))}));

            new Highcharts.chart('myChart', {
                chart: {
                    type: 'area',
                    height: 300,
                },
                title: {
                    text: '',
                    y: 200,
                },
                yAxis: {
                labels: {
                    enabled: false,  	
                        },
                gridLineWidth: 0,
                title: ''
                },
                tooltip: {
                enabled: false,
                },
                legend: {
                    enabled: false,
                    },
                series: [{
                    data: seriesData,
                }],
                plotOptions: {
                    area: {
                    enableMouseTracking: false,
                    color: 'rgb(226, 119, 122)',
                    fillColor: 'rgba(226, 119, 122, 0.5)',
                    zoneAxis: 'x',
                    zones: [{
                    //fillColor gets the inside of the graph, color would change the lines
                    fillColor: 'white',
                    // everything below this value has this style applied to it
                    value: parseInt(grafica.lowerBound),
                },{
                    value: parseInt(grafica.upperBound),
                },{
                    fillColor: 'white',
                }]
                        }
                }
            });



    }
    }, [user])


    const handleChange = (e) => {
        const { name, value } = e.target;

        setSelect(value);
        
      }

      useEffect(()=>{


         if(selected==="masmenos"){
        document.querySelector("#masmenos1").removeAttribute("disabled");
        document.querySelector("#masmenos2").removeAttribute("disabled"); 
        document.querySelector("#mas").setAttribute("disabled",true);
        document.querySelector("#menos").setAttribute("disabled",true);
    }else if(selected==="mas"){
        if(document.querySelector("#mas")=="")
        document.querySelector("#masmenos1").setAttribute("disabled",true);
        document.querySelector("#masmenos2").setAttribute("disabled",true);
        document.querySelector("#mas").removeAttribute("disabled");
        document.querySelector("#menos").setAttribute("disabled",true);
        setGrafica({...grafica,upperBound:parseFloat(grafica.mu)+(3*parseFloat(grafica.stdDev))})

    }else if(selected==="menos"){
        document.querySelector("#masmenos1").setAttribute("disabled",true);
        document.querySelector("#masmenos2").setAttribute("disabled",true);
        document.querySelector("#mas").setAttribute("disabled",true);
        document.querySelector("#menos").removeAttribute("disabled");
        setGrafica({...grafica,lowerBound:parseFloat(grafica.mu)-(3*parseFloat(grafica.stdDev))})
    }
    
      }, [selected])
     



      const cambio= e=>{
          const {name,value}=e.target;
          setGrafica({...grafica,[name]:value});
      }

      const radioCambio=e=>{
        const {name,value}=e.target;
        setGrafica({...grafica,[name]:value});
      }
    return(
        <div className="chart">
            <h1>
                Calculadora de distribución normal
            </h1>
            <p>Si <Latex>{dta.x}</Latex> es una variable de distribución normal con media <Latex>{dta.mu}</Latex>
            <input type="number" min="0" id="mu" name='mu' step="0.01" required onChange={cambio}/> y la desviación estándar <Latex>{dta.sigma}</Latex> <input type="number" id="sigma" name="stdDev"min="0" step="0.01" onChange={cambio} required/>
            encuentre una de las siguientes probabilidades:
            </p>

            <div className="latex">
            <input type="radio"  name="proba" value="masmenos" checked={selected==="masmenos"} onChange={handleChange} />
            <label><Latex>$P($</Latex><input id="masmenos1" name='lowerBound' type="number" onChange={radioCambio}/><Latex>{dta.Xx}</Latex><input id="masmenos2" name='upperBound' type="number" onChange={radioCambio}/><Latex>$)$</Latex></label><br/>
            <input type="radio" name="proba" value="mas" checked={selected==="mas"} onChange={handleChange} />
            <label><Latex>{dta.pmas}</Latex><input id="mas" name='lowerBound' type="number" onChange={radioCambio}/><Latex>$)$</Latex></label><br/>
            <input type="radio" name="proba" value="menos" checked={selected==="menos"} onChange={handleChange}/>
            <label><Latex>{dta.pmen}</Latex><input  id="menos" name='upperBound' type="number" onChange={radioCambio}/><Latex>$)$</Latex></label>

           
            </div>
            {user? 

            selected=="masmenos"?

            <>
            <div className='TODO'>
            <hr/>
                <h4>Resultado:</h4><br/>
            <p className='respuesta'>
                <Latex>{strings.a}</Latex><br/>
            </p>
                <hr/>
                <h4>Explicación</h4>
                <h3>Paso 1: Dibujar la curva</h3>
                <p>La probabilidad de que <span>{grafica.lowerBound + caracteres.a + "X" + caracteres.a+grafica.upperBound}</span> es igual a la area que se encuentra de rosa</p>
                <div id="myChart"></div>
                <h3>Paso 2:</h3><br/>
                <div className='format'>

                <Latex>{strings.d}</Latex>
                </div>
                <h3>Paso 3:</h3><br/>
                <Latex>{strings.e}</Latex>
            <div className='n'>   
            <button onClick={cambiarUser}>Regresar</button>
            </div>
            </div>
            </>: 

            selected=="mas"?
            <>
            <div className='TODO'>
            <hr/>
                <h4>Resultado:</h4><br/>
            <p className='respuesta'>
                <Latex>{strings.b}</Latex><br/>
            </p>
                <hr/>
                <h4>Explicación</h4>
                <h3>Paso 1: Dibujar la curva</h3>
                <p>La probabilidad de que <span>{ "X" + caracteres.b+grafica.lowerBound}</span> es igual a la area que se encuentra de rosa</p>
                <div id="myChart"></div>
                <h3>Paso 2:</h3><br/>
                <div className='format'>

                <Latex>{strings.f}</Latex>
                </div>
                <h3>Paso 3:</h3><br/>
                <Latex>{strings.h}</Latex>
            <div className='n'>   
            <button onClick={cambiarUser}>Regresar</button>
            </div>
            </div>
            </>:
            selected=="menos"?
            <>
            <div className='TODO'>
            <hr/>
                <h4>Resultado:</h4><br/>
            <p className='respuesta'>
                <Latex>{strings.c}</Latex><br/>
            </p>
                <hr/>
                <h4>Explicación</h4>
                <h3>Paso 1: Dibujar la curva</h3>
                <p>La probabilidad de que <span>{ "X" + caracteres.a+grafica.upperBound}</span> es igual a la area que se encuentra de rosa</p>
                <div id="myChart"></div>
                <h3>Paso 2:</h3><br/>
                <div className='format'>

                <Latex>{strings.g}</Latex>
                </div>
                <h3>Paso 3:</h3><br/>
                <Latex>{strings.i}</Latex>
            <div className='n'>   
            <button onClick={cambiarUser}>Regresar</button>
            </div>
            </div>
            </>:
            console.log("Ocurrio un error")
            
            :
            <div className="comenzar">
                {console.log(grafica)}
                <button onClick={cambiarUser}>Calcular</button>   
  
            </div>}
        </div>
    )
}