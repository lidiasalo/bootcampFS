const Mensaje = (props) => {
    console.log(props)
    return <p style = {{color:props.color}}>{props.msg}</p>
  }

export default Mensaje;