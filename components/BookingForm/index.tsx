import { BookingFormProps } from "../../types/props/BookingFormProps";

export function BookingForm({ formPostUrl }: BookingFormProps) {
  return <form action={formPostUrl} method="POST"></form>;
}
