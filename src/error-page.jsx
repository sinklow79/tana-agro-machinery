
export default function ErrorPage() {
  return (
    <div id="error-page" style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      height: "100vh",
      background: "#635bff",
      color: "#fff"
    }}>
      <h1>404</h1>
      <p>Not Found</p>
    </div>
  );
}