import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import "./App.css";

function App() {
  const [data, setData] = useState({} as any);
  const [listData, setListData] = useState([] as any);

  const onSubmit = (values: any) => {
    setData(values);
    setListData([...listData, data]);

    console.log(listData);

    // setData({ value: "" });
  };

  return (
    <div className="App">
      <h3>Redux adn react-final-form</h3>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              value={data.value}
              name="value"
              component="input"
              type="text"
            />
            <button type="submit">Save</button>
          </form>
        )}
      />
      <ul>
        {listData.map((data: any, key: number) => (
          <li key={key}>{data.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
