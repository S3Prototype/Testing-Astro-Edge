export const config = {
  // Only run the middleware on the admin route
  matcher: "/admin",
};

export default function middleware(request) {
  const url = new URL(request.url);
  // You can retrieve IP location or cookies here.
  if (url.pathname === "/admin") {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }
}
