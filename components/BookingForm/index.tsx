import { BookingFormProps } from "../../types/props/BookingFormProps";

export function BookingForm({
  formPostUrl,
  submitText,
  fields,
}: BookingFormProps) {
  return (
    <form action={formPostUrl} method="POST">
      {fields.map((f) => "bam")}
      <button type="submit">{submitText}</button>
    </form>
  );
}
