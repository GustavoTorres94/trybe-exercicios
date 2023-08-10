import { useDispatch } from "react-redux";
import { inputValue } from "../../redux/actions";

function Input() {  
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(inputValue(e.target.value))
  }

  return (
    <div>
      <label htmlFor="name-input">Insira o Nome e sobrenome do Personagem:
      <input
        type="text"
        id="name-input"
        onChange={handleChange}
        /></label>
    </div>  
)}

export default Input;
