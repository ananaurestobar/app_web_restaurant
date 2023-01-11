import {useState} from 'react'

const Button = (props) =>{
  const [bussy, setBussy] = useState(false);

  const onClick = async () => {
    setBussy(true);
    await props.onClick();
    setBussy(false);
  };
  
  return (
    <button onClick={onClick} disabled={props.disabled && !bussy}>
      {!bussy ? props.children : "loading..."}      
    </button>
  );
}

export default Button