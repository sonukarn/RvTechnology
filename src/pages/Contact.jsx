export default function Contact() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form className="mt-6 grid gap-4 max-w-xl">
        <input className="rounded-xl border px-3 py-2" placeholder="Name" />
        <input
          className="rounded-xl border px-3 py-2"
          placeholder="Email"
          type="email"
        />
        <textarea
          className="rounded-xl border px-3 py-2 min-h-[120px]"
          placeholder="Tell us about your project"
        />
        <button className="rounded-xl bg-brand-600 text-white px-4 py-2">
          Send
        </button>
      </form>
    </div>
  );
}
