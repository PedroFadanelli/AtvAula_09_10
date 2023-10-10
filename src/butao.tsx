import { useRef } from 'react';

function InputButao() {
 const Inputelemento = useRef<HTMLInputElement>(null)

 function handleClick() {
    if (Inputelemento.current != null) {
      Inputelemento.current.focus();
    }
 };

 return (
    <div>
      <input ref={Inputelemento} type="text" />
      <button onClick={handleClick}>Aperta o butao</button>
    </div>
 );
}

export default InputButao;