import redirectUserLogged, {
  redirectUserNotLogged,
} from "../pages/redirectUserLogged";
import cookie from "cookie";

describe("redirectUserLogged/redirectUserNotLogged tests", () => {
  const token = "USER";
  const cookieSerialized = cookie.serialize("token", token, {
    sameSite: "lax",
    maxAge: 8400000,
    httpOnly: true,
    path: "/",
  });

  test("Should to redirect user to / when logged and return token", () => {
    const fn = jest.fn();
    const writeHead = () => ({ end: fn });

    const ctx: any = {
      res: { writeHead },
      req: { headers: { cookie: cookieSerialized }, url: "/login" },
    };

    let result = redirectUserLogged(ctx);

    expect(result).toBe(token);
    expect(fn).toBeCalled();
  });

  test("If req is undefined return null", () => {
    const ctx: any = {};

    let result = redirectUserLogged(ctx);

    expect(result).toBeNull();
  });

  test("Redirect user to login when not loggedIn", () => {
    const fn = jest.fn();
    const writeHead = () => ({ end: fn });

    const ctx: any = {
      res: { writeHead },
      req: { headers: {}, url: "/" },
    };

    redirectUserNotLogged(ctx);

    expect(fn).toBeCalled();
  });
});
