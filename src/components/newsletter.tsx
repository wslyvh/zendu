interface Props {
  className?: string;
}

export function Newsletter(props: Props) {
  let className = "hero bg-[#c0b7b2] rounded-2xl p-4 text-gray-800";
  if (props.className) className += ` ${props.className}`;

  return (
    <section className={className}>
      <div className="flex flex-col gap-4 items-center hero-content text-center">
        <div>
          <h1 className="text-2xl font-bold">Stay up to date with Zendu?</h1>
          <p className="py-6">
            Subscribe to be the first to know when Zendu launches.
          </p>
        </div>

        <div>
          <form
            className="flex flex-col gap-4 md:flex-row"
            target="_blank"
            method="post"
            action="https://login.sendpulse.com/forms/simple/u/eyJ1c2VyX2lkIjo4Mzk2NTA3LCJhZGRyZXNzX2Jvb2tfaWQiOjEwNjE3OTQsImxhbmciOiJlbiJ9"
          >
            <input
              className="input input-neutral w-full"
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
      </div>
    </section>
  );
}
