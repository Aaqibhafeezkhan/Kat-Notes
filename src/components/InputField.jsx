
import "./InputField.css";

export function InputField({ value, onInput, placeholder}){
    return (
        <input
            class="input-field"
            type="text"
            value={value}
            onInput={onInput}
            placeholder={placeholder}
        />
    );
}