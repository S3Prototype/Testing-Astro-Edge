// export const config = {
//   runtime: "edge",
// };

export default (request, response) => {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
};

// export default (req) => {
//   return new Response(`Hello, from ${req.url} I'm now an Serverless Function!`);
// };
