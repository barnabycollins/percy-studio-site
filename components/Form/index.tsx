"use client";

import Flex from "@react-css/flex";
import { FormProps } from "../../types/props/Form";

export function Form({ formPostUrl, submitText, fields }: FormProps) {
  return (
    <form action={formPostUrl} method="POST">
      <Flex flexDirection="column">
        {fields.map((f) => (
          <div key={f.formId}>
            {(() => {
              const htmlId = `form-${formPostUrl}-name-${f.formId}`;

              switch (f.type) {
                case "email":
                case "text": {
                  return (
                    <label
                      htmlFor={htmlId}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "stretch",
                      }}
                    >
                      <div>{f.label}</div>
                      <input type={f.type} id={htmlId} name={f.formId} />
                    </label>
                  );
                }
                case "checkbox":
                case "radio": {
                  return (
                    <fieldset>
                      <legend>{f.label}</legend>
                      <ul>
                        {f.options.map((o) => {
                          const optionId = `${htmlId}-option-${o.value}`;
                          return (
                            <li key={o.value}>
                              <label htmlFor={optionId}>
                                {o.label}
                                <input
                                  type={f.type}
                                  name={f.formId}
                                  value={o.value}
                                  id={optionId}
                                />
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    </fieldset>
                  );
                }
              }
            })()}
          </div>
        ))}
        <div>
          <button type="submit">{submitText}</button>
        </div>
      </Flex>
    </form>
  );
}
