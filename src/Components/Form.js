const Form = ({ input, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        value={input}
        onChange={(event) => handleChange(event)}
        placeholder="New Task"
        className="text-input"
      />
      <input value="Add Task" type="submit" className="add-input" />
    </form>
  );
};

export default Form;
