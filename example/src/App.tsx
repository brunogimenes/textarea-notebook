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
          const v =
            e.target.type === "range" ? Number(e.target.value) : e.target.value;
          setParams({
            ...params,
            [e.target.name]: v,
          });
        },
        value: params[fieldName],
        name: fieldName,
      };
    },
    [params, setParams]
  );

  console.log(params);

  return (
    <div className="text-center">
      <h1 className="text-3xl">textarea-notebook demo</h1>
      <div className="p-4 w-screen flex flex-col justify-center">
        <div className="flex row items-center">
          <div>lineColor</div>
          <input
            className="bg-gray-100 rounded-md text-xs p-2 m-2"
            type="color"
            {...registerInput("lineColor")}
          />
          {params.lineColor}
        </div>
        <div className="flex row items-center">
          <div>lineBorderColor</div>
          <input
            className="bg-gray-100 rounded-md text-xs p-2 m-2"
            type="color"
            {...registerInput("lineBorderColor")}
          />
          {params.lineBorderColor}
        </div>
        <div className="flex row items-center">
          <div>verticalLineColor</div>
          <input
            className="bg-gray-100 rounded-md text-xs p-2 m-2"
            type="color"
            {...registerInput("verticalLineColor")}
          />
          {params.verticalLineColor}
        </div>
        <div className="flex row items-center">
          <div>fontSize</div>
          <input className="mx-2" type="range" {...registerInput("fontSize")} />
          {params.fontSize}
        </div>
        <div className="flex row items-center">
          <div>marginLeft</div>
          <input
            className="mx-2"
            type="range"
            {...registerInput("marginLeft")}
          />
          {params.marginLeft}
        </div>
        <div className="flex row items-center">
          <div>verticalLineWidth</div>
          <input
            className="mx-2"
            type="range"
            {...registerInput("verticalLineWidth")}
          />
          {params.verticalLineWidth}
        </div>

        <TextareaNotebook
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            minHeight: 400,
          }}
          options={params}
        />
      </div>
    </div>
  );
}

export default App;
