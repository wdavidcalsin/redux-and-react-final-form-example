import React from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { addAction } from "./action/add.action";
import "./App.css";

function App() {
  const dataValue = useSelector((state: any) => state.add);
  const dispatch = useDispatch();

  const onSubmit = (values: any) => {
    dispatch(addAction(values));
    console.log(dataValue);
  };

  return (
    <div className="App">
      <h3>Redux and react-final-form</h3>
      <Form
        onSubmit={onSubmit}
        initialValues={{ employed: true }}
        render={({ handleSubmit, form }) => (
          <form
            onSubmit={async (event) => {
              await handleSubmit(event);
              form.reset();
            }}
          >
            <Field name="value" component="input" />
            <button type="submit">Save</button>
          </form>
        )}
      />
      <ul>
        {dataValue.map((data: any, key: number) => (
          <li key={key}>{data.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
