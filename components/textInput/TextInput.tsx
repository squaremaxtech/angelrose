export default function TextInput({
    name, value, onChange, label, type, id, errors, errorColor = "#ff6c87", onBlur, placeHolder, ...elProps }: {
        name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void, label?: string, type?: string, id?: string, errors?: string, errorColor?: string, placeHolder?: string
    } & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...elProps}>
            {label !== undefined && <label htmlFor={id !== undefined ? id : name}>{label}</label>}

            <input id={id !== undefined ? id : name} type={type === undefined ? "text" : type} name={name} value={value} placeholder={placeHolder ?? ""} onChange={onChange} onBlur={(e) => { if (onBlur !== undefined) onBlur(e) }} />

            {errors !== undefined && <p style={{ color: errorColor, fontSize: "var(--smallFontSize)" }}>{errors}</p>}
        </div>
    )
}
