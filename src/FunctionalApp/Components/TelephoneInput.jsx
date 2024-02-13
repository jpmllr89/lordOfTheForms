import { useState, useRef } from "react";

export const TelephoneInput = () => {
  const [phoneInputState, setPhoneInputState] = useState(["", "", "", ""]);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const ref1 = refs[0];
  const ref2 = refs[1];
  const ref3 = refs[2];
  const ref4 = refs[3];
  const createOnChangeHandle = (index) => (e) => {
    const lengths = [2, 2, 2, 1];
    const currentLength = lengths[index];
    const nextRef = refs[index + 1];
    const prevRef = refs[index - 1];
    const value = e.target.value;

    const shouldGoToNext = currentLength === value.length;
    const shouldGoToPrev = value.length === 0;
    const newState = phoneInputState.map((phoneInput, phoneInputIndex) =>
      index === phoneInputIndex ? e.target.value : phoneInput
    );
    if (shouldGoToNext) {
      nextRef.current.focus();
    }
    if (shouldGoToPrev) {
      prevRef.current.focus();
    }
    setPhoneInputState(newState);
  };
  return (
    <div>
      <label htmlFor="telephone">Telephone:</label>
      <div id="phone-input-wrap">
        <input
          type="text"
          id="phone-input-1"
          placeholder="55"
          ref={ref1}
          value={phoneInputState[0]}
          onChange={createOnChangeHandle(0)}
        />
        -
        <input
          type="text"
          id="phone-input-2"
          placeholder="55"
          ref={ref2}
          value={phoneInputState[1]}
          onChange={createOnChangeHandle(1)}
        />
        -
        <input
          type="text"
          id="phone-input-3"
          placeholder="55"
          ref={ref3}
          value={phoneInputState[2]}
          onChange={createOnChangeHandle(2)}
        />
        <input
          type="text"
          id="phone-input-4"
          placeholder="5"
          ref={ref4}
          value={phoneInputState[2]}
          onChange={createOnChangeHandle(2)}
        />
      </div>
    </div>
  );
};
