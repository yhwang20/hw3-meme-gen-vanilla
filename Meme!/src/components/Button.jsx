function Button(props) {

    const {id, onClick} = props;


    return (
      <button 
        className = "button is-link is-large is-fullwidth"
        onClick={onClick}>{id}
      </button>
    )
  }
  
  export default Button;