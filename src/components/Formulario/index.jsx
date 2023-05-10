import { useEffect, useState } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState();
    let [materiaB, setMateriaB] = useState();
    let [materiaC, setMateriaC] = useState();
    let [nome, setNome] = useState(``);

    useEffect (() => {
        console.log("o component iniciou")

        return  () => {
            console.log("o component finalizou")
        }
    },[])


    useEffect (() => {
        console.log("o estado NOME mudou")
    },[nome])

    useEffect (() => {
        console.log("o estado materia  mudou")
    },[materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
                console.log(estadoAnterior)
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if (media >= 7) {
            return (
                <p>Você {nome} foi aprovado</p>
            )
        } else {
            return (
                <p>Você {nome} foi reprovado</p>
            )
        }
    }

    return (
        <form>
             <input type="tect" placeholder="nome aluno" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B " onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
            
        </form>
    )
}

export default Formulario