import { createRef } from "react";
import { Component } from "react";

export class ClassTelephoneInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneInputState: ["", "", "", ""],
    };

    // Create an array of refs
    this.reference = Array.from({ length: 4 }, () => createRef());
  }

  createOnChangeHandle = (index) => (e) => {
    const { value } = e.target;

    // Check if the value is a number
    if (isNaN(value)) {
      alert("Please enter a valid phone number");
      return;
    }

    // Define the lengths of each input section
    const lengths = [2, 2, 2, 1];
    const currentLength = lengths[index];

    // Get the next and previous refs
    const nextRef = this.reference[index + 1];
    const prevRef = this.reference[index - 1];

    // Update the state based on the new value

    // Update the state with the new phone input state

    // Focus on the next input if applicable
    if ((value.length === currentLength) == 1 && nextRef && index < 3) {
      nextRef.current.focus();
    } else if (value.length === 0 && prevRef && index > 0) {
      prevRef.current.focus();
    } else if (value.length === currentLength && index === 3) {
      // Blur the last input
      this.reference[3].current.blur();
    }

    let newState = this.state.phoneInputState.map(
      (phoneInput, phoneInputIndex) =>
        index === phoneInputIndex ? value : phoneInput
    );

    this.setState({ phoneInputState: newState });
    console.log(newState);
    console.log(this.state.phoneInputState);

    // Combine the phone input state into a full number
    const fullNumber = newState.join("");

    // Call the parent component's function to update the telephone number
    console.log(fullNumber);
    this.props.setTelephoneNumberHolder(fullNumber);
  };

  render() {
    return (
      <>
        <div>
          <label htmlFor="telephone">Telephone:</label>
          <div id="phone-input-wrap">
            {this.state.phoneInputState.map((value, index) => (
              <input
                key={index}
                type="text"
                id={`phone-input-${index + 1}`}
                placeholder={index === 3 ? "5" : "55"}
                ref={this.reference[index]}
                value={value}
                onChange={this.createOnChangeHandle(index)}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
