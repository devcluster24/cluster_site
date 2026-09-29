"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const inputClass = "w-full rounded border-b-2 border-b-blue500 bg-transparent px-3 py-3 text-text outline-none focus:border-primary md:px-5";

export default function QuoteRequestForm() {
  const [state, setState] = useState("idle");

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);

    if (String(values.get("website") ?? "").trim()) {
      form.reset();
      setState("success");
      return;
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !anonKey) {
      setState("error");
      return;
    }

    setState("sending");
    const supabase = createClient(url, anonKey);
    const value = (name) => String(values.get(name) ?? "").trim();
    const { error } = await supabase.from("quotes").insert({
      name: value("name"),
      email: value("email"),
      phone: value("phone") || null,
      message: value("message"),
      status: "New",
    });

    if (error) {
      setState("error");
      return;
    }

    form.reset();
    setState("success");
  }

  return (
    <form
      className="w-full max-w-3xl space-y-5 rounded border border-border bg-white px-4 py-6 shadow-2xl md:px-8 md:py-8"
      onSubmit={submit}
    >
      <h1 className="text-center text-2xl font-bold text-text">Get a Quote</h1>
      <div className="grid gap-5 md:grid-cols-2">
        <input
          autoComplete="name"
          className={inputClass}
          maxLength={160}
          name="name"
          placeholder="Full Name"
          required
        />
        <input
          autoComplete="email"
          className={inputClass}
          maxLength={320}
          name="email"
          placeholder="Email Address"
          required
          type="email"
        />
      </div>
      <input
        autoComplete="tel"
        className={inputClass}
        maxLength={40}
        name="phone"
        placeholder="Phone Number (optional)"
        type="tel"
      />
      <textarea
        className={inputClass}
        maxLength={5000}
        name="message"
        placeholder="Tell us about your project"
        required
        rows={4}
      />
      <div aria-hidden="true" className="absolute left-[-10000px]">
        <label htmlFor="quote-website">Website</label>
        <input autoComplete="off" id="quote-website" name="website" tabIndex={-1} />
      </div>
      {state === "success" && (
        <p className="text-sm text-green-700" role="status">
          Thanks. Your quote request has been sent.
        </p>
      )}
      {state === "error" && (
        <p className="text-sm text-red-700" role="alert">
          We could not send your request. Please try again later.
        </p>
      )}
      <div className="flex justify-center md:justify-start">
        <button
          className="border border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          disabled={state === "sending"}
          type="submit"
        >
          {state === "sending" ? "Sending..." : "Send Quote"}
        </button>
      </div>
    </form>
  );
}