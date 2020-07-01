import cookie from "cookie";

export default (ctx: any) => {
  if (ctx.req !== undefined) {
    if (ctx.req.headers.cookie !== undefined) {
      let { token = null } = cookie.parse(ctx.req.headers.cookie);

      if (token !== null && ctx.req.url === "/login") {
        ctx.res.writeHead(302, { Location: "/" }).end();
      }

      return token;
    }
  }

  return null;
};

export const redirectUserNotLogged = (ctx: any) => {
  if (ctx.req !== undefined) {
    if (ctx.req.headers.cookie === undefined) {
      if (ctx.req.url !== "/login") {
        ctx.res.writeHead(302, { Location: "/login" }).end();
      }
    }
  }
};
