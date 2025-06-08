export function Newsletter() {
  return (
    <section
      className="hero bg-base-200 rounded-2xl p-4 text-gray-800 container mx-auto"
      id="subscribe"
    >
      <div className="flex flex-col gap-4 items-center hero-content text-center">
        <h3 className="text-2xl font-bold">Stay up to date with Zendu</h3>
        <p className="text-gray-600 mb-4">
          Subscribe to be the first to know when Zendu launches.
        </p>
        <form
          className="flex flex-col gap-4 md:flex-row"
          target="_blank"
          method="post"
          action="https://login.sendpulse.com/forms/simple/u/eyJ1c2VyX2lkIjo4Mzk2NTA3LCJhZGRyZXNzX2Jvb2tfaWQiOjEwNjE3OTQsImxhbmciOiJlbiJ9"
        >
          <input
            className="input input-neutral w-full rounded-full"
            name="email"
            type="email"
            placeholder="Enter your email.."
            required
          />
          <input type="hidden" name="sender" value="aGVsbG9Ad2VzLmVtYWls" />
          <input type="hidden" name="name" value="" />
          <button className="btn btn-neutral rounded-full">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
