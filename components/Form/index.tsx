"use client";

import Flex from "@react-css/flex";
import { FormProps } from "../../types/props/Form";

export function RequiredAsterisk({ required }: { required: boolean }) {
  return required ? <span style={{ color: "red" }}>&nbsp;*</span> : null;
}

export function Form({
  formPostUrl,
  submitText,
  fields,
  title,
  blurb,
}: FormProps) {
  return (
    <form action={formPostUrl} method="POST" style={{ padding: "50px 8vw" }}>
      <Flex
        flexDirection="column"
        gap="1rem"
        style={{
          border: "var(--navBorderThickness) solid var(--navBorderColour)",
          padding: "1.5vw 2vw",
        }}
      >
        <Flex
          flexDirection="column"
          gap="1rem"
          style={{ marginBottom: "1rem" }}
        >
          <h2>{title}</h2>
          {blurb && (
            <p style={{ fontStyle: "italic", fontSize: "0.8rem" }}>{blurb}</p>
          )}
        </Flex>
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
                        <RequiredAsterisk required={f.required} />
                      </Flex>
                      <input
                        type={f.type}
                        id={htmlId}
                        name={f.formId}
                        required={f.required}
                        style={{ width: "40%", padding: "10px" }}
                      />
                    </label>
                  );
                }
                case "checkbox":
                case "radio": {
                  return (
                    <fieldset>
                      <legend>
                        {f.label}
                        <RequiredAsterisk required={f.required} />
                      </legend>
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.2rem",
                          listStyleType: "none",
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        {f.options.map((o) => {
                          const optionId = `${htmlId}-option-${o.value}`;
                          return (
                            <li key={o.value}>
                              <label htmlFor={optionId}>
                                <input
                                  type={f.type}
                                  name={f.formId}
                                  value={o.value}
                                  id={optionId}
                                />{" "}
                                {o.label}
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    </fieldset>
                  );
                }
                case "textarea": {
                  return (
                    <label
                      htmlFor={htmlId}
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.2rem",
                      }}
                    >
                      <Flex alignItems="center">
                        {f.label}
                        <RequiredAsterisk required={f.required} />
                      </Flex>
                      <textarea
                        id={htmlId}
                        name={f.formId}
                        required={f.required}
                        style={{ padding: "10px", resize: "vertical" }}
                      />
                    </label>
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
