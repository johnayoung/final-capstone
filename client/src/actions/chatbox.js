
export const UPDATE_INPUT = "UPDATE_INPUT";
export const UPDATE_TEXTAREA = "UPDATE_TEXTAREA"
export const updateInput = input => {
  return {
    type: UPDATE_INPUT,
    input
  };
};

export const updateTextArea = userName => {
  return {
    type: UPDATE_TEXTAREA,
    userName
  }
}