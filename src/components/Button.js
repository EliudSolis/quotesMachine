const Button = ({change, changeColor}) => {
    return (

        <button onClick={change} className={changeColor}>Next Quote</button>

    )
}


export default Button