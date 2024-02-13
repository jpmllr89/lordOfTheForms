import PropTypes from "prop-types";
InputWrap.propTypes = {
  inputProps: PropTypes.shape({}),
};
export function InputWrap({ inputProps }) {
  return (
    <>
      <div className="input-wrap">
        <label>{inputProps.labelText}:</label>
        <input {...inputProps} />
      </div>
    </>
  );
}
