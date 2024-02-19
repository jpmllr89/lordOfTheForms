import PropTypes from "prop-types";
FunctionalTextInput.propTypes = {
  inputProps: PropTypes.shape({}),
};
export function FunctionalTextInput({ inputProps }) {
  return (
    <>
      <div className="input-wrap">
        <label>{inputProps.labelText}:</label>
        <input {...inputProps} />
      </div>
    </>
  );
}
