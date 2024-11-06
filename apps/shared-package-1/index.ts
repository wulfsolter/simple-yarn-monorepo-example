
const renderMessage = () => {
  const date = new Date().toISOString();
  return `Hello from the shared package! The current date is ${date}.`;
};

export default renderMessage;
