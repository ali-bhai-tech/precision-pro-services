import { useState } from "react";
import { submitContactRequest } from "../lib/contact";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "../data/services";
import { contactRequestSchema } from "../lib/validation/contact";
import Button from "./Button";

const empty = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

const field =
  "w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const labelCls = "block text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground";

export function ContactForm() {
  const [values, setValues] = useState(empty);
  const [status, setStatus] = useState("idle");
  const [fieldErrors, setFieldErrors] = useState({});

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    const validation = contactRequestSchema.safeParse(values);
    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors;
      setFieldErrors(errors);
      setStatus("error");
      const firstInvalidField = Object.keys(errors)[0];
      requestAnimationFrame(() => document.getElementById(firstInvalidField)?.focus());
      return;
    }

    setFieldErrors({});
    setStatus("loading");
    try {
      const res = await submitContactRequest({ data: validation.data });
      if (!res?.success) {
        setFieldErrors(res?.fieldErrors ?? {});
        throw new Error("Contact request failed");
      }
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    } finally {
      setStatus((current) => (current === "loading" ? "error" : current));
    }
  };

  const errorFor = (key) => fieldErrors[key]?.[0];

  if (status === "success") {
    return (
      <div
        className="rounded-xl border border-border bg-card p-10 text-center shadow-soft"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-bold">Request received</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thanks — we'll confirm your appointment by phone shortly. For urgent issues, please call
          us directly for immediate dispatch.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-border bg-card p-6 shadow-soft sm:p-8"
      noValidate={false}
    >
      <h2 className="font-display text-xl font-bold">Request Service</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Tell us what's going on and your preferred time — we'll confirm the appointment.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            required
            value={values.name}
            onChange={set("name")}
            className={`mt-2 ${field}`}
            placeholder="Jane Doe"
            aria-invalid={Boolean(errorFor("name"))}
            aria-describedby={errorFor("name") ? "name-error" : undefined}
          />
          <FieldError id="name-error" message={errorFor("name")} />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={values.phone}
            onChange={set("phone")}
            className={`mt-2 ${field}`}
            placeholder="(847) 555-0100"
            aria-invalid={Boolean(errorFor("phone"))}
            aria-describedby={errorFor("phone") ? "phone-error" : undefined}
          />
          <FieldError id="phone-error" message={errorFor("phone")} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={values.email}
            onChange={set("email")}
            className={`mt-2 ${field}`}
            placeholder="you@email.com"
            aria-invalid={Boolean(errorFor("email"))}
            aria-describedby={errorFor("email") ? "email-error" : undefined}
          />
          <FieldError id="email-error" message={errorFor("email")} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="service">
            Service
          </label>
          <select
            id="service"
            required
            value={values.service}
            onChange={set("service")}
            className={`mt-2 ${field}`}
            aria-invalid={Boolean(errorFor("service"))}
            aria-describedby={errorFor("service") ? "service-error" : undefined}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.categoryTitle} — {s.title}
              </option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
          <FieldError id="service-error" message={errorFor("service")} />
        </div>
        <div>
          <label className={labelCls} htmlFor="date">
            Preferred Date
          </label>
          <input
            id="date"
            type="date"
            value={values.date}
            onChange={set("date")}
            className={`mt-2 ${field}`}
            aria-invalid={Boolean(errorFor("date"))}
            aria-describedby={errorFor("date") ? "date-error" : undefined}
          />
          <FieldError id="date-error" message={errorFor("date")} />
        </div>
        <div>
          <label className={labelCls} htmlFor="time">
            Preferred Time
          </label>
          <select id="time" value={values.time} onChange={set("time")} className={`mt-2 ${field}`}>
            <option value="">Any time</option>
            <option>Morning (8am – 12pm)</option>
            <option>Afternoon (12pm – 4pm)</option>
            <option>Evening (4pm – 7pm)</option>
          </select>
          <FieldError id="time-error" message={errorFor("time")} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={values.message}
            onChange={set("message")}
            className={`mt-2 ${field} resize-none`}
            placeholder="Describe the issue, equipment brand and how long it's been happening."
            aria-invalid={Boolean(errorFor("message"))}
            aria-describedby={errorFor("message") ? "message-error" : undefined}
          />
          <FieldError id="message-error" message={errorFor("message")} />
        </div>
      </div>

      {status === "error" ? (
        <p className="mt-4 text-sm text-destructive" role="alert" aria-live="assertive">
          Something went wrong while sending your request. Please try again.
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={status === "loading"}
        aria-disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            <span role="status" aria-live="polite">
              Sending…
            </span>
          </>
        ) : (
          "Request Service"
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We respond to all requests within one business day.
      </p>
    </form>
  );
}

function FieldError({ id, message }) {
  return message ? (
    <p id={id} className="mt-1 text-xs text-destructive" role="alert">
      {message}
    </p>
  ) : null;
}

export default ContactForm;
