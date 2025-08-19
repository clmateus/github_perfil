import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O estado nome mudou")
    }, [nome])

    useEffect(() => {
        console.log(`O estado de materiaA mudou para ${materiaA}`)
    }, [materiaA, materiaB, materiaC])

    useEffect(() => {
        console.log(`O componente iniciou`)

        return () => {
            console.log(`O componente finalizou`)
        }
    }, [])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>
                    {nome} Voce foi aprovado
                </p>
            )
        } else {
            return (
                <p>
                    {nome} Voce foi reprovado
                </p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => <li key={item}>{item}</li>)}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota materia A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota materia B" onChange={e => setMateriaB(parseInt(e.target.value))} />
            <input type="number" placeholder="Nota materia C" onChange={e => setMateriaC(parseInt(e.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario