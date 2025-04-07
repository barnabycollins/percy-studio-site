export type FormProps = {
  title: string;
  blurb?: string;
  formPostUrl: string;
  fields: ((
    | { type: "email" | "text" }
    | { type: "textarea"; placeholder?: string }
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
