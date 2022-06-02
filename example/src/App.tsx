import "./App.css";
import { TextareaNotebook } from "textarea-notebook";
import { ChangeEvent, useCallback, useState } from "react";

const defaultParams = {
  verticalLineColor: "#d0a090",
  lineColor: "#fcf9cc",
  lineBorderColor: "#ccd",
  verticalLineWidth: 2,
  fontSize: 18,
  marginLeft: 50,
};
type ParamsKeys = keyof typeof defaultParams;

function App() {
  const [params, setParams] = useState(defaultParams);
  const [value, setValue] = useState("");

  const registerInput = useCallback(
    (fieldName: ParamsKeys) => {
      return {
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          setParams({
            ...params,
            [e.target.name]: e.target.value,
          });
        },
        value: params[fieldName],
        name: fieldName,
      };
    },
    [params, setParams]
  );

  const renderInputs = () => {
    return (
      <div className="flex flex-wrap">
        {Object.keys(params).map((fieldName) => (
          <div className="flex row items-center">
            <div>{fieldName}</div>
            <input
              className="bg-gray-100 rounded-md text-xs p-2 m-2"
              type={
                typeof params[fieldName as ParamsKeys] === "number"
                  ? "number"
                  : "text"
              }
              placeholder={fieldName}
              {...registerInput(fieldName as ParamsKeys)}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="p-4 w-screen flex flex-col justify-center">
        {renderInputs()}
        <TextareaNotebook
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            minHeight: 400,
            fontSize: 40,
          }}
          options={params}
        />
      </div>
    </div>
  );
}

export default App;
