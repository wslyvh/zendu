export function Newsletter() {
  return (
    <section
      className="hero bg-base-200 rounded-2xl p-4 text-gray-800 container mx"
      id="subscribe"
    >
      <div className="flex flex-col gap-4 items-center hero-content text-center">
        <h3 className="text-2xl font-bold">Stay up to date</h3>
        <p className="text-gray-600 mb-4">
          Subscribe to be the first to know when Zendu launches.
        </p>
        <form
          className=" join"
          target="_blank"
          method="post"
          action="https://login.sendpulse.com/forms/simple/u/eyJ1c2VyX2lkIjo4Mzk2NTA3LCJhZGRyZXNzX2Jvb2tfaWQiOjEwNjE3OTQsImxhbmciOiJlbiJ9"
        >
          <div className="join">
            <div>
              <label className="input validator join-item rounded-l-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  name="email"
                  type="email"
                  placeholder="mail@site.com"
                  required
                />
                <input
                  type="hidden"
                  name="sender"
                  value="aGVsbG9Ad2VzLmVtYWls"
                />
                <input type="hidden" name="name" value="" />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <button className="btn btn-neutral join-item rounded-r-full">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
