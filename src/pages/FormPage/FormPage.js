import Form from "../../components/Form/Form";
import "./styles.css";

const FormPage = () => {
  return (
    <div className="full-container">
      <h1 className="title">Password Generator</h1>
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
};

export default FormPage;
