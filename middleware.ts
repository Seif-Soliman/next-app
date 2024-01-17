//protected routes
export { default } from "next-auth/middleware"; //check if user logged in or not if not redirects to login page according to matcher

export const config = {
  //*: zero or more parameters
  //+: one or more parameters
  //?: zero or one
  matcher: ["/dashboard/:path*"],
};
