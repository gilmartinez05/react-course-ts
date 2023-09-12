import { useEffect, useState } from "react"
type Props = {
    initial: number
}
export default function Counter(props: Props) {


    const [count, setCount] = useState(props.initial)
    const [countPressed, setCountPressed] = useState(0)

    const handleCounter = (option: '+' | '-') => {
        if (option == '+') {
            setCount((prev) => {
                return prev + 1
            })
        }
        else {
            setCount(count - 1)
        }
        setCountPressed((prev) => prev + 1)
    }

    //Cuando el componente se renderiza
    useEffect(() => {
    }, [])

    //Actualizamos el estado de nuestra aplicacion
    useEffect(() => {



    }, [count])

    //Destruye el componente
    useEffect(() => {
        return () => {
            console.log("Mi componente se desmonto")
        }
    }, [])

    return (
        <>
            <button onClick={() => handleCounter('+')}>+</button>
            <input value={count} />
            <button onClick={() => handleCounter('-')}>-</button>

            <p>Cuantas veces se ha cambiado el contador: {countPressed}</p>
        </>)
}