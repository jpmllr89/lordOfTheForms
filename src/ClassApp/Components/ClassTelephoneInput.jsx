import { createRef } from "react";
import { Component } from "react";

export class ClassTelephoneInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneInputState: ["", "", "", ""],
    };

    this.reference = [
      createRef(null),
      createRef(null),
      createRef(null),
      createRef(null),
    ];
  }
  setPhoneInputState = (e) => {
    this.setState({ phoneInputState: e.target.value });
  };

  ref1 = this.reference[0];
  ref2 = this.reference[1];
  ref3 = this.reference[2];
  ref4 = this.reference[3];

  createOnChangeHandle = (index) => (e) => {
    if (isNaN(e.target.value)) {
      alert("Please enter a valid phone number");
      return;
    }
    const lengths = [2, 2, 2, 1];
    const currentLength = lengths[index];
    const nextRef = this.reference[index + 1];
    const prevRef = this.reference[index - 1];
    const value = e.target.value;

    const shouldGoToNext = currentLength === value.length;
    const shouldGoToPrev = value.length === 0;
    const newState = this.phoneInputState.map((phoneInput, phoneInputIndex) =>
      index === phoneInputIndex ? e.target.value : phoneInput
    );
    if (
      shouldGoToNext &&
      nextRef &&
      index < 3 &&
      value.length === currentLength
    ) {
      nextRef.current.focus();
    } else if (shouldGoToPrev && prevRef && index > 0) {
      prevRef.current.focus();
    } else if (shouldGoToNext && index === 3) {
      ref4.current.blur();
    }
    this.setTelephoneInput(newState);

    const fullNumber = newState.join("-");
    this.props.setTelephoneNumber(fullNumber);
  };
  render() {
    return (
      <>
        <div>
          <label htmlFor="telephone">Telephone:</label>
          <div id="phone-input-wrap">
            <input
              type="text"
              id="phone-input-1"
              placeholder="55"
              ref={this.ref1}
              value={this.phoneInputState[0]}
              onChange={this.createOnChangeHandle(0)}
            />
            -
            <input
              type="text"
              id="phone-input-2"
              placeholder="55"
              ref={this.ref2}
              value={this.phoneInputState[1]}
              onChange={this.createOnChangeHandle(1)}
            />
            -
            <input
              type="text"
              id="phone-input-3"
              placeholder="55"
              ref={this.ref3}
              value={this.phoneInputState[2]}
              onChange={this.createOnChangeHandle(2)}
            />
            <input
              type="text"
              id="phone-input-4"
              placeholder="5"
              ref={this.ref4}
              value={this.phoneInputState[3]}
              onChange={this.createOnChangeHandle(3)}
            />
          </div>
        </div>
      </>
    );
  }
}
