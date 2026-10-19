
import "./Button.css";

export function Button({ onClick, children, type="button"}){
    return (
        <button class="btn" onClick={onClick} type={type}>
            {children}
        </button>
    );
}