"use client";

import Flex from "@react-css/flex";
import { FormProps } from "../../types/props/Form";

export function Form({ formPostUrl, submitText, fields, title }: FormProps) {
  return (
    <form action={formPostUrl} method="POST" style={{ padding: "50px 8vw" }}>
      <Flex
        flexDirection="column"
        gap="10"
        style={{
          border: "var(--navBorderThickness) solid var(--navBorderColour)",
          padding: "1.5vw 2vw",
        }}
      >
        <h2>{title}</h2>
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
                      }}
                    >
                      <Flex alignItems="center" style={{ width: "30%" }}>
                        {f.label}
                      </Flex>
                      <input
                        type={f.type}
                        id={htmlId}
                        name={f.formId}
                        style={{ width: "40%", padding: "10px" }}
                      />
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
        <Flex justifyContent="center">
          <button type="submit" style={{ fontSize: 18, padding: "10px 20px" }}>
            {submitText}
          </button>
        </Flex>
      </Flex>
    </form>
  );
}
