import { useSelector } from "react-redux/es/hooks/useSelector";
import { ReduxState } from "../../types";
import { Dispatch } from '../../types';
import { characterReturn } from "../../redux/actions";

function Button(){
  const {input} = useSelector((state: ReduxState) => state.inputReducer);
  console.log(input);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const dispatch: Dispatch = useDispatch();
    // e.preventDefault();
    const carr = dispatch(characterReturn(input));
    console.log(carr);
  }
  
  return <button
  type="button"
  onClick={() => handleClick} 
  >
    Pesquisar
  </button>
}

export default Button;