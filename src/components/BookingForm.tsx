"use client";

import {
  useState,
  useRef,
  useEffect,
  useId,
  FormEvent,
  KeyboardEvent,
} from "react";
import { Send, CheckCircle, AlertCircle, ChevronDown, Check } from "lucide-react";

const SERVICES = [
  "Free consultation",
  "1:1 ABA Therapy",
  "Respite Services",
  "Early Intervention",
  "Social Skills Groups",
  "Parent / Caregiver Training",
  "School Shadowing & Consultation",
  "OAP funding questions",
  "Other",
] as const;

type FormState = {
  parentName: string;
  email: string;
  phone: string;
  service: string;
  preferredTime: string;
  message: string;
};

const INITIAL: FormState = {
  parentName: "",
  email: "",
  phone: "",
  service: "",
  preferredTime: "",
  message: "",
};

const fieldClass =
  "w-full px-4 py-3 rounded-xl border border-gold-300/80 bg-white text-chocolate-800 placeholder:text-chocolate-400/70 focus:outline-none focus:ring-2 focus:ring-gold-400/60 focus:border-gold-400 transition-colors";

const labelClass =
  "block mb-1.5 text-xs font-semibold uppercase tracking-wide text-chocolate-700";

type ServiceSelectProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
};

function ServiceSelect({
  id,
  value,
  onChange,
  disabled = false,
  required = false,
}: ServiceSelectProps) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listboxId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const index = value ? SERVICES.findIndex((s) => s === value) : 0;
    setHighlight(index >= 0 ? index : 0);
    // Focus the list for keyboard navigation once it mounts
    requestAnimationFrame(() => listRef.current?.focus());
  }, [open, value]);

  useEffect(() => {
    if (!open || highlight < 0) return;
    const option = listRef.current?.children[highlight] as
      | HTMLElement
      | undefined;
    option?.scrollIntoView({ block: "nearest" });
  }, [highlight, open]);

  const select = (service: string) => {
    onChange(service);
    setOpen(false);
  };

  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onListKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((i) => (i + 1) % SERVICES.length);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((i) => (i <= 0 ? SERVICES.length - 1 : i - 1));
      return;
    }
    if (e.key === "Home") {
      e.preventDefault();
      setHighlight(0);
      return;
    }
    if (e.key === "End") {
      e.preventDefault();
      setHighlight(SERVICES.length - 1);
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (highlight >= 0) select(SERVICES[highlight]);
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <input
        type="text"
        name="service"
        value={value}
        required={required}
        tabIndex={-1}
        aria-hidden="true"
        className="sr-only"
        onChange={() => {}}
      />
      <button
        id={id}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => !disabled && setOpen((v) => !v)}
        onKeyDown={onTriggerKeyDown}
        className={`${fieldClass} flex items-center justify-between gap-3 text-left cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed ${
          open ? "ring-2 ring-gold-400/60 border-gold-400" : ""
        }`}
      >
        <span
          className={
            value ? "text-chocolate-800 truncate" : "text-chocolate-400/70"
          }
        >
          {value || "Select a service…"}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gold-600 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          aria-labelledby={id}
          tabIndex={-1}
          onKeyDown={onListKeyDown}
          className="absolute z-30 mt-2 w-full max-h-64 overflow-y-auto rounded-xl border border-gold-300/80 bg-white py-1.5 shadow-[0_10px_30px_-8px_rgba(49,32,17,0.2)] focus:outline-none"
        >
          {SERVICES.map((service, index) => {
            const selected = value === service;
            const active = highlight === index;

            return (
              <li
                key={service}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setHighlight(index)}
                onClick={() => select(service)}
                className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors ${
                  active
                    ? "bg-gold-100 text-chocolate-800"
                    : "text-chocolate-700"
                } ${selected ? "font-semibold" : "font-medium"}`}
              >
                <span>{service}</span>
                {selected && (
                  <Check
                    size={16}
                    className="shrink-0 text-gold-600"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function BookingForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [pendingFocus, setPendingFocus] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    const requestFocus = () => {
      setStatus((s) => (s === "success" ? "idle" : s));
      setPendingFocus(true);
    };

    const maybeFocusFromHash = () => {
      if (window.location.hash === "#book") requestFocus();
    };

    maybeFocusFromHash();
    window.addEventListener("hashchange", maybeFocusFromHash);

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest?.(
        'a[href="#book"]',
      );
      if (!anchor) return;
      // hashchange may not fire when already on #book
      window.setTimeout(requestFocus, 0);
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("hashchange", maybeFocusFromHash);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    if (!pendingFocus || status === "success" || status === "loading") return;

    const timer = window.setTimeout(() => {
      nameRef.current?.focus();
      setPendingFocus(false);
    }, 450);

    return () => window.clearTimeout(timer);
  }, [pendingFocus, status]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (!form.service) {
      setStatus("error");
      setErrorMessage("Please select a service of interest.");
      return;
    }

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-3xl border border-gold-300/80 bg-gold-50/40 px-6 py-10 md:px-8 text-center"
      >
        <CheckCircle
          className="mx-auto mb-4 text-gold-600"
          size={40}
          strokeWidth={1.75}
        />
        <h3 className="font-serif text-2xl font-semibold text-chocolate-800 mb-2">
          Request received
        </h3>
        <p className="text-chocolate-600 font-light leading-relaxed max-w-md mx-auto mb-6">
          Thank you — we&apos;ll review your details and get back to you soon
          to schedule your consultation.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-chocolate-800 hover:text-gold-600 transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-gold-300/80 bg-gold-50/30 px-5 py-7 sm:px-7 sm:py-8 md:px-8 space-y-4"
      noValidate
    >
      <div>
        <h3 className="font-serif text-2xl font-semibold text-chocolate-800">
          Request an appointment
        </h3>
        <p className="mt-1.5 text-sm text-chocolate-600 font-light leading-relaxed">
          Share a few details and we&apos;ll follow up to book your free
          consultation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="parentName" className={labelClass}>
            Your name <span className="text-gold-600">*</span>
          </label>
          <input
            ref={nameRef}
            id="parentName"
            name="parentName"
            type="text"
            required
            autoComplete="name"
            value={form.parentName}
            onChange={(e) => update("parentName", e.target.value)}
            className={fieldClass}
            placeholder="Parent / caregiver name"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-gold-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={fieldClass}
            placeholder="you@email.com"
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClass}
            placeholder="Optional"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            Service of interest <span className="text-gold-600">*</span>
          </label>
          <ServiceSelect
            id="service"
            value={form.service}
            onChange={(value) => update("service", value)}
            disabled={status === "loading"}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="preferredTime" className={labelClass}>
          Preferred days / times
        </label>
        <input
          id="preferredTime"
          name="preferredTime"
          type="text"
          value={form.preferredTime}
          onChange={(e) => update("preferredTime", e.target.value)}
          className={fieldClass}
          placeholder="e.g. Weekday mornings"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${fieldClass} resize-y min-h-[6rem]`}
          placeholder="Tell us a bit about what you're looking for…"
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-chocolate-800 text-gold-50 rounded-full font-semibold text-base hover:bg-chocolate-700 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <span
              className="h-5 w-5 border-2 border-gold-50/30 border-t-gold-50 rounded-full animate-spin"
              aria-hidden="true"
            />
            Sending…
          </>
        ) : (
          <>
            Send request
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
