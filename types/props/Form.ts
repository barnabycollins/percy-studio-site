export type FormProps = {
  formPostUrl: string;
  fields: ((
    | { type: "email" | "text" | "textarea" }
    | {
        type: "checkbox" | "radio";
        options: { label: string; value: string }[];
      }
  ) & {
    label: string;
    formId: string;
    required: boolean;
  })[];
  submitText: string;
};
