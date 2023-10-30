export default function InputBoxComponent({ value, onChange }) {
    return (
        <input
            className="inputComponent"
            type="text"
            placeholder='Mention'
            value={value}
            onChange={onChange}
            data-test="input-component"
        />
    )
}