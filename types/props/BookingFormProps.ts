export type BookingFormProps = {
  formPostUrl: string;
  fields: ((
    | { type: "email" | "text" | "textarea" }
    | { type: "checkbox" | "radio"; options: { label: string }[] }
  ) & {
    label: string;
    formId: string;
    required: boolean;
  })[];
  submitText: string;
};
