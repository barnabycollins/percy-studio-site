import { FormProps } from "../../types/props/Form";

export function Form({ formPostUrl, submitText, fields }: FormProps) {
  return (
    <form action={formPostUrl} method="POST">
      {fields.map((f) => {
        const htmlId = `form-${formPostUrl}-name-${f.formId}`;

        switch (f.type) {
          case "email":
          case "text": {
            return (
              <label key={f.formId} htmlFor={htmlId}>
                {f.label}
                <input type={f.type} id={htmlId} name={f.formId} />
              </label>
            );
          }
          case "checkbox":
          case "radio": {
            return (
              <fieldset key={f.formId}>
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
      })}
      <button type="submit">{submitText}</button>
    </form>
  );
}
